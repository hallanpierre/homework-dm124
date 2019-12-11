const Delivery = require('../model/Delivery')

const user = process.env.USER || 'user';
const password = process.env.PASSWORD || 'mongodb';
const mongo = require('mongodb').MongoClient;
const url = `mongodb+srv://${user}:${password}@cluster0-otdkl.mongodb.net/dm124-databse`;

let db;
let sequence = 0;

mongo.connect(url, (err, client) => {
    if (err) return console.log(err);
    db = client.db('dm124-database');
});

const mapDelivery = delivery => {
    return new Delivery(delivery.id, 
        delivery.orderId, 
        delivery.clientId, 
        delivery.receiverName,
        delivery.receiverCpf,
        delivery.isBuyer,
        delivery.dateTimeDelivery,
        delivery.location);
};

class DeliveryService {

    static add(newDelivery) {
        return new Promise((resolve) => {
            const delivery = new Delivery(++sequence, 
                newDelivery.orderId, 
                newDelivery.clientId, 
                newDelivery.receiverName,
                newDelivery.receiverCpf,
                newDelivery.isBuyer,
                newDelivery.dateTimeDelivery,
                newDelivery.location);

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
                resolve(results.map(mapDelivery));
            });
        });
    }

    static getById(id) {
        return new Promise((resolve) => {
            const query = { "id": Number(id) };
            db.collection('delivery').find(query).toArray((err, result) => {
                if (err) return console.log(err);
                resolve(result.map(mapDelivery)[0]);
            });
        });
    }

    static update(deliveryId, updatedDelivery) {
        return new Promise(async (resolve) => {
            const query = {
                id: Number(deliveryId)
            }
            const delivery = await DeliveryService.getById(deliveryId);
            if (delivery) {
                delivery.receiverName = updatedDelivery.receiverName || delivery.receiverName;
                delivery.receiverCpf = updatedDelivery.receiverCpf || delivery.receiverCpf;
                delivery.isBuyer = updatedDelivery.isBuyer || delivery.isBuyer;
                delivery.dateTimeDelivery = updatedDelivery.dateTimeDelivery || delivery.dateTimeDelivery;
                delivery.location = updatedDelivery.location || delivery.location;
                db.collection('delivery').replaceOne(query, delivery, (err, result) => {
                    if (err) return console.log(err);
                    resolve(delivery);
                });
            }
            else {
                resolve(null);
            }
        });
    }

    static delete(deliveryId) {
        return new Promise(async (resolve) => {
            const query = {
                id: Number(deliveryId)
            }
            const delivery = await DeliveryService.getById(deliveryId);
            console.log(delivery);
            if (delivery) {
                db.collection('delivery').deleteOne(query, (err, result) => {
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