import express from "express";
import http from "http";
import { Server } from "socket.io";
import { engine } from "express-handlebars";
import viewsRouter from "./routes/views.router.js";

const app = express();
const server = http.createServer(app);

//configuramos nuestro server para que acepte solicitudes websockets
// Input - Output
const io = new Server(server);

//config handlebars
app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", "./src/views");

//endpoinst
app.use("/", viewsRouter);

//persistencia en memoria de los mensajes de chat
const messages = [];

//websockets desde el servidor
io.on("connection", (socket)=> {
  //emitimos un evento desdel el servidor al cliente
  socket.emit("message history", messages);

  console.log("Nuevo usuario conectado");

  socket.on("new message", (data)=> {
    messages.push(data);
    
    //transmitimos el nuevo mensaje a todos los clientes conectados
    io.emit("broadcast new message", data);
  });
});

server.listen(8080, ()=> {
  console.log("Servidor iniciado correctamente!");
});