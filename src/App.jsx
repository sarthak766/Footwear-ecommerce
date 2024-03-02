import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import { Route, Routes } from 'react-router-dom';
import Allproduct from './components/Allproduct';
import Cart from './components/Cart';
import Contact from './components/Contact';
import Card from './components/Card.jsx';
import products from './db/data.jsx';

function App() {
  const [query, setQuery] = useState('');

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const filteredItems = products.filter(
    (product) =>
      (query === '' || product.title.toLowerCase().includes(query.toLowerCase()))
  );

  const filteredData = filteredItems.map(
    ({ id, img, title, star, reviews, prevPrice, newPrice }) => (
      <Card
        key={id}
        img={img}
        title={title}
        star={star}
        reviews={reviews}
        prevPrice={prevPrice}
        newPrice={newPrice}
      />
    )
  );

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route
          path="/allproduct"
          element={<Allproduct data={filteredData} handleInputChange={handleInputChange} />}
        />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
