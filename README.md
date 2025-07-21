# 2025proyecto-final-ecommerce--cabaleiro-aran-mariam-

## Descripción

API REST para gestión de productos desarrollada con Node.js y Express.

## Instalación

1. Clonar el repositorio
2. Instalar dependencias:

```bash
npm install
```

3. Configurar variables de entorno:

```bash
# Copiar el archivo de ejemplo y completar los datos requeridos
cp .env-example .env
```

Luego editar el archivo `.env` con los valores correspondientes para tu entorno.

4. Ejecutar en modo desarrollo:

```bash
npm run dev
```

## Documentación de la API

### Obtener todos los productos

- **GET** `/api/products`
- **Descripción:** Devuelve la lista de todos los productos.
- **Respuesta ejemplo:**

```json
[
  {  "id": "BGlJAUEeISde98rOwQ06",
        "price": 1200,
        "description": "Calzado cómodo y soporte para correr",
        "name": "Zapatos Running",
        "categories": [
            "calzado",
            "deportes"
        ]},
  { "id": "GuGn4KNzPlhNsAMbuYMu",
        "price": 1500,
        "categories": [
            "ropa",
            "deportes"
        ],
        "name": "Camiseta Deportiva",
        "descrption": "Ropa ligera y transpirable para entrenar." },
  { "id": "rSmVK9GanvBs2HVkdTa3",
        "name": "Mochila Escolar",
        "price": 3500,
        "categories": [
            "accesorios",
            "niñes"
        ],
        "description": "Bolsa resistente para estudiar y transportar útiles." }
]
```

### Buscar productos por nombre

- **GET** `/products/search?name=palabra`
- **Descripción:** Devuelve los productos cuyo nombre contiene la palabra indicada.
- **Parámetros:**
  - `name` (query, requerido): texto a buscar en el nombre del producto.
- **Ejemplo de uso:** `/products/search?name=camiseta`
- **Respuesta ejemplo:**

```json

[{ "id": "GuGn4KNzPlhNsAMbuYMu",
        "price": 1500,
        "categories": [
            "ropa",
            "deportes"
        ],
        "name": "Camiseta Deportiva",
        "descrption": "Ropa ligera y transpirable para entrenar." }]
```

### Obtener producto por ID

- **GET** `/products/:id`
- **Descripción:** Devuelve un producto específico por su ID.
- **Parámetros:**
  - `id` (path, requerido): ID del producto.
- **Ejemplo de uso:** `/products/GuGn4KNzPlhNsAMbuYMu`
- **Respuesta ejemplo:**

```json
{ "id": "GuGn4KNzPlhNsAMbuYMu",
        "price": 1500,
        "categories": [
            "ropa",
            "deportes"
        ],
        "name": "Camiseta Deportiva",
        "descrption": "Ropa ligera y transpirable para entrenar." }
```

### Crear un producto

- **POST** `/api/products`
- **Descripción:** Crea un nuevo producto.
- **Body (JSON):**

```json
{ { "id": "GuGn4KNzPlhNsAMbuYMu",
        "price": 5600,
        "categories": [
            "ropa",
            "deportes"
        ],
        "name": "Pantalon Deportivo",
        "descrption": "Ropa ligera y transpirable para entrenar." } }
```

- **Respuesta ejemplo:**

```json
{ "id": "GuGn4KNzPlhNsAMbuYMu",
        "price": 5600,
        "categories": [
            "ropa",
            "deportes"
        ],
        "name": "Pantalon Deportivo",
        "descrption": "Ropa ligera y transpirable para entrenar." }
```

### Actualizar un producto (PUT)

- **PUT** `/api/products/:id`
- **Descripción:** Actualiza completamente un producto existente.
- **Parámetros:**
  - `id` (path, requerido): ID del producto a actualizar.
- **Body (JSON):**

```json
{ "name": "Producto Actualizado", "price": 5000 }
```

- **Respuesta ejemplo:**

```json
{ "id": "GuGn4KNzPlhNsAMbuYMu", "name": "Producto Actualizado", "price": 5000 }
```

### Actualizar parcialmente un producto (PATCH)

- **PATCH** `/api/products/:id`
- **Descripción:** Actualiza parcialmente un producto existente.
- **Parámetros:**
  - `id` (path, requerido): ID del producto a actualizar.
- **Body (JSON):** Solo los campos que se desean actualizar

```json
{ "price": 6000 }
```

- **Respuesta ejemplo:**

```json
{ "id": "GuGn4KNzPlhNsAMbuYMu", 
"name": "Camiseta Deportiva", 
"price": 6000 }
```

### Eliminar un producto

- **DELETE** `/api/products/:id`
- **Descripción:** Elimina un producto por su ID.
- **Parámetros:**
  - `id` (path, requerido): ID del producto a eliminar.
- **Respuesta:** 204 No Content

## Códigos de estado

- `200` - OK: Operación exitosa
- `201` - Created: Recurso creado exitosamente
- `204` - No Content: Recurso eliminado exitosamente
- `400` - Bad Request: Datos de entrada inválidos
- `404` - Not Found: Recurso no encontrado

## Estructura del proyecto

```
src/
├── controllers/
│   ├── auth.controller.js
│   └── products.controller.js
├── middlewares/
│   └── auth.middleware.js
├── models/
│   ├── data.js
│   ├── products.json
│   └── products.model.js
├── routes/
│   ├── auth.router.js
│   └── products.router.js
├── services/
│   └── products.service.js
index.js
```

## Tecnologías utilizadas

- Node.js: Entorno de ejecución para JavaScript en el backend.
- Express.js: Framework para construir el servidor y definir rutas.
- ES6 Modules: Sintaxis moderna de JavaScript (import/export).
- Firebase-Firestore: Base de datos NoSQL en la nube para persistencia de datos.
- Vercel: Plataforma de despliegue (deploy) para alojar el proyecto.
- POSTMAN: Herramienta para testear y documentar las API endpoints.
