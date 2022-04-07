import React from 'react';
import { Routes, Route } from 'react-router-dom';
import * as pages from './pages';

function App() {
  return (
    <Routes>
      <Route path="*" element={<pages.NotFound />} />
      <Route path="/" element={<pages.Homepage />} />
      <Route path="category" element={<pages.Category />} />
      <Route path="product" element={<pages.Product />} />
    </Routes>
  );
}

export default App;
