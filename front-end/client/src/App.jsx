import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/home/HomePage";
import MainLayout from "./components/layout/MainLayout";
import ProductPage from "./components/products/ProductPage";
import NotFoundPage from "./components/ui/NotFoundPage";
import { useState, useEffect } from "react";
import api from "../src/Api"

const App = () => {

  const [numCartItems, setNumerCartItems] = useState(0);
  const cart_code = localStorage.getItem("cart_code");
  
  useEffect(() => {
    if(cart_code){
      api.get(`get_cart_start?cart_code=${cart_code}`)
      .then(res => {
        console.log(res.data)
        setNumerCartItems(res.data.num_of_items)
      })

      .catch(err => {
        console.log(err.message)
      })
    }
  }, [])
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout numCartItems={numCartItems}/>}>
        <Route index element={<HomePage />} />
        <Route path="products/:slug" element={<ProductPage setNumerCartItems={setNumerCartItems} numCartItems={numCartItems}/>}></Route>  
        <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App; 