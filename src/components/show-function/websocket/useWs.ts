import { io } from "socket.io-client";
import { reactive, Ref } from "vue";

interface Reply {
  time: Date;
  msg: string;
}

const socket = io("http://localhost:3003/");
const replyArr = reactive<Reply[]>([]);

socket.on("connect", () => {
  console.log("websocket连接成功", socket.id);
});

socket.on("disconnect", () => {
  console.log("websocket连接断开");
});

socket.on("reply", (args) => {
  replyArr.push(args);
});

export function useWs() {
  function sendMes(message: string) {
    if (message.length === 0) {
      return;
    }
    socket.emit("mes", message);
    message = "";
  }
  function clearMessage() {
    replyArr.length = 0;
  }
  return {
    sendMes,
    replyArr,
    clearMessage,
  };
}
