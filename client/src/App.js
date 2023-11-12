import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Simulacion from './Simulacion';
import Simular from './Simular';

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/Simular" element={<Simular />} />
          <Route path="/Simulacion" element={<Simulacion />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
