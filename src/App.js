import React from "react";
import { Routes, Route } from 'react-router-dom'
import Navigation from "./components/navigation/Navigation";
import Homepage from "./pages/homepage/Home";
import ProductPage from "./pages/shop-page/ProductPage";
import ProductPrev from "./pages/product-preview/ProductPrev";
import CartView from "./pages/cartpage/CartView";
import Dashboard from "./pages/admin/Dashboard";
import Footer from "./components/footer/Footer";
import AdminNav from "./pages/admin/AdminNav";
import AdminProduct from "./pages/admin/AdminProduct";
import AdminUser from "./pages/admin/AdminUser";

function App() {
  return (
    <div className="App">


      <Navigation />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/product/:id" element={<ProductPrev />} />
        <Route path="/shoppingcart" element={<CartView />} />
        <Route path="/admin" element={<AdminNav />} >
          <Route index element={<Dashboard />} />
          <Route path="product" element={<AdminProduct />} />
          <Route path="user" element={<AdminUser />} />
        </Route>
      </Routes>

      <Footer />

    </div>
  );
}

export default App;
