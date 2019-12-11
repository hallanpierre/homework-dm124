class Delivery {
    constructor( 
                orderId, 
                clientId, 
                receiverName,
                receiverCpf,
                isBuyer,
                dateTimeDelivery,
                location,
                status) {
        this.orderId = orderId, 
        this.clientId = clientId, 
        this.receiverName = receiverName,
        this.receiverCpf = receiverCpf,
        this.isBuyer = isBuyer,
        this.dateTimeDelivery = dateTimeDelivery,
        this.location = location,
        this.status = status;
    }
}

module.exports = Delivery;