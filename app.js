const WebSocket = require("ws");

const server = new WebSocket.Server({ port: 3000 }, () => {
  console.log("Chatning server 3000-port qismi ishga tushdi");
});
server.on("connection", (ws) => {
  console.log("Yangi client ulandi");
  ws.on("message", (message) => {
    if (message == "exit") {
        message = "exx.. bita bola chiqti chatdan";
    client.send(message.toString());
      ws.close();
    } else {
      server.clients.forEach((client) => {
        if (client.readyState == WebSocket.OPEN) {
          client.send(message.toString());
        }
      });
    }
  });
  ws.send("Chatga xush kelibsiz!");
});
