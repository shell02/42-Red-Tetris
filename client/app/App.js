import React from "react";
import { SocketProvider } from "./providers/SocketProvider";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <SocketProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Router>
      </SocketProvider>
    </>
  );
}

export default App;
