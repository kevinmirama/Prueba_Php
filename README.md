# Gestión de Tareas - README

Este proyecto es una aplicación web simple para gestionar tareas. Permite agregar, editar, marcar como completada y eliminar tareas. Está construido con PHP para el backend, MySQL como base de datos, y HTML, CSS (Bootstrap) y JavaScript para el frontend.

## Estructura del Proyecto

1. **Backend (PHP)**:
   - `conexion.php`: Maneja la conexión a la base de datos MySQL.
   - `crear_tarea.php`: Endpoint para agregar una nueva tarea.
   - `actualizar_tarea.php`: Endpoint para actualizar el estado de una tarea (completada o no).
   - `editar_tarea.php`: Endpoint para editar la descripción de una tarea.
   - `eliminar_tarea.php`: Endpoint para eliminar una tarea.
   - `obtener_tareas.php`: Endpoint para obtener todas las tareas desde la base de datos.

2. **Frontend (HTML, CSS, JavaScript)**:
   - `index.html`: Interfaz de usuario donde se muestran y gestionan las tareas.
   - `css/styles.css`: Estilos personalizados para la aplicación.
   - `js/scripts.js`: Lógica JavaScript para interactuar con el backend y manipular el DOM.

3. **Base de Datos (MySQL)**:
   - La base de datos `gestion_tareas` contiene una tabla llamada `tareas` con las siguientes columnas:
     - `id`: Identificador único de la tarea (autoincremental).
     - `descripcion`: Descripción de la tarea.
     - `completada`: Estado de la tarea (0 para no completada, 1 para completada).

## Instalación y Configuración

1. **Requisitos**:
   - Servidor web (Apache, Nginx, etc.).
   - PHP 7.x o superior.
   - MySQL 5.x o superior.
   - Navegador web moderno.

2. **Configuración de la Base de Datos**:
   - Crea una base de datos llamada `gestion_tareas`.
   - Ejecuta el siguiente SQL para crear la tabla `tareas`:
     ```sql
     CREATE TABLE tareas (
         id INT AUTO_INCREMENT PRIMARY KEY,
         descripcion VARCHAR(255) NOT NULL,
         completada TINYINT(1) DEFAULT 0
     );
     ```

3. **Configuración del Backend**:
   - En `conexion.php`, actualiza las credenciales de la base de datos (`$servername`, `$username`, `$password`) según tu entorno.

4. **Despliegue**:
   - Coloca los archivos en el directorio raíz de tu servidor web.
   - Asegúrate de que el servidor web tenga permisos para leer y escribir en la base de datos.

## Uso de la Aplicación

1. **Agregar una Tarea**:
   - Ingresa la descripción de la tarea en el campo de texto y haz clic en "Agregar Tarea".

2. **Marcar como Completada**:
   - Haz clic en el botón de "check" junto a la tarea para marcarla como completada. La tarea se tachará y cambiará de color.

3. **Editar una Tarea**:
   - Haz clic en el botón de "editar" junto a la tarea. Se mostrará un formulario de edición donde puedes modificar la descripción de la tarea.

4. **Eliminar una Tarea**:
   - Haz clic en el botón de "eliminar" junto a la tarea para eliminarla permanentemente.

## Estructura del Código

- **PHP**: Los archivos PHP manejan las operaciones CRUD (Crear, Leer, Actualizar, Eliminar) con la base de datos.
- **JavaScript**: El archivo `scripts.js` contiene la lógica para enviar solicitudes AJAX al backend y actualizar la interfaz de usuario dinámicamente.
- **CSS**: Los estilos están basados en Bootstrap, con algunas personalizaciones en `styles.css`.

## Consideraciones de Seguridad

- **Validación de Entradas**: Asegúrate de validar y sanitizar las entradas del usuario para evitar inyecciones SQL y otros ataques.
- **Protección de Endpoints**: Considera implementar autenticación y autorización para proteger los endpoints de la API.

## Mejoras Futuras

- **Autenticación de Usuarios**: Agregar un sistema de autenticación para que cada usuario tenga su propia lista de tareas.
- **Filtros y Búsqueda**: Implementar funcionalidades para filtrar tareas por estado (completadas/no completadas) y buscar tareas por descripción.
- **Notificaciones**: Agregar notificaciones visuales para confirmar acciones como agregar, editar o eliminar tareas

## Contribución

Si deseas contribuir a este proyecto, por favor sigue estos pasos:
1. Haz un fork del repositorio.
2. Crea una rama para tu contribución (`git checkout -b feature/nueva-funcionalidad`).
3. Realiza tus cambios y haz commit (`git commit -m 'Añade nueva funcionalidad'`).
4. Haz push a la rama (`git push origin feature/nueva-funcionalidad`).
5. Abre un Pull Request en GitHub.

## Licencia

Este proyecto está bajo la licencia MIT. Consulta el archivo `LICENSE` para más detalles.

---

¡Gracias por usar esta aplicación de gestión de tareas! Si tienes alguna pregunta o sugerencia, no dudes en contactarme.