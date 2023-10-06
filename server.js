const express = require('express');

const app = express();

const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 8082 });

wss.on('connection', ws => {
    console.log('client connected');
    setInterval(() => {
      const location = {
        latitude: 10.021145,
        longitude: 32.265474,
      };
      ws.send(JSON.stringify(location));
    }, 1000);
  }
);


// Handle client disconnect
wss.on('close', () => {
  console.log('Client disconnected');
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});