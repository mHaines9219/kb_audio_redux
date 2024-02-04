import './App.css';

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Register from './pages/Register';
import Login from './pages/Login';
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
        {/* <Route path="/products" element={<ProductsPage />} />
        <Route path="/products/:productId" element={<ProductDetails />} /> */}
        // Add more routes as needed
      </Routes>
    </>
  );
}

export default App;
