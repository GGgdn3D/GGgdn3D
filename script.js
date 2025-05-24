document.addEventListener('DOMContentLoaded', () => {
    const messageElement = document.getElementById('message');
    const changeButton = document.getElementById('changeButton');

    if (changeButton && messageElement) {
        changeButton.addEventListener('click', () => {
            messageElement.textContent = 'The message has been changed by JavaScript!';
            messageElement.style.color = 'green';
        });
    }
});