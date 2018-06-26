<a name="top"></a>
# mascotas-node-typescript v0.1.0

Server de Masctoas en Node con TypeScript

- [Imagen](#imagen)
	- [Guardar Imagen](#guardar-imagen)
	- [Obtener Imagen](#obtener-imagen)
	
- [Mascotas](#mascotas)
	- [Actualizar Mascota](#actualizar-mascota)
	- [Buscar Mascota](#buscar-mascota)
	- [Crear Mascota](#crear-mascota)
	- [Eliminar Mascota](#eliminar-mascota)
	- [Listar Mascota](#listar-mascota)
	
- [Perfil](#perfil)
	- [Actualizar Perfil](#actualizar-perfil)
	- [Obtener Perfil](#obtener-perfil)
	
- [Provincias](#provincias)
	- [Crear Provincia](#crear-provincia)
	- [Eliminar Provincia](#eliminar-provincia)
	- [Listar Provincias](#listar-provincias)
	
- [Razas](#razas)
	- [Buscar Mascota](#buscar-mascota)
	- [Crear Raza](#crear-raza)
	- [Eliminar Raza](#eliminar-raza)
	- [Listar Raza](#listar-raza)
	
- [Seguridad](#seguridad)
	- [Cambiar Contraseña](#cambiar-contraseña)
	- [Crear Usuario](#crear-usuario)
	- [Log In](#log-in)
	- [Log Out](#log-out)
	- [Usuario Actual](#usuario-actual)
	


# <a name='imagen'></a> Imagen

## <a name='guardar-imagen'></a> Guardar Imagen
[Back to top](#top)

<p>Guarda una imagen en la db</p>

	POST /image



### Examples

Body

```
{
  "image" : "Base 64 Image Text"
}
```
Autorización

```
Authorization=bearer {token}
```

### Success Response

Response

```
{
  "id": "id de imagen"
}
```


### Error Response

401 Unauthorized

```
HTTP/1.1 401 Unauthorized Method
```
400 Bad Request

```
HTTP/1.1 400 Bad Request
HTTP/1.1 Header X-Status-Reason: {Message}
{
   "messages" : [
     {
       "path" : "propertyName",
       "message" : "Error Text"
     },
     ...
  ]
}
```
404 Not Found

```
HTTP/1.1 404 Not Found
HTTP/1.1 Header X-Status-Reason: {Message}
{
   "url" : "http://...",
   "error" : "Not Found"
}
```
500 Server Error

```
HTTP/1.1 500 Internal Server Error
HTTP/1.1 Header X-Status-Reason: {Message}
{
   "error" : "Not Found"
}
```
## <a name='obtener-imagen'></a> Obtener Imagen
[Back to top](#top)

<p>Obtiene una imagen</p>

	GET /image/:id



### Examples

Autorización

```
Authorization=bearer {token}
```

### Success Response

Response

```
{
  "id": "id de imagen",
  "image" : "Base 64 Image Text"
}
```


### Error Response

401 Unauthorized

```
HTTP/1.1 401 Unauthorized Method
```
400 Bad Request

```
HTTP/1.1 400 Bad Request
HTTP/1.1 Header X-Status-Reason: {Message}
{
   "messages" : [
     {
       "path" : "propertyName",
       "message" : "Error Text"
     },
     ...
  ]
}
```
404 Not Found

```
HTTP/1.1 404 Not Found
HTTP/1.1 Header X-Status-Reason: {Message}
{
   "url" : "http://...",
   "error" : "Not Found"
}
```
500 Server Error

```
HTTP/1.1 500 Internal Server Error
HTTP/1.1 Header X-Status-Reason: {Message}
{
   "error" : "Not Found"
}
```
# <a name='mascotas'></a> Mascotas

## <a name='actualizar-mascota'></a> Actualizar Mascota
[Back to top](#top)

<p>Actualiza los datos de una mascota.</p>

	PUT /pet/:petId



### Examples

Mascota

```
{
  "name": "Nombre de la mascota",
  "description": "Description de la mascota",
  "birthDate": date (DD/MM/YYYY),
}
```
Autorización

```
Authorization=bearer {token}
```

### Success Response

Mascota

```
{
  "name": "Nombre de la mascota",
  "description": "Descripción de la mascota",
  "user": "Id de usuario",
  "birthDate": date (DD/MM/YYYY),
  "updated": date (DD/MM/YYYY),
  "created": date (DD/MM/YYYY),
  "enabled": [true|false]
}
```


### Error Response

401 Unauthorized

```
HTTP/1.1 401 Unauthorized Method
```
400 Bad Request

```
HTTP/1.1 400 Bad Request
HTTP/1.1 Header X-Status-Reason: {Message}
{
   "messages" : [
     {
       "path" : "propertyName",
       "message" : "Error Text"
     },
     ...
  ]
}
```
404 Not Found

```
HTTP/1.1 404 Not Found
HTTP/1.1 Header X-Status-Reason: {Message}
{
   "url" : "http://...",
   "error" : "Not Found"
}
```
500 Server Error

```
HTTP/1.1 500 Internal Server Error
HTTP/1.1 Header X-Status-Reason: {Message}
{
   "error" : "Not Found"
}
```
## <a name='buscar-mascota'></a> Buscar Mascota
[Back to top](#top)

<p>Busca una mascota por id.</p>

	PUT /pet/:petId



### Examples

Autorización

```
Authorization=bearer {token}
```

### Success Response

Mascota

```
{
  "name": "Nombre de la mascota",
  "description": "Descripción de la mascota",
  "user": "Id de usuario",
  "birthDate": date (DD/MM/YYYY),
  "updated": date (DD/MM/YYYY),
  "created": date (DD/MM/YYYY),
  "enabled": [true|false]
}
```


### Error Response

401 Unauthorized

```
HTTP/1.1 401 Unauthorized Method
```
400 Bad Request

```
HTTP/1.1 400 Bad Request
HTTP/1.1 Header X-Status-Reason: {Message}
{
   "messages" : [
     {
       "path" : "propertyName",
       "message" : "Error Text"
     },
     ...
  ]
}
```
404 Not Found

```
HTTP/1.1 404 Not Found
HTTP/1.1 Header X-Status-Reason: {Message}
{
   "url" : "http://...",
   "error" : "Not Found"
}
```
500 Server Error

```
HTTP/1.1 500 Internal Server Error
HTTP/1.1 Header X-Status-Reason: {Message}
{
   "error" : "Not Found"
}
```
## <a name='crear-mascota'></a> Crear Mascota
[Back to top](#top)

<p>Crea una mascota.</p>

	POST /pet



### Examples

Mascota

```
{
  "name": "Nombre de la mascota",
  "description": "Description de la mascota",
  "birthDate": date (DD/MM/YYYY),
}
```
Autorización

```
Authorization=bearer {token}
```

### Success Response

Mascota

```
{
  "name": "Nombre de la mascota",
  "description": "Descripción de la mascota",
  "user": "Id de usuario",
  "birthDate": date (DD/MM/YYYY),
  "updated": date (DD/MM/YYYY),
  "created": date (DD/MM/YYYY),
  "enabled": [true|false]
}
```


### Error Response

401 Unauthorized

```
HTTP/1.1 401 Unauthorized Method
```
400 Bad Request

```
HTTP/1.1 400 Bad Request
HTTP/1.1 Header X-Status-Reason: {Message}
{
   "messages" : [
     {
       "path" : "propertyName",
       "message" : "Error Text"
     },
     ...
  ]
}
```
404 Not Found

```
HTTP/1.1 404 Not Found
HTTP/1.1 Header X-Status-Reason: {Message}
{
   "url" : "http://...",
   "error" : "Not Found"
}
```
500 Server Error

```
HTTP/1.1 500 Internal Server Error
HTTP/1.1 Header X-Status-Reason: {Message}
{
   "error" : "Not Found"
}
```
## <a name='eliminar-mascota'></a> Eliminar Mascota
[Back to top](#top)

<p>Eliminar una mascota.</p>

	DELETE /pet/:petId



### Examples

Autorización

```
Authorization=bearer {token}
```

### Success Response

Response

```
HTTP/1.1 200 OK
```


### Error Response

401 Unauthorized

```
HTTP/1.1 401 Unauthorized Method
```
404 Not Found

```
HTTP/1.1 404 Not Found
HTTP/1.1 Header X-Status-Reason: {Message}
{
   "url" : "http://...",
   "error" : "Not Found"
}
```
500 Server Error

```
HTTP/1.1 500 Internal Server Error
HTTP/1.1 Header X-Status-Reason: {Message}
{
   "error" : "Not Found"
}
```
## <a name='listar-mascota'></a> Listar Mascota
[Back to top](#top)

<p>Obtiene un listado de las mascotas del usuario actual.</p>

	GET /pet



### Examples

Autorización

```
Authorization=bearer {token}
```

### Success Response

Mascota

```
[
  {
    "name": "Nombre de la mascota",
    "description": "Descripción de la mascota",
    "user": "Id de usuario",
    "birthDate": date (DD/MM/YYYY),
    "updated": date (DD/MM/YYYY),
    "created": date (DD/MM/YYYY),
    "enabled": [true|false]
  }, ...
]
```
Response

```
HTTP/1.1 200 OK
```


### Error Response

401 Unauthorized

```
HTTP/1.1 401 Unauthorized Method
```
404 Not Found

```
HTTP/1.1 404 Not Found
HTTP/1.1 Header X-Status-Reason: {Message}
{
   "url" : "http://...",
   "error" : "Not Found"
}
```
500 Server Error

```
HTTP/1.1 500 Internal Server Error
HTTP/1.1 Header X-Status-Reason: {Message}
{
   "error" : "Not Found"
}
```
# <a name='perfil'></a> Perfil

## <a name='actualizar-perfil'></a> Actualizar Perfil
[Back to top](#top)

<p>Actualiza los datos del perfil de usuario.</p>

	PUT /profile



### Examples

Perfil

```
{
  "name": "Nombre y Apellido",
  "phone": "Teléfono",
  "email": "Email",
  "address": "Dirección",
  "picture": "Id de imagen",
  "province": "Id de provincia",
}
```
Autorización

```
Authorization=bearer {token}
```

### Success Response

Perfil

```
{
  "name": "Nombre y Apellido",
  "phone": "Teléfono",
  "email": "Email",
  "address": "Dirección",
  "picture": "Id de imagen",
  "province": "Id de provincia",
  "valid": [true|false],
  "user": "Id de usuario",
  "updated": date (DD/MM/YYYY),
  "created": date (DD/MM/YYYY),
  "enabled": [true|false]
}
```


### Error Response

401 Unauthorized

```
HTTP/1.1 401 Unauthorized Method
```
400 Bad Request

```
HTTP/1.1 400 Bad Request
HTTP/1.1 Header X-Status-Reason: {Message}
{
   "messages" : [
     {
       "path" : "propertyName",
       "message" : "Error Text"
     },
     ...
  ]
}
```
404 Not Found

```
HTTP/1.1 404 Not Found
HTTP/1.1 Header X-Status-Reason: {Message}
{
   "url" : "http://...",
   "error" : "Not Found"
}
```
500 Server Error

```
HTTP/1.1 500 Internal Server Error
HTTP/1.1 Header X-Status-Reason: {Message}
{
   "error" : "Not Found"
}
```
## <a name='obtener-perfil'></a> Obtener Perfil
[Back to top](#top)

<p>Obtiene el perfil del usuario logueado.</p>

	GET /profile



### Examples

Autorización

```
Authorization=bearer {token}
```

### Success Response

Perfil

```
{
  "name": "Nombre y Apellido",
  "phone": "Teléfono",
  "email": "Email",
  "address": "Dirección",
  "picture": "Id de imagen",
  "province": "Id de provincia",
  "valid": [true|false],
  "user": "Id de usuario",
  "updated": date (DD/MM/YYYY),
  "created": date (DD/MM/YYYY),
  "enabled": [true|false]
}
```


### Error Response

401 Unauthorized

```
HTTP/1.1 401 Unauthorized Method
```
400 Bad Request

```
HTTP/1.1 400 Bad Request
HTTP/1.1 Header X-Status-Reason: {Message}
{
   "messages" : [
     {
       "path" : "propertyName",
       "message" : "Error Text"
     },
     ...
  ]
}
```
404 Not Found

```
HTTP/1.1 404 Not Found
HTTP/1.1 Header X-Status-Reason: {Message}
{
   "url" : "http://...",
   "error" : "Not Found"
}
```
500 Server Error

```
HTTP/1.1 500 Internal Server Error
HTTP/1.1 Header X-Status-Reason: {Message}
{
   "error" : "Not Found"
}
```
# <a name='provincias'></a> Provincias

## <a name='crear-provincia'></a> Crear Provincia
[Back to top](#top)

<p>Crea o actualiza una provincia.</p>

	PUT /province



### Examples

Provincia

```
{
  "name": "Nombre Provincia",
  "enabled": [true|false]
}
```
Autorización

```
Authorization=bearer {token}
```

### Success Response

Provincia

```
{
  "name": "Nombre Provincia",
  "enabled": [true|false]
}
```


### Error Response

401 Unauthorized

```
HTTP/1.1 401 Unauthorized Method
```
400 Bad Request

```
HTTP/1.1 400 Bad Request
HTTP/1.1 Header X-Status-Reason: {Message}
{
   "messages" : [
     {
       "path" : "propertyName",
       "message" : "Error Text"
     },
     ...
  ]
}
```
404 Not Found

```
HTTP/1.1 404 Not Found
HTTP/1.1 Header X-Status-Reason: {Message}
{
   "url" : "http://...",
   "error" : "Not Found"
}
```
500 Server Error

```
HTTP/1.1 500 Internal Server Error
HTTP/1.1 Header X-Status-Reason: {Message}
{
   "error" : "Not Found"
}
```
## <a name='eliminar-provincia'></a> Eliminar Provincia
[Back to top](#top)

<p>Elimina una provincia.</p>

	DELETE /province/:provinceId



### Examples

Autorización

```
Authorization=bearer {token}
```

### Success Response

Response

```
HTTP/1.1 200 OK
```


### Error Response

401 Unauthorized

```
HTTP/1.1 401 Unauthorized Method
```
400 Bad Request

```
HTTP/1.1 400 Bad Request
HTTP/1.1 Header X-Status-Reason: {Message}
{
   "messages" : [
     {
       "path" : "propertyName",
       "message" : "Error Text"
     },
     ...
  ]
}
```
404 Not Found

```
HTTP/1.1 404 Not Found
HTTP/1.1 Header X-Status-Reason: {Message}
{
   "url" : "http://...",
   "error" : "Not Found"
}
```
500 Server Error

```
HTTP/1.1 500 Internal Server Error
HTTP/1.1 Header X-Status-Reason: {Message}
{
   "error" : "Not Found"
}
```
## <a name='listar-provincias'></a> Listar Provincias
[Back to top](#top)

<p>Lista todas las provincias.</p>

	GET /province




### Success Response

Provincia

```
[ {
   "name": "Nombre Provincia",
   "enabled": [true|false]
  }, ...
]
```


### Error Response

400 Bad Request

```
HTTP/1.1 400 Bad Request
HTTP/1.1 Header X-Status-Reason: {Message}
{
   "messages" : [
     {
       "path" : "propertyName",
       "message" : "Error Text"
     },
     ...
  ]
}
```
404 Not Found

```
HTTP/1.1 404 Not Found
HTTP/1.1 Header X-Status-Reason: {Message}
{
   "url" : "http://...",
   "error" : "Not Found"
}
```
500 Server Error

```
HTTP/1.1 500 Internal Server Error
HTTP/1.1 Header X-Status-Reason: {Message}
{
   "error" : "Not Found"
}
```
# <a name='razas'></a> Razas

## <a name='buscar-mascota'></a> Buscar Mascota
[Back to top](#top)

<p>Busca una Raza por id.</p>

	PUT /raza/:razaId



### Examples

Autorización

```
Authorization=bearer {token}
```

### Success Response

Raza

```
{
  "name": "Nombre de la Raza",
  "created": date (DD/MM/YYYY),
  "enabled": [true|false]
}
```


### Error Response

401 Unauthorized

```
HTTP/1.1 401 Unauthorized Method
```
400 Bad Request

```
HTTP/1.1 400 Bad Request
HTTP/1.1 Header X-Status-Reason: {Message}
{
   "messages" : [
     {
       "path" : "propertyName",
       "message" : "Error Text"
     },
     ...
  ]
}
```
404 Not Found

```
HTTP/1.1 404 Not Found
HTTP/1.1 Header X-Status-Reason: {Message}
{
   "url" : "http://...",
   "error" : "Not Found"
}
```
500 Server Error

```
HTTP/1.1 500 Internal Server Error
HTTP/1.1 Header X-Status-Reason: {Message}
{
   "error" : "Not Found"
}
```
## <a name='crear-raza'></a> Crear Raza
[Back to top](#top)

<p>Crea una Raza.</p>

	POST /raza



### Examples

Raza

```
{
  "name": "Nombre de la Raza",
}
```
Autorización

```
Authorization=bearer {token}
```

### Success Response

Raza

```
{
  "name": "Nombre de la Raza",
  "created": date (DD/MM/YYYY),
  "enabled": [true|false]
}
```


### Error Response

401 Unauthorized

```
HTTP/1.1 401 Unauthorized Method
```
400 Bad Request

```
HTTP/1.1 400 Bad Request
HTTP/1.1 Header X-Status-Reason: {Message}
{
   "messages" : [
     {
       "path" : "propertyName",
       "message" : "Error Text"
     },
     ...
  ]
}
```
404 Not Found

```
HTTP/1.1 404 Not Found
HTTP/1.1 Header X-Status-Reason: {Message}
{
   "url" : "http://...",
   "error" : "Not Found"
}
```
500 Server Error

```
HTTP/1.1 500 Internal Server Error
HTTP/1.1 Header X-Status-Reason: {Message}
{
   "error" : "Not Found"
}
```
## <a name='eliminar-raza'></a> Eliminar Raza
[Back to top](#top)

<p>Eliminar una Raza.</p>

	DELETE /raza/:razaId



### Examples

Autorización

```
Authorization=bearer {token}
```

### Success Response

Response

```
HTTP/1.1 200 OK
```


### Error Response

401 Unauthorized

```
HTTP/1.1 401 Unauthorized Method
```
404 Not Found

```
HTTP/1.1 404 Not Found
HTTP/1.1 Header X-Status-Reason: {Message}
{
   "url" : "http://...",
   "error" : "Not Found"
}
```
500 Server Error

```
HTTP/1.1 500 Internal Server Error
HTTP/1.1 Header X-Status-Reason: {Message}
{
   "error" : "Not Found"
}
```
## <a name='listar-raza'></a> Listar Raza
[Back to top](#top)

<p>Obtiene un listado de todas las Razas.</p>

	GET /raza



### Examples

Autorización

```
Authorization=bearer {token}
```

### Success Response

Raza

```
[
  {
    "name": "Nombre de la Raza",
    "created": date (DD/MM/YYYY),
    "enabled": [true|false]
  }, ...
]
```
Response

```
HTTP/1.1 200 OK
```


### Error Response

401 Unauthorized

```
HTTP/1.1 401 Unauthorized Method
```
404 Not Found

```
HTTP/1.1 404 Not Found
HTTP/1.1 Header X-Status-Reason: {Message}
{
   "url" : "http://...",
   "error" : "Not Found"
}
```
500 Server Error

```
HTTP/1.1 500 Internal Server Error
HTTP/1.1 Header X-Status-Reason: {Message}
{
   "error" : "Not Found"
}
```
# <a name='seguridad'></a> Seguridad

## <a name='cambiar-contraseña'></a> Cambiar Contraseña
[Back to top](#top)

<p>Permite cambiar la contraseña de usuario</p>

	POST /auth/password



### Examples

Body

```
{
     "currentPassword" : "currPass",
     "newPassword" : "newPass",
     "verifyPassword" : "newPass"
}
```
Autorización

```
Authorization=bearer {token}
```

### Success Response

Response

```
HTTP/1.1 200 OK
```


### Error Response

401 Unauthorized

```
HTTP/1.1 401 Unauthorized Method
```
400 Bad Request

```
HTTP/1.1 400 Bad Request
HTTP/1.1 Header X-Status-Reason: {Message}
{
   "messages" : [
     {
       "path" : "propertyName",
       "message" : "Error Text"
     },
     ...
  ]
}
```
404 Not Found

```
HTTP/1.1 404 Not Found
HTTP/1.1 Header X-Status-Reason: {Message}
{
   "url" : "http://...",
   "error" : "Not Found"
}
```
500 Server Error

```
HTTP/1.1 500 Internal Server Error
HTTP/1.1 Header X-Status-Reason: {Message}
{
   "error" : "Not Found"
}
```
## <a name='crear-usuario'></a> Crear Usuario
[Back to top](#top)

<p>Registra un nuevo usuario en el sistema.</p>

	POST /auth/signup



### Examples

Usuario

```
{
  "name": "Nombre Usuario",
  "login": "login"
  "password": "password"
}
```

### Success Response

Response

```
HTTP/1.1 200 OK
{
  "token": "tokenData"
}
```


### Error Response

400 Bad Request

```
HTTP/1.1 400 Bad Request
HTTP/1.1 Header X-Status-Reason: {Message}
{
   "messages" : [
     {
       "path" : "propertyName",
       "message" : "Error Text"
     },
     ...
  ]
}
```
404 Not Found

```
HTTP/1.1 404 Not Found
HTTP/1.1 Header X-Status-Reason: {Message}
{
   "url" : "http://...",
   "error" : "Not Found"
}
```
500 Server Error

```
HTTP/1.1 500 Internal Server Error
HTTP/1.1 Header X-Status-Reason: {Message}
{
   "error" : "Not Found"
}
```
## <a name='log-in'></a> Log In
[Back to top](#top)

<p>Login en el sistema.</p>

	POST /auth/signin



### Examples

Usuario

```
{
  "login": "login"
  "password": "password"
}
```

### Success Response

Response

```
HTTP/1.1 200 OK
{
  "token": "tokenData"
}
```


### Error Response

400 Bad Request

```
HTTP/1.1 400 Bad Request
HTTP/1.1 Header X-Status-Reason: {Message}
{
   "messages" : [
     {
       "path" : "propertyName",
       "message" : "Error Text"
     },
     ...
  ]
}
```
404 Not Found

```
HTTP/1.1 404 Not Found
HTTP/1.1 Header X-Status-Reason: {Message}
{
   "url" : "http://...",
   "error" : "Not Found"
}
```
500 Server Error

```
HTTP/1.1 500 Internal Server Error
HTTP/1.1 Header X-Status-Reason: {Message}
{
   "error" : "Not Found"
}
```
## <a name='log-out'></a> Log Out
[Back to top](#top)

<p>Desloguea al usuario y limpia el token de sesión.</p>

	GET /auth/signout



### Examples

Autorización

```
Authorization=bearer {token}
```

### Success Response

Response

```
HTTP/1.1 200 OK
```


### Error Response

401 Unauthorized

```
HTTP/1.1 401 Unauthorized Method
```
404 Not Found

```
HTTP/1.1 404 Not Found
HTTP/1.1 Header X-Status-Reason: {Message}
{
   "url" : "http://...",
   "error" : "Not Found"
}
```
500 Server Error

```
HTTP/1.1 500 Internal Server Error
HTTP/1.1 Header X-Status-Reason: {Message}
{
   "error" : "Not Found"
}
```
## <a name='usuario-actual'></a> Usuario Actual
[Back to top](#top)

<p>Obtiene información del usuario logueado actualmente</p>

	GET /auth/currentUser



### Examples

Autorización

```
Authorization=bearer {token}
```

### Success Response

Usuario

```
{
  "id": "Id de usuario"
  "name": "Nombre Usuario",
  "login": "login"
  "roles": ["USER", "ADMIN"...]
}
```


### Error Response

401 Unauthorized

```
HTTP/1.1 401 Unauthorized Method
```
404 Not Found

```
HTTP/1.1 404 Not Found
HTTP/1.1 Header X-Status-Reason: {Message}
{
   "url" : "http://...",
   "error" : "Not Found"
}
```
500 Server Error

```
HTTP/1.1 500 Internal Server Error
HTTP/1.1 Header X-Status-Reason: {Message}
{
   "error" : "Not Found"
}
```
