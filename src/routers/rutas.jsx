import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Home from '../components/home';
import NavBar from '../components/navbar';
import Sobremi from '../components/sobremi';
import Portafolio from '../components/portafolio';
import Block from '../components/block';
import Contacto from '../components/contacto';
import Curriculum from '../components/curriculum';

const Rutas = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/navbar" element={<NavBar />} />
        <Route path="/sobremi" element={<Sobremi />} />
        <Route path="/portafolio" element={<Portafolio />} />
        <Route path="/block" element={<Block />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/curriculum" element={<Curriculum />} />
        <Route path="*" element={<Navigate to="/" />} /> {/* Ruta por defecto */}
      </Routes>
    </Router>
  );
};

export default Rutas;
