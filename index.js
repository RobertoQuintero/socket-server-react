const Server = require("./models/server");
require("dotenv").config();

const server = new Server();

server.execute();

// const app = express();

// //Servidor de sockets
// const server = require("http").createServer(app);

// //configuración del socket server
// const io = require("socket.io")(server);

// //desplegar el directorio publico

// );

// io.on("connection", (socket) => {
//   // socket.emit("mensaje-bienvenida", {
//   //   msg: "Bienvenido al server",
//   //   fecha: new Date(),
//   // });

//   socket.on("mensaje-to-server", (data) => {
//     console.log(data);

//     io.emit("mensaje-from-server", data);
//   });
// });

// server.listen(8080, () => {
//   console.log("Server corriendo en puerto 8080");
// });
