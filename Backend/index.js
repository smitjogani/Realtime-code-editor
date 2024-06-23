const express = require('express');
const app = express();
const http = require('http');
require("dotenv").config();
const { Server } = require('socket.io');

const server = http.createServer(app);
const io = new Server(server);

const userSocketMap = {};

const getAllConnectedClients = (roomId) => {
    return Array.from(io.sockets.adapter.rooms.get(roomId) || []).map((socketId) => {
        return {
            socketId,
            userName: userSocketMap[socketId]
        }
    });
}

io.on('connection', (socket) => {
    console.log(`socket connected`, socket.id);

    socket.on('join', ({ roomId, userName }) => {
        userSocketMap[socket.id] = userName;
        socket.join(roomId);

        const clients = getAllConnectedClients(roomId);

        clients.forEach(({socketId}) => {
            io.to(socketId).emit('joined', {
                clients,
                userName,
                socketId: socket.id, 
            });
        })
    });
});

const PORT = process.env.PORT;
server.listen(PORT, () => {
    console.log(`server listen on ${PORT}`);
})