import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./index.css";
import { Home } from "./pages/Home";
import { GameTarot } from "./pages/GameTarot";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route path="/" element={<Home/>}/>
          <Route path="/jogo" element={<GameTarot/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
