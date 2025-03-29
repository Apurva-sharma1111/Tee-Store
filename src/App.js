import React from "react";
import Body from "./components/Body";
import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartDetail from "./components/CartDetail";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <div className="app-container">
          <Header />
          <Routes>
            <Route path="/" element={<Body />} />
            <Route path="/cart" element={<CartDetail />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;
