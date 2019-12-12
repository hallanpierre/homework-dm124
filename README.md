# DM124 - POSTGRATUATE - INATEL
Mobile Development and Cloud Computing

## The API is available to use on the internet
You can test api on the internet using the url above:
https://mighty-castle-73044.herokuapp.com

There are five endpoints to use the API, explain above.
To help you, there is a postman collection with all the endpoints in root of this project.

## How to install

1 - Download this project.
2 - Open a terminal in the project folder.
3 - Run the command 'npm install' to install all dependencies.

## How to run

1 - Open a terminal in the project folder.
2 - Run the command 'npm start'.
3 - The url 'http://localhost:3000' is available to use in endpoints.

## Endpoints

All the endpoints needs authentication to execute;
For this, Base Auth (username: dm124, password: alunoinatel)

#### Create Delivery

```bash
POST
http://url/api/delivery
Content-Type: application/json

Body:
{
	{
		"orderId": 8,
		"clientId": 8,
		"receiverName": "Nome8",
		"receiverCpf": "888.888.888-88",
		"isBuyer": false,
		"dateTimeDelivery": "2011-12-11 17:00 PM",
		"location": "Santa Rita do Sapucaí, MG - Brasil"
	}
}

Response (201 Created):

Body:
{
    "orderId": 8,
    "clientId": 8,
    "receiverName": "Nome8",
    "receiverCpf": "888.888.888-88",
    "isBuyer": false,
    "dateTimeDelivery": "2011-12-11 17:00 PM",
    "location": "Santa Rita do Sapucaí, MG - Brasil",
    "status": "PENDENTE",
    "_id": "5df177c8e1cdb00017b004e1"
}

```

#### List Deliveries
```bash
GET
http://url/api/delivery
Content-Type: application/json

Response (200 OK):
Body:
[
    {
        "_id": "5df16a11e1cdb00017b004e0",
        "orderId": 7,
        "clientId": 2,
        "receiverName": "Nome1",
        "receiverCpf": "111.111.111-11",
        "isBuyer": false,
        "dateTimeDelivery": "2011-12-11T19:43:37+0100",
        "location": "001 001 001",
        "status": "ENTREGUE"
    },
    {
        "_id": "5df177c8e1cdb00017b004e1",
        "orderId": 8,
        "clientId": 8,
        "receiverName": "Nome8",
        "receiverCpf": "888.888.888-88",
        "isBuyer": false,
        "dateTimeDelivery": "2011-12-11 17:00 PM",
        "location": "Santa Rita do Sapucaí, MG - Brasil",
        "status": "PENDENTE"
    }
]
```

#### Get Delivery by ID

```bash
GET
http://url/api/delivery/<deliveryId>
Content-Type: application/json

Response (200 OK):
Body:
{
	"_id": "5df177c8e1cdb00017b004e1",
	"orderId": 8,
	"clientId": 8,
	"receiverName": "Nome8",
	"receiverCpf": "888.888.888-88",
	"isBuyer": false,
	"dateTimeDelivery": "2011-12-11 17:00 PM",
	"location": "Santa Rita do Sapucaí, MG - Brasil",
	"status": "PENDENTE"
}
```

#### Update Delivery

```bash
PATCH
http://url/api/delivery/<deliveryId>
Content-Type: application/json

Body:
{
    "receiverName": "Novo Nome",
    "status": "ENTREGUE"
}

Response (200 OK):
Body:
{
	"_id": "5df177c8e1cdb00017b004e1",
	"orderId": 8,
	"clientId": 8,
	"receiverName": "Novo Nome",
	"receiverCpf": "888.888.888-88",
	"isBuyer": false,
	"dateTimeDelivery": "2011-12-11 17:00 PM",
	"location": "Santa Rita do Sapucaí, MG - Brasil",
	"status": "ENTREGUE"
}
```

#### Delete Order

```bash
DELETE
http://url/api/delivery/<orderId>
Content-Type: application/json

Response (200 OK):
Body: nothing in response

```
