import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import GlobalStyle from "./styles/GlobalStyle";

export default function App() {
  return (
    <div>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}
