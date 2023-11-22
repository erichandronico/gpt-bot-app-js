## Documentación del Script de Chat

### Función `initChat`
- **Propósito**: Inicializar la funcionalidad del chat. Configura los elementos del DOM y los manejadores de eventos.
- **Elementos del DOM**: `messageArea`, `messagesList`, `sendButton`, `refreshButton`, `deleteButton`.
- **Eventos**: Agrega listeners a los botones para manejar el envío, la actualización y la eliminación de mensajes.

### Función `handleSubmit`
- **Propósito**: Manejar el envío de mensajes.
- **Operación**: Recoge el mensaje del área de texto, lo envía al servidor usando una petición POST, actualiza la lista de mensajes con la respuesta, y limpia el área de texto.
- **Manejo de Errores**: Captura y registra errores relacionados con el envío de mensajes.

### Función `updateMessagesList`
- **Propósito**: Actualizar la lista de mensajes en la interfaz de usuario.
- **Operación**: Recibe un array de mensajes, los recorre y los añade al `messagesList` en el DOM.

### Función `handleRefresh`
- **Propósito**: Refrescar la lista de mensajes.
- **Operación**: Realiza una petición GET para obtener los mensajes más recientes, los ordena y actualiza la lista de mensajes.
- **Manejo de Errores**: Captura y registra errores relacionados con la actualización de mensajes.

### Función `handleDelete`
- **Propósito**: Borrar todos los mensajes.
- **Operación**: Envía una petición DELETE al servidor para borrar los mensajes y luego limpia la lista de mensajes en la interfaz de usuario.
- **Manejo de Errores**: Captura y registra errores relacionados con la eliminación de mensajes.

### Función `clearMessagesList`
- **Propósito**: Limpiar la lista de mensajes en la interfaz de usuario.
- **Operación**: Elimina todo el contenido del `messagesList` en el DOM.

### Event Listeners
- **Operación**: Agrega listeners a `sendButton`, `refreshButton` y `deleteButton` para ejecutar `handleSubmit`, `handleRefresh` y `handleDelete`, respectivamente.

### Ejecución
- **Operación**: Ejecuta la función `initChat` cuando la página se haya cargado completamente.
