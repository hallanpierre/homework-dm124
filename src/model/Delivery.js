class Delivery {
    constructor(
                id, 
                orderId, 
                clienteId, 
                receiverName,
                receiverCpf,
                isBuyer,
                dateTimeDelivery,
                location) {
        this.id = id, 
        this.orderId = orderId, 
        this.clienteId = clienteId, 
        this.receiverName = receiverName,
        this.receiverCpf = receiverCpf,
        this.isBuyer = isBuyer,
        this.dateTimeDelivery = dateTimeDelivery,
        this.location = location
    }
}

module.exports = Delivery;