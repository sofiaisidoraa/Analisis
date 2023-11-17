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
          <Route path="/Simulacion/:nombres/:apellidos/:telefono/:email/:monto/:cuotas/:interes/:valorCuota" element={<Simulacion nombres="francisca" apellidos="figueroa" telefono="12345678"/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
