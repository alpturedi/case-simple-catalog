import React from 'react';
import { Routes, Route } from 'react-router-dom';
import * as pages from './pages';
import './styles/main.sass';

import api from './configureAxios';

function App() {
  // api
  //   .get('/categories')
  //   .then(function (response) {
  //     // handle success
  //     console.log(response);
  //   })
  //   .catch(function (error) {
  //     // handle error
  //     console.log(error);
  //   })
  //   .then(function () {
  //     // always executed
  //   });
  return (
    <Routes>
      <Route path="*" element={<pages.NotFound />} />
      <Route path="/" element={<pages.Homepage />} />
      <Route path="categories/:category" element={<pages.Category />} />
      <Route path="product/:id" element={<pages.Product />} />
    </Routes>
  );
}

export default App;
