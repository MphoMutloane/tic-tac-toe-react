import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom"; // Import HashRouter
import Home from "./pages/Home/Home";
import Details from "./pages/Details/Details";
import Game from "./pages/Game/Game";
import Header from "./components/Header/Header";
import { ModalContextProvider } from "./contexts/ModalContext";

const Router = () => {
  return (
    <div>
      {/* Replace BrowserRouter with HashRouter */}
      <HashRouter>
        <ModalContextProvider>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/details" element={<Details />} />
            <Route path="/game-on" element={<Game />} />
          </Routes>
        </ModalContextProvider>
      </HashRouter>
    </div>
  );
};

export default Router;
