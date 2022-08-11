const { createServer } = require("http")
const { Server } = require('socket.io')

const httpServer = createServer()
const io = new Server(httpServer, {
    cors: {
        origin: "https://rococo-bombolone-483c7d.netlify.app",
        methods: ["GET", "POST"]
    }
})

io.on("connection", (socket) => {
    socket.on("chat", (data) => {
        console.log(data)
        socket.broadcast.emit("chat",data)
    })
})

console.log("[+] Sockets on")
httpServer.listen(process.env.PORT)
