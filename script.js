document.getElementById('send-btn').addEventListener('click', function() {
    let messageInput = document.getElementById('message-input').value;
    if (messageInput.trim() !== "") {
        addMessage(messageInput, 'User');
        addLoadingIndicator();
        sendMessageToServer(messageInput);
        document.getElementById('message-input').value = '';  // Clear input field after sending
    }
});

function addMessage(message, sender) {
    let messagesList = document.getElementById('messages-list');
    let newMessage = document.createElement('li');
    newMessage.textContent = `${sender}: ${message}`;
    messagesList.appendChild(newMessage);
}

function addLoadingIndicator() {
    let messagesList = document.getElementById('messages-list');
    let loadingIndicator = document.createElement('li');
    loadingIndicator.id = 'loading-indicator';
    loadingIndicator.textContent = `PAID: ...`;
    messagesList.appendChild(loadingIndicator);
}

function removeLoadingIndicator() {
    let loadingIndicator = document.getElementById('loading-indicator');
    if (loadingIndicator) {
        loadingIndicator.remove();
    }
}

function sendMessageToServer(message) {
    fetch('http://127.0.0.1:5000/send-message', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ message: message })
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
        removeLoadingIndicator();
        displayResponse(data.response);
    })
    .catch((error) => {
        console.error('Error:', error);
        removeLoadingIndicator();
        displayResponse('Error: Unable to get response.');
    });
}

function displayResponse(response) {
    let messagesList = document.getElementById('messages-list');
    let responseMessage = document.createElement('li');
    responseMessage.textContent = `PAID: ${response}`;
    messagesList.appendChild(responseMessage);
}