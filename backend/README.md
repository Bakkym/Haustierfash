# POSTMAN 
[Postman](https://documenter.getpostman.com/view/23761203/2s84LNTsHF) for more information.

## Products
### POST createProduct

```
curl --location --request POST 'http://localhost:3001/api/products' \
--header 'x-access-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNDZjNDZlNzk3Y2Q2NTA1YTNjMTYwZCIsImlhdCI6MTY2NjgyNDY2OSwiZXhwIjoxNjY2OTExMDY5fQ._4RsYjuwRGt_XSdoAdDoelyAETa34aRobg0YoIOwlTA' \
--data-raw '{
    "name":"Beauty and The Beast Costume",
    "description":"Disney Beauty and The Beast: Beast Dog & Cat Costume",
    "image_url": "https://petcostumecenter.com/wp-content/uploads/2020/05/200646-scaled-700x751.webp",
    "price": 60,
    "size": "M",
    "category":"costumes"
}'
```
### POST createProducts
```
curl --location --request POST 'http://localhost:3001/api/products/array' \
--header 'x-access-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNDZjNDZlNzk3Y2Q2NTA1YTNjMTYwZCIsImlhdCI6MTY2NjgyNDY2OSwiZXhwIjoxNjY2OTExMDY5fQ._4RsYjuwRGt_XSdoAdDoelyAETa34aRobg0YoIOwlTA' \
--data-raw '{
    "products_array": [
          {
    "name": "T-shit gris manga sisa",
    "description": "T-shirt gris manga sisa de bordes blancos",
    "image_url": "https://img.freepik.com/free-photo/yorkshire-terrier-sitting-person-s-hand_23-2147840906.jpg?w=1380&t=st=1666897127~exp=1666897727~hmac=b825ec53d62c485f244e966d992e29abcefd0412d9d8b0ba33724320a4e31575",
    "price": 20,
    "size": "S",
    "category": "t-shirts"
  },

  {
    "name": "T-shirt negro, rojo y blanco",
    "description": "T-shirt tejida en negro, rojo y blanco de manga sisa",
    "image_url": "https://img.freepik.com/free-photo/front-view-domestic-dog-wearing-clothing_23-2148643156.jpg?w=826&t=st=1666896721~exp=1666897321~hmac=d302e04a23b84d75119b2ccbe9b38b057276acad8a72a2a3f2f315acc19ce89e",
    "price": 50,
    "size": "M",
    "category": "t-shirts"
  },

  {
    "name": "T-shirt violeta tejida",
    "description": "T-shirt violeta en tejido de mangas semi sisa",
    "image_url": "https://www.freepik.com/free-photo/domestic-dog-with-clothing_9788228.htm#page=15&query=dog%20clothes&position=24&from_view=search&track=sph",
    "price": 50,
    "size": "M",
    "category": "t-shirts"
  },
  {
    "name": "T-shirt amarilla",
    "description": "T-shirt amarilla de manga sisa, con ilustraciones en naranjado, gris y blanco",
    "image_url": "https://img.freepik.com/free-photo/side-view-cute-yorkshire-with-yellow-coat-isolated-white-background_23-2147840887.jpg?w=1380&t=st=1666897583~exp=1666898183~hmac=ce235379ccffc8131839335eedcd5078265c362838020e6c460b420284751d1a",
    "price": 30,
    "size": "S",
    "category": "t-shirts"
  }

    ]
}'
```

### GET getProducts
```
curl --location --request GET 'localhost/api/products/'
```

### GET getProductsByCategory
```
curl --location --request GET 'localhost:3001/api/products?cat=t-shirts'
```

### GET getProduct
```
curl --location --request GET 'localhost:3001/api/products/63408d2abc05b780c6b8d11a' \
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
curl --location --request DELETE 'http://localhost:3001/api/products/635af544d183d9e71b190cd9' \
--header 'x-access-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNDZjNDZlNzk3Y2Q2NTA1YTNjMTYwZCIsImlhdCI6MTY2NTc5NTM4MSwiZXhwIjoxNjY1ODgxNzgxfQ.dVQBoh0SRLDYng_TUeoEMtPO6KiPkbOr5yE-xS1w1BQ'
```

## USER
### GET getUsers
```
curl --location --request GET 'localhost:3001/api/users' \
--header 'x-access-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNDZjNDZlNzk3Y2Q2NTA1YTNjMTYwZCIsImlhdCI6MTY2NTc5NTM4MSwiZXhwIjoxNjY1ODgxNzgxfQ.dVQBoh0SRLDYng_TUeoEMtPO6KiPkbOr5yE-xS1w1BQ'
```

### GET getUsers
```
curl --location --request GET 'localhost:3001/api/users' \
--header 'x-access-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNDZjNDZlNzk3Y2Q2NTA1YTNjMTYwZCIsImlhdCI6MTY2NjcyNzQ2NCwiZXhwIjoxNjY2ODEzODY0fQ.4WwQbLR-rGocT9HZeuJLBSpnNgztLuLvW-OodH861Zc'
```

### GET getUser
```
curl --location --request GET 'localhost:3001/api/users/6346c3d9f4223870b3836e41'
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

## AUTH
### POST signin
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
    "username":"camilo123",
    "email":"camilo123@gmail.com",
    "password":"password",
    "name": "Camilo",
    "lastname":"Barrientos",
    "address":"av 50",
    "phone": "122324242"
}'
```

## Wishlist
### GET getWishlistByUserID
```
curl --location --request GET 'localhost:3001/api/wishlist/6346c3d9f4223870b3836e41' \
--header 'x-access-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNDg5YjI2MmViYzJlNGRhNzRkZTkxZiIsImlhdCI6MTY2NjgyNDAwOCwiZXhwIjoxNjY2OTEwNDA4fQ.mdsFhvcRYwaplHRu2bJYpuB3V5vxE3HgJ9oG_1VM3-I'
```

### PUT addProductToWishlist
```
curl --location --request PUT 'localhost:3001/api/wishlist/' \
--header 'x-access-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNDg5YjI2MmViYzJlNGRhNzRkZTkxZiIsImlhdCI6MTY2NjgyNDAwOCwiZXhwIjoxNjY2OTEwNDA4fQ.mdsFhvcRYwaplHRu2bJYpuB3V5vxE3HgJ9oG_1VM3-I' \
--data-raw '{
    "user_id": "6346c3d9f4223870b3836e41",
    "product_id": "63584e91a72121753a7b610d"
}'
```

### DEL removeProductFromWishlist
```
curl --location --request DELETE 'localhost:3001/api/wishlist/' \
--header 'x-access-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNDg5YjI2MmViYzJlNGRhNzRkZTkxZiIsImlhdCI6MTY2NjgyNDAwOCwiZXhwIjoxNjY2OTEwNDA4fQ.mdsFhvcRYwaplHRu2bJYpuB3V5vxE3HgJ9oG_1VM3-I' \
--data-raw '{
    "user_id": "6346c3d9f4223870b3836e41",
    "product_id": "6346cb13ee47548a15ea9a65"
}'
```

## ShoppingCart
### GET getShoppingCarByUserID
```
curl --location --request GET 'localhost:3001/api/cart/6346c3d9f4223870b3836e41' \
--header 'x-access-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNDg5YjI2MmViYzJlNGRhNzRkZTkxZiIsImlhdCI6MTY2NjgyNDAwOCwiZXhwIjoxNjY2OTEwNDA4fQ.mdsFhvcRYwaplHRu2bJYpuB3V5vxE3HgJ9oG_1VM3-I'
```

### PUT addProductToShoppingCar
```
curl --location --request PUT 'localhost:3001/api/cart/' \
--header 'x-access-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNDg5YjI2MmViYzJlNGRhNzRkZTkxZiIsImlhdCI6MTY2NjgyNDAwOCwiZXhwIjoxNjY2OTEwNDA4fQ.mdsFhvcRYwaplHRu2bJYpuB3V5vxE3HgJ9oG_1VM3-I' \
--data-raw '{
    "user_id": "6346c3d9f4223870b3836e41",
    "product_id": "63584e91a72121753a7b610d"
}'
```

### DEL removeProductFromShoppingCar
```
curl --location --request DELETE 'localhost:3001/api/cart/' \
--header 'x-access-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNDg5YjI2MmViYzJlNGRhNzRkZTkxZiIsImlhdCI6MTY2NjgyNDAwOCwiZXhwIjoxNjY2OTEwNDA4fQ.mdsFhvcRYwaplHRu2bJYpuB3V5vxE3HgJ9oG_1VM3-I' \
--data-raw '{
    "user_id": "6346c3d9f4223870b3836e41",
    "product_id": "6346cb13ee47548a15ea9a65"
}'
```

## Categories
### GET getAllCategories
```
curl --location --request GET 'localhost:3001/api/categories'
```

### GET getCategorybyname
```
curl --location --request GET 'localhost:3001/api/categories/t-shirts'
```

### POST createCategory
```
curl --location --request POST 'localhost:3001/api/categories' \
--data-raw '{
    "category_name": "Toys",
    "category_description": "Toys Category",
    "image_url": "https://undershop.pl/154916-thickbox_default/32811621712-18-style-pet-dog-toy-chew-piskliwy-gumowe-zabawki-dla-kotow-puppy-dziecko-psy-nietoksyczny-rubber-toy-funny-sutek-ba.jpg"
}'
```

### PUT updateCategory
```
curl --location --request PUT 'localhost:3001/api/categories' \
--data-raw '{
    "category_name": "Toys",
    "category_description": "Toys Category updated"
    
}'
```

### DEL deleteCategory
```
curl --location --request DELETE 'localhost:3001/api/categories' \
--data-raw '{
    "category_name": "Toys"
    
}'
```

## Role
### GET getAllRoles
```
curl --location --request GET 'localhost:3001/api/roles' \
--header 'x-access-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNDZjNDZlNzk3Y2Q2NTA1YTNjMTYwZCIsImlhdCI6MTY2NjgyMzI3MywiZXhwIjoxNjY2OTA5NjczfQ.UpBGPE04wQoEw2jG2lX50KlHWGc3krH-nTdJQvMCNRg'
```

### POST CreateRol
```
curl --location --request POST 'localhost:3001/api/roles' \
--header 'x-access-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNDZjNDZlNzk3Y2Q2NTA1YTNjMTYwZCIsImlhdCI6MTY2NjgyMzI3MywiZXhwIjoxNjY2OTA5NjczfQ.UpBGPE04wQoEw2jG2lX50KlHWGc3krH-nTdJQvMCNRg' \
--data-raw '{
    "name":"Seller"
}'
```

### PUT updateRol
``` 
curl --location --request PUT 'localhost:3001/api/roles' \
--header 'x-access-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNDZjNDZlNzk3Y2Q2NTA1YTNjMTYwZCIsImlhdCI6MTY2NjgyMzI3MywiZXhwIjoxNjY2OTA5NjczfQ.UpBGPE04wQoEw2jG2lX50KlHWGc3krH-nTdJQvMCNRg' \
--data-raw '{
    "role_id":"6359b4fa4747b7850f8fbb77",
    "name":"seller updated"
}'
```

### DEL deleteRol
```
curl --location --request DELETE 'localhost:3001/api/roles' \
--header 'x-access-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNDZjNDZlNzk3Y2Q2NTA1YTNjMTYwZCIsImlhdCI6MTY2NjgyMzI3MywiZXhwIjoxNjY2OTA5NjczfQ.UpBGPE04wQoEw2jG2lX50KlHWGc3krH-nTdJQvMCNRg' \
--data-raw '{
    "role_id":"6359b4fa4747b7850f8fbb77"
}'
```
