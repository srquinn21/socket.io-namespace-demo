'use strict';

import io from 'socket.io-client';

const SOCKETIO_HOST = 'http://localhost:3000';

const root = io(SOCKETIO_HOST, { 'transports': ['websocket'] });
root.on('connect', () => {
  console.log('default Namespace connected');
  root.send('from default Namespace');
  root.send('join', 'vehicle_1');
});
root.on('message', function (data) {
  console.log('default Namespace received message', data);
});

const NamespaceOne = io(SOCKETIO_HOST + '/NamespaceOne');
NamespaceOne.on('connect', () => {
  console.log('NamespaceOne connected');
  NamespaceOne.send('from NamespaceOne');
  NamespaceOne.send('join', 'vehicle_1');
});
NamespaceOne.on('message', data => {
  console.log('NamespaceOne received message', data);
});

const NamespaceTwo= io(SOCKETIO_HOST + '/NamespaceTwo');
NamespaceTwo.on('connect', () => {
  console.log('NamespaceTwo connected');
  NamespaceTwo.send('message from NamespaceTwo');
});
NamespaceTwo.on('message', data => {
  console.log('NamespaceTwo received message', data);
});

const NamespaceThree = io(SOCKETIO_HOST + '/NamespaceThree');
NamespaceThree.on('connect', () => {
  console.log('NamespaceThree connected');
  NamespaceThree.send('messsge from Commnds')
});
NamespaceThree.on('message', data => {
  console.log('NamespaceThree received message', data);
});
