import express from "express";
import { router } from "./routers/index.js";
import cors from "cors";
import decodeToken from "./middleware/index.js";
import { publicrouter } from "./routers/public.js";
import { createServer } from "http";
import { Server } from "socket.io";
const app = express();
const httpServer = createServer(app);
const socketIO = new Server(httpServer, {
  cors: {
    origin: "http://localhost:3002",
    credentials: true
  },
});
app.use(cors());
app.use(express.json());

socketIO.on("connection", (socket) => {
  console.log("user connected");
  socketIO.emit("messageResponse", "hello");
  socket.on("disconnect", () => {
    console.log("disconnection");
    socketIO.emit("messageResponse", () => {
      console.log("bye");
    });
  });
});

app.use("/api/homegrown/public/", publicrouter);
app.use(decodeToken);
app.use("/api/homegrown/", router);

httpServer.listen(3001);
export default app;
