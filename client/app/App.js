import React from 'react';
import './App.css';
import { io } from "socket.io-client";

function App() {

  React.useEffect(() => {
    const socket = io("http://localhost:3001", {
      withCredentials: true,
    });

    socket.on("connect", () => {
      socket.emit("ping-server", socket.id);
    });

    socket.on("pong-client", () => {
      console.log("Received pong from server");
    });


    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <div>
      <header className="app-name">
        Hello World !
      </header>
    </div>
  );
}

export default App;
