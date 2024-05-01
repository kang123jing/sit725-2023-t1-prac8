
let socket = io();
socket.on('number', (msg) => {
    console.log('Ramdom number: ' + msg);
})