import { io } from "socket.io-client";

export const socket = io("http://localhost:3003", {
  autoConnect: false,
});

socket.on("connect", () => {
  console.log("websocket连接成功", socket.id);
});

socket.on("disconnect", () => {
  console.log("websocket连接断开");
});
