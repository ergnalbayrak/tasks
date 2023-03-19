// add event listener to the notification button
document.querySelector('.notification-button').addEventListener('click', function () {
    // array of messages
    var messages = ['message one', 'message two', 'message three'];
    // randomly select a message
    var message = messages[Math.floor(Math.random() * messages.length)];
    // generate a random color for the notification text
    var textColor = getRandomColor();
    // create the notification element
    var notification = document.createElement('div');
    notification.classList.add('notification');
    notification.innerText = message;
    notification.style.color = textColor;
    // add the notification to the container
    var container = document.querySelector('.notification-container');
    container.appendChild(notification);
    // remove the notification after 3 seconds
    setTimeout(function () {
        container.removeChild(notification);
    }, 3000);
});

// function to generate a random color
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}