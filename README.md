# Hotel Booking APIs

These APIs will help to check the availability of rooms and booking available rooms.

## Check Availble Rooms API

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