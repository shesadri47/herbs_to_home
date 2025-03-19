import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Footers from "./components/Footers";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ContactUs from "./pages/ContactUs";
import Cart from "./pages/Cart";
import CheckoutPage from './pages/CheckoutPage';
import Login from "./pages/Login";
import Signup from './pages/Signup';
import Account from './pages/Account';
import PassRecover from './pages/PassRecover';
import ResetPassword from './pages/newPass';

function App() {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [cart, setCart] = useState([]);
  const [orders, setOrders] = useState([]);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const handleSearchChange = (term) => {
    setSearchTerm(term);
  };

  const addToCart = (product) => {
    setCart(prevCart => [...prevCart, product]);
  };

  const removefromCart = (productToRemove) => {
    setCart(prevCart => prevCart.filter(item => item !== productToRemove));
  };

  const handleCheckout = () => {
    setOrders([...orders, ...cart]);
    setCart([]);
  };

  return (
    <Router>
      <Navbar cart={cart} onCategoryChange={handleCategoryChange} onSearch={handleSearchChange} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products selectedCategory={selectedCategory} searchTerm={searchTerm} addToCart={addToCart} removefromCart={removefromCart} />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/cart" element={<Cart cart={cart} removefromCart={removefromCart} />} />
        <Route path="/checkoutpage" element={<CheckoutPage cart={cart} onCheckout={handleCheckout} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/passrecover" element={<PassRecover />} />
        <Route path="/account" element={<Account orders={orders} />} />
        <Route path="/reset-password/:userId/:secret" element={<ResetPassword />} />
      </Routes>
      <Footers />
    </Router>
  );
}

export default App;
