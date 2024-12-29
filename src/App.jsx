import { useState } from "react";
import Header from "./Components/Header";
import Welcome from "./Components/Welcome";
import "./App.css";
import Products from "./Components/Products";
import { Route, Router, Routes } from "react-router-dom";
import Expand from "./Components/Expand";
import Order from "./Components/Order";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/products" element={<Products />} />
        <Route path="/order" element={<Order />} />

        <Route path="/bread" element={<Expand product="Bread" />} />
        <Route path="/pastries" element={<Expand product="Pastries" />} />
        <Route path="/cakes" element={<Expand product="Cakes" />} />
        <Route path="/cookies" element={<Expand product="Cookies" />} />
        <Route path="/other" element={<Expand product="Other" />} />
      </Routes>
    </>
  );
}

export default App;
