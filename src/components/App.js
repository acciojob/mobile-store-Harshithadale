import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductList from './ProductList';
import AdminPanel from './AdminPanel';
import Navbar from './Navbar';
import EditProduct from './EditProduct'; // <- import this
import mobile from '../assets/mobiles';
import ProductDetails from './ProductDetails';
import AddProduct from './AddProduct';
function App() {
  const [mobiles,setMobiles] = useState(mobile)
  return (
    <Router>
      <Navbar />

      <Routes>
  
        <Route path="/" element={<ProductList mobiles={mobiles}/>} mobiles={mobiles}/>
        <Route path="/add" element={<AddProduct mobiles = {mobiles} setMobiles={setMobiles} />}/>
        <Route path="/admin" element={<AdminPanel mobiles={mobiles}/>} />
        <Route path="/admin/products/:id" element={<EditProduct setMobiles={setMobiles}/>} />
        <Route path="/products/:id" element={<ProductDetails mobiles={mobiles}/>} />
      </Routes>
    </Router>
  );
}

export default App;
