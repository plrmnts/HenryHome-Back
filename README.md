# HenryHome-Back
This is the repository of the backend of "Henry Home", this is a web application that connect the owner of an accommodation to the users who wish to rent them.

### Requirements 📋

1. You will need to create a DB in mongoDB
2. Create an .env file
3. Create an environment variable "MONGODB_URI" where you have to complete with the URI provide in the connect section when creating the DB

```
MONGODB_URI= YOUR_MONGODB_URI
```
4.



## Installation 🔧

Use the package manager npm to install

```
npm install 
```


## Run Local⚙️

```
npm run dev 
```
# ROUTES

## `USERS`

Routes related to the users

#### `POST` 

```http
  POST /user/login : Logs user into the system
```


```http
  POST /user/register : Creates a new user
```
---------------

## `HOUSES`

Routes related to the houses

#### `GET`

```http
  GET /houses : Gets all houses
```

```http
  GET /houses/:id : Finds houses by ID
    req.body = {"id":string}
```

#### `POST`

```http
  POST /houses : Creates a new house
  
```

#### `PATCH`

```http
  PATCH /houses : Updates an existing house
```

#### `DELETE`

```http
  DELETE /houses : Deletes a house
```

------------

## `FACILITIES`

Routes related to the facilities

#### `GET`

```http
  GET /facilities : Gets all facilities
```

#### `POST`

```http
  POST /facilities : Creates a new facility
```

--------------

## `SERVICES`

Routes related to the services

#### `GET`

```http
  GET /services : Gets all services
```

#### `POST`

```http
  POST /facilities : Creates a new service
```

------

## `LOCATION`

Routes related to the locations

#### `GET`

```http
  GET /locations : Gets all the locations
```


## Deploy 🚀
You will have to deploy the dist file

Enjoy 😊
