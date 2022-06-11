// const { WebSocketServer } = require('ws');

// const server = new WebSocketServer({ port: 4444 })
const { createServer } = require("http")
const { Server } = require('socket.io')

const httpServer = createServer()
const io = new Server(httpServer, {})

io.on("connection", (socket) => {
    socket.on("chat", (data) => {
        console.log(data)
        socket.broadcast.emit("chat",data)
    })
})

console.log("[+] Sockets on")
httpServer.listen(process.env.PORT)