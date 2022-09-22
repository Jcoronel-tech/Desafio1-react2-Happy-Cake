import React from 'react';


import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


import Home from "./components/Home";
import Contacto from "./components/Contacto";
import NotFound from "./components/NotFound";
import Navbar from "./components/Navbar";


function App() {
return (
 <div className="container">
  <BrowserRouter >
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contacto" element={<Contacto />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
 </div>
 );
}
export default App; 