import React, { createContext, useContext, useEffect, useState } from "react";
import { io } from "socket.io-client";

const socket = io("http://localhost:3001", {
  withCredentials: true,
});

const SocketContext = createContext();

export const useSocket = () => useContext(SocketContext);

function SocketProvider({ children }) {
  const [socketInstance, setSocketInstance] = useState(null);

  useEffect(() => {
    setSocketInstance(socket);
  }, []);

  return (
    <SocketContext.Provider value={socketInstance}>
      {children}
    </SocketContext.Provider>
  );
}

export { SocketProvider };
