const Delivery = require('../model/Delivery')

const user = process.env.USER || 'user';
const password = process.env.PASSWORD || 'mongodb';
const mongo = require('mongodb').MongoClient;
const url = `mongodb+srv://${user}:${password}@cluster0-otdkl.mongodb.net/dm124-databse`;

const ObjectID = require('mongodb').ObjectID;
let db;

mongo.connect(url, (err, client) => {
    if (err) return console.log(err);
    db = client.db('dm124-database');
});

class DeliveryService {

    static add(newDelivery) {
        return new Promise((resolve) => {
            const delivery = new Delivery(newDelivery.orderId, 
                newDelivery.clientId, 
                newDelivery.receiverName,
                newDelivery.receiverCpf,
                newDelivery.isBuyer,
                newDelivery.dateTimeDelivery,
                newDelivery.location,
                newDelivery.status || 'PENDENTE');

            db.collection('delivery').save(delivery, (err, result) => {
                if (err) return console.log(err);
                resolve(delivery);
            });
        });
    }

    static getAll() {
        return new Promise((resolve) => {
            db.collection('delivery').find().toArray((err, results) => {
                if (err) return console.log(err);
                resolve(results);
            });
        });
    }

    static getById(id) {
        return new Promise((resolve) => {
            const query = { _id: ObjectID(id) };
            db.collection('delivery').find(query).toArray((err, result) => {
                if (err) return console.log(err);
                resolve(result[0]);
            });
        });
    }

    static update(id, updatedDelivery) {
        return new Promise(async (resolve) => {
            const query = { _id: ObjectID(id) };
            const newValues = { $set: updatedDelivery };
            db.collection('delivery').updateOne(query, newValues, (err, result) => {
                if (err) return console.log(err);
                const delivery = DeliveryService.getById(id);
                resolve(delivery);
            });
        });
    }

    static delete(id) {
        return new Promise(async (resolve) => {
            const delivery = await DeliveryService.getById(id);
            if (delivery) {
                db.collection('delivery').deleteOne(delivery, (err, result) => {
                    if (err) return console.log(err);
                    resolve(true);
                });
            } else {
                resolve(false);
            }
        });
    }
}

module.exports = DeliveryService;