import React, { useEffect } from "react";
import { useSocket } from "../providers/SocketProvider";

export default function Home() {
  const socket = useSocket();

  useEffect(() => {
    if (socket) {
      socket.on("connect", () => {
      console.log("socket ID:", socket.id);
      });
    }
  }, [socket]);

  return (
    <>
      <div>Home Page</div>
    </>
  );
}
