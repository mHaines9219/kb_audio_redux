import './App.css';

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Category from './pages/Category/Category';
// import ProductsPage from './ProductsPage';
// import ProductDetails from './ProductDetails';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/auth"
          element={
            <>
              <Login /> <Register />
            </>
          }
        />
        <Route path="/category/:categoryName" element={<Category />} />
        {/*  <Route path="/products/:productId" element={<ProductDetails />} /> */}
        // Add more routes as needed
      </Routes>
    </>
  );
}

export default App;
