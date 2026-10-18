import React from "react";
import Navbar from "./components/Navbar.jsx";
import ProductList from "./pages/Product_List.jsx";
import Cart from "./pages/Cart.jsx";
import Checkout from "./pages/Checkout.jsx";
import ProductDetail from "./pages/Product_Detail.jsx";
import Footer from "./components/Footer.jsx";
import Oredr_Confirmation from "./pages/Order_Confirmation.jsx";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Router>
        <div className="min-h-screen bg-gray-950 font-sans ">
          <Navbar />

          <Routes>
            <Route path="/" element={<ProductList />} />
            <Route path="/Product/:id" element={<ProductDetail />} />
            <Route path="/Cart" element={<Cart />} />
            <Route path="/Checkout" element={<Checkout />} />
          </Routes>

          <Footer />
        </div>
      </Router>
    </>
  );
};

export default App;
