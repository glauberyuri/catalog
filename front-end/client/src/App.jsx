import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./components/home/HomePage";
import MainLayout from "./components/layout/MainLayout";
import ProductPage from "./components/products/ProductPage";
import NotFoundPage from "./components/ui/NotFoundPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path="products/:slug" element={<ProductPage />}></Route>  
      <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};

export default App; 