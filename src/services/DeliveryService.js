const Delivery = require('../model/Delivery')

const db = {};
let sequence = 0;

class DeliveryService {
    static add(newDelivery) {
        return new Promise((resolve) => {
            const delivery = new Delivery(++sequence, 
                newDelivery.orderId, 
                newDelivery.idClient, 
                newDelivery.receiverName,
                newDelivery.receiverCpf,
                newDelivery.isBuyer,
                newDelivery.dateTimeDelivery,
                newDelivery.location);
            db[delivery.id] = delivery;
            resolve(delivery);
        });
    }

    static getAll() {
        const toArray = key => db[key];
        return new Promise((resolve) => {
            const deliveries = Object.keys(db).map(toArray);
            resolve(deliveries);
        });
    }

    static getById(id) {
        return new Promise((resolve) => {
            resolve(db[id]);
        });
    }

    static update(taskId, updatedTask) {
        return new Promise(async (resolve) => {
            const task = await TaskService.getById(taskId);
            if (task) {
                const hasValue = updatedTask.done != null;
                task.done = hasValue ? updatedTask.done : task.done;
                task.description = updatedTask.description || TaskService.description;
                resolve(task);
            }
            resolve(null);
        });
    }

    static delete(id) {
        return new Promise((resolve) => {
            const delivery = db[id];
            if (delivery) {
                delete db[id];
                resolve(true);
            }
            resolve(false);
        });
    }
}

module.exports = DeliveryService;