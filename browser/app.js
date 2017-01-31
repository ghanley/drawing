const whiteboard = require('./whiteboard');
// const socket = require('socket.io-client');
import socket from 'socket.io-client';

console.log(socket)
socket.on('connect', function () {
  console.log('Connected!');
});

socket.on('load', function (strokes) {

  strokes.forEach(function (stroke) {
    var { start, end, color } = stroke;
    whiteboard.draw(start, end, color, false);
  });

});

socket.on('draw', function (start, end, color) {
  whiteboard.draw(start, end, color, false);
});

whiteboard.on('draw', function (start, end, color) {
  socket.emit('draw', start, end, color);
});
