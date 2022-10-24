# POSTMAN 
[Postman](https://documenter.getpostman.com/view/23761203/2s84LNTsHF) for more information.

## Products
### POST createProduct

```
curl --location --request POST 'http://localhost:3001/api/products' \
--header 'x-access-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNDZjNDZlNzk3Y2Q2NTA1YTNjMTYwZCIsImlhdCI6MTY2NTc5NTM4MSwiZXhwIjoxNjY1ODgxNzgxfQ.dVQBoh0SRLDYng_TUeoEMtPO6KiPkbOr5yE-xS1w1BQ' \
--data-raw '{
    "name":"Disfraz Pato2",
    "description": "Disfraz de pato",
    "image_url": "asdasdasda",
    "price": 50,
    "size": "L",
    "category":"costumes"
}'
```
### GET getProducts
```
curl --location --request GET 'localhost:3001/api/products'

```
### GET getProduct
```
curl --location --request GET 'localhost:3001/api/products/6346cebc3b3133467e97f873' \
--data-raw ''
```

### PUT updateProduct
```
curl --location --request PUT 'http://localhost:3001/api/products/634a054a82cdc6c02fb1d6b5' \
--header 'x-access-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNDZjNDZlNzk3Y2Q2NTA1YTNjMTYwZCIsImlhdCI6MTY2NTc5NTM4MSwiZXhwIjoxNjY1ODgxNzgxfQ.dVQBoh0SRLDYng_TUeoEMtPO6KiPkbOr5yE-xS1w1BQ' \
--data-raw '{
    "name":"Disfraz pato 3"
}'
```

### DEL deleteProduct
```
curl --location --request DELETE 'http://localhost:3001/api/products/634a054a82cdc6c02fb1d6b5' \
--header 'x-access-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNDZjNDZlNzk3Y2Q2NTA1YTNjMTYwZCIsImlhdCI6MTY2NTc5NTM4MSwiZXhwIjoxNjY1ODgxNzgxfQ.dVQBoh0SRLDYng_TUeoEMtPO6KiPkbOr5yE-xS1w1BQ'
```

## USER
### GET getUsers
```
curl --location --request GET 'localhost:3001/api/users' \
--header 'x-access-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNDZjNDZlNzk3Y2Q2NTA1YTNjMTYwZCIsImlhdCI6MTY2NTc5NTM4MSwiZXhwIjoxNjY1ODgxNzgxfQ.dVQBoh0SRLDYng_TUeoEMtPO6KiPkbOr5yE-xS1w1BQ'
```

### GET getUser
```
curl --location --request GET 'localhost:3001/api/users/63489b262ebc2e4da74de91f'
```

### POST createUser
```
curl --location --request POST 'localhost:3001/api/users'
```

### PUT updateUser
```
curl --location --request PUT 'localhost:3001/api/users/63489b262ebc2e4da74de91f' \
--data-raw '{
    "address":"AV 49"
}'
```
##AUTH
### POST signinUser
```
curl --location --request POST 'localhost:3001/api/auth/signin' \
--data-raw '{
 "email":"acevedo123@gmail.com",
 "password":"password"
}'
```
### POST signinAdmin
```
curl --location --request POST 'localhost:3001/api/auth/signin' \
--data-raw '{
 "email":"camilo@haustierfash.com",
 "password":"password"
}'
```

### POST signup
```
curl --location --request POST 'http://localhost:3001/api/auth/signup' \
--data-raw '{
    "username":"Santiago23",
    "email":"acevedo123@gmail.com",
    "password":"password",
    "name": "Santiago",
    "lastname":"Acevedo",
    "address":"av 50",
    "phone": "122324242"
}'
```
