import React from 'react';
import MainPage from './pages/Main';
import { BrowserRouter, Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<MainPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
