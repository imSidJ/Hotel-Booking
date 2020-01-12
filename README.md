# Hotel Booking APIs

These APIs will help to check the availability of rooms and booking available rooms.

## Check Available Rooms API

Endpoint - /hotel/room/availibility

Request Body Prameters-

| Parameter  | Description |
| ------------- | ------------- |
| startDate  | Booking start date in yyyy-mm-dd format |
| endDate  | Booking end date in yyyy-mm-dd format  |

Response Body Prameters -

| Parameter  | Description |
| ------------- | ------------- |
| available_rooms  | Array of available room numbers |


Example :

Request -
```

{
  "startDate": "2020-01-20",
  "endDate": "2020-01-25"
}
```

Response -
```

{
  "available_rooms": "[1, 2, 6, 9]"
}
```


## Room Booking API

Endpoint - /hotel/room/booking

Request Body Prameters-

| Parameter  | Description |
| ------------- | ------------- |
| roomNumber  | Room to be booked  |
| customerName  | Name of the customer  |
| startDate  | Booking start date in yyyy-mm-dd format |
| endDate  | Booking end date in yyyy-mm-dd format  |


Example :

Request -
```

{
  "roomNumber": "5",
  "customrName": "Siddharth Jadhav",
  "startDate": "2020-01-20",
  "endDate": "2020-01-25"
}
```

Response -
```

{
  "error":false,
  "message":"Room booked successfull"
}
```