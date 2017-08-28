const socketio = require('socket.io');

const io = socketio(process.env.PORT || 3000, {
  'transports': ['websocket']
});

io.on('connection', socket => {
  console.log('default Namespace connection');
  setTimeout(() => {
    socket.emit('message', 'from default Namespace');
  }, 2000)
  socket.on('message', data => {
    console.log('default Namespace received message', data);
  });
  socket.on('join', room => {
    console.log('default Namespace joining', room);
    socket.join(room);
  });
});

const NamespaceOne = io.of('/NamespaceOne');
NamespaceOne.on('connection', socket => {
  console.log('NamespaceOne connection');
  socket.send('from NamespaceOne');
  socket.on('message', data => {
    console.log('NamespaceOne received message', data);
  });
  socket.on('join', room => {
    console.log('NamespaceOne joining', room);
    socket.join(room);
  });
});

const NamespaceTwo = io.of('/NamespaceTwo');
NamespaceTwo.on('connection', socket => {
  console.log('NamespaceTwo connection');
  socket.send('from NamespaceTwo');
  socket.on('message', data => {
    console.log('NamespaceTwo received message', data);
  });
  socket.on('join', room => {
    console.log('NamespaceTwo joining', room);
    socket.join(room);
  });
});

const NamespaceThree = io.of('/NamespaceThree');
NamespaceThree.on('connection', socket => {
  console.log('NamespaceThree connection');
  socket.send('from NamespaceThree');
  socket.on('message', data => {
    console.log('NamespaceThree received message', data);
  });
  socket.on('join', room => {
    console.log('NamespaceThree joining', room);
    socket.join(room);
  });
});
