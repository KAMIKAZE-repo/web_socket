const express = require('express');

const app = express();

const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 8082 });

wss.on('connection', ws => {
    console.log('client connected');
    let lat = 36.847305
    let lng = 10.213722
    setInterval(() => {
      lat += lat < 37.220507 ? 0.003165 : -0.003165
      lng += lng < 10.090782 ? 0.003165 : -0.003165
      const location = {
        lat: lat.toFixed(6),
        lng: lng.toFixed(6),
      };
      console.log(location)
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