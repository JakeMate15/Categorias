# API de Categorías

## Endpoints

### Obtener todas las categorías
- **URL**: `/api/categorias`
- **Método**: `GET`
- **Descripción**: Recupera una lista de todas las categorías.

### Obtener una categoría por ID
- **URL**: `/api/categorias/{id}`
- **Método**: `GET`
- **Descripción**: Recupera una categoría específica por su ID.
- **Parámetros**:
  - `id` (path): ID de la categoría a recuperar.

### Crear una nueva categoría
- **URL**: `/api/categorias`
- **Método**: `POST`
- **Descripción**: Crea una nueva categoría.
- **Cuerpo de la solicitud**:
  ```json
  {
      "descripcionCategorias": "Descripción de ejemplo",
      "nombreCategoria": "Nombre de ejemplo"
  }
