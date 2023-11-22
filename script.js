
// Esta función inicializa el chat
function initChat() {
  // Referencias a elementos del DOM
  const messageArea = document.getElementById('messageArea');
  const messagesList = document.getElementById('messagesList');
  const sendButton = document.getElementById('sendButton');
  const refreshButton = document.getElementById('refreshButton');
  const deleteButton = document.getElementById('deleteButton');

  // Función para manejar el envío de mensajes
  async function handleSubmit() {
    const message = messageArea.value;
    if (!message) return;

    try {
      const response = await axios.post('http://localhost:9000/chats', { chat: message });
      const mensajes = _.sortBy(response?.data?.data, 'fecha');
      updateMessagesList(mensajes);
      messageArea.value = '';
    } catch (error) {
      console.error('Error al enviar el mensaje:', error);
    }
  }

  // Función para actualizar la lista de mensajes
  function updateMessagesList(messages) {
    messagesList.innerHTML = '';
    messages.forEach(msg => {
      const listItem = document.createElement('li');
      listItem.textContent = `${msg.fecha} [${msg.role}]: ${msg.content}`;
      messagesList.appendChild(listItem);
    });
  }


// Funciones para manejar la actualización y eliminación de mensajes
async function handleRefresh() {
    try {
        const response = await axios.get('http://localhost:9000/chats');
        const sortedMessages = _.sortBy(response?.data?.data, 'fecha');
        updateMessagesList(sortedMessages);
    } catch (error) {
        console.error('Error al refrescar los mensajes:', error);
    }
}


async function handleDelete() {
    try {
        await axios.delete('http://localhost:9000/chats');
        clearMessagesList();
    } catch (error) {
        console.error('Error al borrar los mensajes:', error);
    }
}

function clearMessagesList() {
    const messagesList = document.getElementById('messagesList');
    messagesList.innerHTML = '';                                    // Limpia el contenido del elemento
}


  // Agregar event listeners a los botones
  sendButton.addEventListener('click', handleSubmit);
  refreshButton.addEventListener('click', handleRefresh);
  deleteButton.addEventListener('click', handleDelete);
}

// Ejecutar la función initChat cuando la página esté cargada
document.addEventListener('DOMContentLoaded', initChat);
