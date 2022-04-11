import React from 'react';
import { Routes, Route } from 'react-router-dom';
import * as pages from './pages';
import './styles/main.sass';

function App() {
  return (
    <Routes>
      <Route path="*" element={<pages.NotFound />} />
      <Route path="/" element={<pages.Homepage />} />
      <Route path="categories/:category" element={<pages.Category />} />
      <Route path="favorite" element={<pages.Category />} />
      <Route path="product/:id" element={<pages.Product />} />
    </Routes>
  );
}

export default App;
