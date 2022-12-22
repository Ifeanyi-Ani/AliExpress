import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/navigation/Navigation";
import Homepage from "./pages/homepage/Home";
import ProductPage from "./pages/shop-page/ProductPage";
import ProductPrev from "./pages/product-preview/ProductPrev";
import CartView from "./pages/cartpage/CartView";
import Dashboard from "./pages/admin/Dashboard";
import Footer from "./components/footer/Footer";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/products" element={<ProductPage />} />
          <Route path="/product/:id" element={<ProductPrev />} />
          <Route path="/shoppingcart" element={<CartView />} />
          <Route path="/admin" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
