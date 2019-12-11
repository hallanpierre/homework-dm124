class Delivery {
    constructor( 
                orderId, 
                clientId, 
                receiverName,
                receiverCpf,
                isBuyer,
                dateTimeDelivery,
                location) {
        this.orderId = orderId, 
        this.clientId = clientId, 
        this.receiverName = receiverName,
        this.receiverCpf = receiverCpf,
        this.isBuyer = isBuyer,
        this.dateTimeDelivery = dateTimeDelivery,
        this.location = location
    }
}

module.exports = Delivery;