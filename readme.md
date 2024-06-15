# Meeting Room Booking System for Co-working spaces

### This project is build with Typscript, node, Express and with mongoDB mongoose:

### Following models as requirements are fullfiled:

1. User model
2. Room model
3. Slot
4. Booking model

## User:

1. -Response you will get from route: /api/auth/signup (POST) :

```
{
    "success": true,
    "statusCode": 200,
    "message": "User registered successfully",
    "data": {
        "name": "akilinjamam2",
        "email": "web@akilinjamam2.com",
        "password": "ak-password",
        "phone": "1234567890",
        "address": "chittagong, bangladesh",
        "role": "user",
        "_id": "666d109249d51ada1ffe4dc3",
        "__v": 0
    }
}

```

2. - Response you will get from Route: /api/auth/login (POST): token will be valid for 5 days from today

```
{
    "success": true,
    "statusCode": 200,
    "message": "User logged in successfully",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IndlYkBha2lsaW5qYW1hbS5jb20iLCJyb2xlIjoidXNlciIsImlhdCI6MTcxODQyMzc1NiwiZXhwIjoxNzE4NTEwMTU2fQ.lRdmUp0mvn99mFZav6kh3pHhKfY9HXOQAiKhTg0tNs8",
    "data": {
        "_id": "666c941a6a539d5727a3ffbe",
        "name": "akilinjamam",
        "email": "web@akilinjamam.com",
        "phone": "1234567890",
        "address": "chittagong, bangladesh",
        "role": "user",
        "__v": 0
    }
}


```

## Room :

3. - Response you will get from Route: /api/rooms (POST):

```
{
    "success": true,
    "statusCode": 200,
    "message": "Room added successfully",
    "data": {
        "name": "Meeting Room",
        "roomNo": 401,
        "floorNo": 3,
        "capacity": 40,
        "pricePerSlot": 400,
        "amenities": [
            "Projector",
            "Whiteboard"
        ],
        "isDeleted": false,
        "_id": "666d128649d51ada1ffe4dc6",
        "__v": 0
    }
}

```

4. - Response you will get from Route: /api/rooms/:id (GET):

```
{
    "success": true,
    "statusCode": 200,
    "message": "Room retrieved successfully",
    "data": {
        "_id": "666c33f0c5805eaa8cc5450a",
        "name": "Conference Room",
        "roomNo": 201,
        "floorNo": 1,
        "capacity": 20,
        "pricePerSlot": 100,
        "amenities": [
            "Projector",
            "Whiteboard"
        ],
        "isDeleted": false,
        "__v": 0
    }
}


```

5. - Response you will get from Route: /api/rooms (GET):

```
{
"success": true,
"statusCode": 200,
"message": "Room retrieved successfully",
"data": [
{
"_id": "666c33f0c5805eaa8cc5450a",
"name": "Conference Room",
"roomNo": 201,
"floorNo": 1,
"capacity": 20,
"pricePerSlot": 100,
"amenities": [
"Projector",
"Whiteboard"
],
"isDeleted": false,
"__v": 0
},
{
"_id": "666c407118476b918adf475a",
"name": "Meeting Room",
"roomNo": 301,
"floorNo": 2,
"capacity": 10,
"pricePerSlot": 200,
"amenities": [
"Whiteboard"
],
"isDeleted": false,
"__v": 0
},
{
"_id": "666d128649d51ada1ffe4dc6",
"name": "Meeting Room",
"roomNo": 401,
"floorNo": 3,
"capacity": 40,
"pricePerSlot": 400,
"amenities": [
"Projector",
"Whiteboard"
],
"isDeleted": false,
"__v": 0
}
]
}

```

6. - Response you will get from Route:/api/rooms/:id (PUT) by admin only

```
{
    "success": true,
    "statusCode": 200,
    "message": "Room updated successfully",
    "data": {
        "_id": "666c33f0c5805eaa8cc5450a",
        "name": "Conference Room",
        "roomNo": 201,
        "floorNo": 1,
        "capacity": 20,
        "pricePerSlot": 100,
        "amenities": [
            "Projector",
            "Whiteboard"
        ],
        "isDeleted": false,
        "__v": 0
    }
}

```

7. - Response you will get from Route:/api/rooms/:id (DELETE) by admin

```
{
  "success": true,
  "statusCode": 200,
  "message": "Room deleted successfully",
  "data": {
    "_id": "deleted id",
    "name": "Conference Room",
    "roomNo": 201,
    "floorNo": 1,
    "capacity": 20,
    "pricePerSlot": 200,
    "amenities": ["Projector", "Whiteboard"],
    "isDeleted": true
  }
}


```

8. - Response you will get from Route:/api/slots(POST) by admin

```
{
    "success": true,
    "statusCode": 200,
    "message": "Slots created successfully",
    "data": [
        {
            "room": "666d128649d51ada1ffe4dc6",
            "date": "2024-06-15",
            "startTime": "14:00",
            "endTime": "15:00",
            "isBooked": false,
            "_id": "666d15e849d51ada1ffe4dca",
            "__v": 0
        },
        {
            "room": "666d128649d51ada1ffe4dc6",
            "date": "2024-06-15",
            "startTime": "15:00",
            "endTime": "16:00",
            "isBooked": false,
            "_id": "666d15e849d51ada1ffe4dcb",
            "__v": 0
        },
        {
            "room": "666d128649d51ada1ffe4dc6",
            "date": "2024-06-15",
            "startTime": "16:00",
            "endTime": "17:00",
            "isBooked": false,
            "_id": "666d15e849d51ada1ffe4dcc",
            "__v": 0
        },
        {
            "room": "666d128649d51ada1ffe4dc6",
            "date": "2024-06-15",
            "startTime": "17:00",
            "endTime": "18:00",
            "isBooked": false,
            "_id": "666d15e849d51ada1ffe4dcd",
            "__v": 0
        },
        {
            "room": "666d128649d51ada1ffe4dc6",
            "date": "2024-06-15",
            "startTime": "18:00",
            "endTime": "19:00",
            "isBooked": false,
            "_id": "666d15e849d51ada1ffe4dce",
            "__v": 0
        },
        {
            "room": "666d128649d51ada1ffe4dc6",
            "date": "2024-06-15",
            "startTime": "19:00",
            "endTime": "20:00",
            "isBooked": false,
            "_id": "666d15e849d51ada1ffe4dcf",
            "__v": 0
        }
    ]
}

```

9. - Response you will get from Route:/api/slots/availability(GET)

```
{
"success": true,
"statusCode": 200,
"message": "Available slots retrieved successfully",
"data": [
{
"_id": "666c7c24196954ac212f070a",
"room": {
"_id": "666c33f0c5805eaa8cc5450a",
"name": "Conference Room",
"roomNo": 201,
"floorNo": 1,
"capacity": 20,
"pricePerSlot": 100,
"amenities": [
"Projector",
"Whiteboard"
],
"isDeleted": false,
"__v": 0
},
"date": "2024-06-15",
"startTime": "11:00",
"endTime": "12:00",
"isBooked": false,
"__v": 0
},
{
"_id": "666c7c24196954ac212f070b",
"room": {
"_id": "666c33f0c5805eaa8cc5450a",
"name": "Conference Room",
"roomNo": 201,
"floorNo": 1,
"capacity": 20,
"pricePerSlot": 100,
"amenities": [
"Projector",
"Whiteboard"
],
"isDeleted": false,
"__v": 0
},
"date": "2024-06-15",
"startTime": "12:00",
"endTime": "13:00",
"isBooked": false,
"__v": 0
},
{
"_id": "666c7c24196954ac212f070c",
"room": {
"_id": "666c33f0c5805eaa8cc5450a",
"name": "Conference Room",
"roomNo": 201,
"floorNo": 1,
"capacity": 20,
"pricePerSlot": 100,
"amenities": [
"Projector",
"Whiteboard"
],
"isDeleted": false,
"__v": 0
},
"date": "2024-06-15",
"startTime": "13:00",
"endTime": "14:00",
"isBooked": false,
"__v": 0
},
{
"_id": "666d15e849d51ada1ffe4dca",
"room": {
"_id": "666d128649d51ada1ffe4dc6",
"name": "Meeting Room",
"roomNo": 401,
"floorNo": 3,
"capacity": 40,
"pricePerSlot": 400,
"amenities": [
"Projector",
"Whiteboard"
],
"isDeleted": false,
"__v": 0
},
"date": "2024-06-15",
"startTime": "14:00",
"endTime": "15:00",
"isBooked": false,
"__v": 0
},
{
"_id": "666d15e849d51ada1ffe4dcb",
"room": {
"_id": "666d128649d51ada1ffe4dc6",
"name": "Meeting Room",
"roomNo": 401,
"floorNo": 3,
"capacity": 40,
"pricePerSlot": 400,
"amenities": [
"Projector",
"Whiteboard"
],
"isDeleted": false,
"__v": 0
},
"date": "2024-06-15",
"startTime": "15:00",
"endTime": "16:00",
"isBooked": false,
"__v": 0
},
{
"_id": "666d15e849d51ada1ffe4dcc",
"room": {
"_id": "666d128649d51ada1ffe4dc6",
"name": "Meeting Room",
"roomNo": 401,
"floorNo": 3,
"capacity": 40,
"pricePerSlot": 400,
"amenities": [
"Projector",
"Whiteboard"
],
"isDeleted": false,
"__v": 0
},
"date": "2024-06-15",
"startTime": "16:00",
"endTime": "17:00",
"isBooked": false,
"__v": 0
},
{
"_id": "666d15e849d51ada1ffe4dcd",
"room": {
"_id": "666d128649d51ada1ffe4dc6",
"name": "Meeting Room",
"roomNo": 401,
"floorNo": 3,
"capacity": 40,
"pricePerSlot": 400,
"amenities": [
"Projector",
"Whiteboard"
],
"isDeleted": false,
"__v": 0
},
"date": "2024-06-15",
"startTime": "17:00",
"endTime": "18:00",
"isBooked": false,
"__v": 0
},
{
"_id": "666d15e849d51ada1ffe4dce",
"room": {
"_id": "666d128649d51ada1ffe4dc6",
"name": "Meeting Room",
"roomNo": 401,
"floorNo": 3,
"capacity": 40,
"pricePerSlot": 400,
"amenities": [
"Projector",
"Whiteboard"
],
"isDeleted": false,
"__v": 0
},
"date": "2024-06-15",
"startTime": "18:00",
"endTime": "19:00",
"isBooked": false,
"__v": 0
},
{
"_id": "666d15e849d51ada1ffe4dcf",
"room": {
"_id": "666d128649d51ada1ffe4dc6",
"name": "Meeting Room",
"roomNo": 401,
"floorNo": 3,
"capacity": 40,
"pricePerSlot": 400,
"amenities": [
"Projector",
"Whiteboard"
],
"isDeleted": false,
"__v": 0
},
"date": "2024-06-15",
"startTime": "19:00",
"endTime": "20:00",
"isBooked": false,
"__v": 0
}
]
}

```

10. - Response you will get from Route:/api/bookings (POST)

```

{
    "success": true,
    "statusCode": 200,
    "message": "Booking created successfully",
    "data": {
        "_id": "666ccfb37a05e2481ce32620",
        "date": "2024-06-15",
        "slots": [
            {
                "_id": "666c7c24196954ac212f0708",
                "room": "666c33f0c5805eaa8cc5450a",
                "date": "2024-06-15",
                "startTime": "09:00",
                "endTime": "10:00",
                "isBooked": true,
                "__v": 0
            },
            {
                "_id": "666c7c24196954ac212f0709",
                "room": "666c33f0c5805eaa8cc5450a",
                "date": "2024-06-15",
                "startTime": "10:00",
                "endTime": "11:00",
                "isBooked": true,
                "__v": 0
            }
        ],
        "room": {
            "_id": "666c33f0c5805eaa8cc5450a",
            "name": "Conference Room",
            "roomNo": 201,
            "floorNo": 1,
            "capacity": 20,
            "pricePerSlot": 100,
            "amenities": [
                "Projector",
                "Whiteboard"
            ],
            "isDeleted": false,
            "__v": 0
        },
        "user": {
            "_id": "666c941a6a539d5727a3ffbe",
            "name": "akilinjamam",
            "email": "web@akilinjamam.com",
            "password": "ak-password",
            "phone": "1234567890",
            "address": "chittagong, bangladesh",
            "role": "user",
            "__v": 0
        },
        "totalAmount": 200,
        "isConfirmed": "unconfirmed",
        "isDeleted": false,
        "__v": 0
    }
}

```

11. - Response you will get from Route:/api/bookings (GET) by admin:

```
{
    "success": true,
    "statusCode": 200,
    "message": "All bookings retrieved successfully",
    "data": [
        {
            "_id": "666ccfb37a05e2481ce32620",
            "date": "2024-06-15",
            "slots": [
                {
                    "_id": "666c7c24196954ac212f0708",
                    "room": "666c33f0c5805eaa8cc5450a",
                    "date": "2024-06-15",
                    "startTime": "09:00",
                    "endTime": "10:00",
                    "isBooked": true,
                    "__v": 0
                },
                {
                    "_id": "666c7c24196954ac212f0709",
                    "room": "666c33f0c5805eaa8cc5450a",
                    "date": "2024-06-15",
                    "startTime": "10:00",
                    "endTime": "11:00",
                    "isBooked": true,
                    "__v": 0
                }
            ],
            "room": {
                "_id": "666c33f0c5805eaa8cc5450a",
                "name": "Conference Room",
                "roomNo": 201,
                "floorNo": 1,
                "capacity": 20,
                "pricePerSlot": 100,
                "amenities": [
                    "Projector",
                    "Whiteboard"
                ],
                "isDeleted": false,
                "__v": 0
            },
            "user": {
                "_id": "666c941a6a539d5727a3ffbe",
                "name": "akilinjamam",
                "email": "web@akilinjamam.com",
                "password": "ak-password",
                "phone": "1234567890",
                "address": "chittagong, bangladesh",
                "role": "user",
                "__v": 0
            },
            "totalAmount": 200,
            "isConfirmed": "confirmed",
            "isDeleted": false,
            "__v": 0
        }
    ]
}

```

12. - Response you will get from Route:/api/my-bookings(GET) by user:

```

{
    "success": true,
    "statusCode": 200,
    "message": "User bookings retrieved successfully",
    "data": [
        {
            "_id": "666ccfb37a05e2481ce32620",
            "date": "2024-06-15",
            "slots": [
                {
                    "_id": "666c7c24196954ac212f0708",
                    "room": "666c33f0c5805eaa8cc5450a",
                    "date": "2024-06-15",
                    "startTime": "09:00",
                    "endTime": "10:00",
                    "isBooked": true,
                    "__v": 0
                },
                {
                    "_id": "666c7c24196954ac212f0709",
                    "room": "666c33f0c5805eaa8cc5450a",
                    "date": "2024-06-15",
                    "startTime": "10:00",
                    "endTime": "11:00",
                    "isBooked": true,
                    "__v": 0
                }
            ],
            "room": {
                "_id": "666c33f0c5805eaa8cc5450a",
                "name": "Conference Room",
                "roomNo": 201,
                "floorNo": 1,
                "capacity": 20,
                "pricePerSlot": 100,
                "amenities": [
                    "Projector",
                    "Whiteboard"
                ],
                "isDeleted": false,
                "__v": 0
            },
            "user": {
                "_id": "666c941a6a539d5727a3ffbe",
                "name": "akilinjamam",
                "email": "web@akilinjamam.com",
                "password": "ak-password",
                "phone": "1234567890",
                "address": "chittagong, bangladesh",
                "role": "user",
                "__v": 0
            },
            "totalAmount": 200,
            "isConfirmed": "confirmed",
            "isDeleted": false,
            "__v": 0
        }
    ]
}

```

13. -Response you will get from Route:/api/bookings/:id (PUT) by admin

```
{
    "success": true,
    "statusCode": 200,
    "message": "Booking updated successfully",
    "data": {
        "_id": "666ccfb37a05e2481ce32620",
        "date": "2024-06-15",
        "slots": [
            "666c7c24196954ac212f0708",
            "666c7c24196954ac212f0709"
        ],
        "room": "666c33f0c5805eaa8cc5450a",
        "user": "666c941a6a539d5727a3ffbe",
        "totalAmount": 200,
        "isConfirmed": "confirmed",
        "isDeleted": false,
        "__v": 0
    }
}
```

14. -Response you will get from Route:/api/bookings/:id (DELETE) by admin

```
{
    "success": true,
    "statusCode": 200,
    "message": "Booking deleted successfully",
    "data": {
        "_id": "666ccfb37a05e2481ce32620",
        "date": "2024-06-15",
        "slots": [
            "666c7c24196954ac212f0708",
            "666c7c24196954ac212f0709"
        ],
        "room": "666c33f0c5805eaa8cc5450a",
        "user": "666c941a6a539d5727a3ffbe",
        "totalAmount": 200,
        "isConfirmed": "confirmed",
        "isDeleted": true,
        "__v": 0
    }
}

```

15. - No Data Found:

```
{
  "success": false,
  "statusCode": 404,
  "message": "No Data Found",
  "data":[]
}

```

16. - Error Handling:

```
 {
    "success": false,
    "message": "E11000 duplicate key error collection: test.users index: email_1 dup key: { email: \"web@akilinjamam2.com\" }",
    "errorMessages": [
        {
            "path": "",
            "message": "E11000 duplicate key error collection: test.users index: email_1 dup key: { email: \"web@akilinjamam2.com\" }"
        }
    ],
    "stack": "MongoServerError: E11000 duplicate key error collection: test.users index: email_1 dup key: { email: \"web@akilinjamam2.com\" }\n    at InsertOneOperation.execute (E:\\level-2-ph-24\\mission-3-be-a-no-sql-backend-brainiac\\module18-assignment-3\\level-2-assignment-3\\node_modules\\mongodb\\src\\operations\\insert.ts:83:13)\n    at processTicksAndRejections (node:internal/process/task_queues:95:5)\n    at executeOperation (E:\\level-2-ph-24\\mission-3-be-a-no-sql-backend-brainiac\\module18-assignment-3\\level-2-assignment-3\\node_modules\\mongodb\\src\\operations\\execute_operation.ts:181:12)"
}
```

17. -Not Found Route:

```
{
  "success": false,
  "statusCode": 404,
  "message": "Not Found",
}

```

18. -Authentication Middleware:

```
{
  "success": false,
  "statusCode": 401,
  "message": "You have no access to this route",
}

```

19. -Zod Validation:

```
{
    "success": false,
    "message": "Zod Validation Erorr",
    "errorMessages": [
        {
            "path": "address",
            "message": "Required"
        }
    ],
    "stack": "ZodError: [\n  {\n    \"code\": \"invalid_type\",\n    \"expected\": \"string\",\n    \"received\": \"undefined\",\n    \"path\": [\n      \"body\",\n      \"address\"\n    ],\n    \"message\": \"Required\"\n  }\n]\n    at Object.get error [as error] (E:\\level-2-ph-24\\mission-3-be-a-no-sql-backend-brainiac\\module18-assignment-3\\level-2-assignment-3\\node_modules\\zod\\lib\\types.js:55:31)\n    at ZodObject.parseAsync (E:\\level-2-ph-24\\mission-3-be-a-no-sql-backend-brainiac\\module18-assignment-3\\level-2-assignment-3\\node_modules\\zod\\lib\\types.js:183:22)\n    at processTicksAndRejections (node:internal/process/task_queues:95:5)"
}
```

# Thank You!

# Injamam Islam Chowdhury.
