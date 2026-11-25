import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router";
import { Nav } from "./components/Nav";
import { Footer } from "./components/Footer";
import Home from "./pages/Home";
import Proyectos from "./pages/Proyectos";
import ProyectoDetalle from "./pages/ProyectoDetalle";
import Contacto from "./pages/Contacto";

// Vuelve al inicio de la página cada vez que cambias de ruta
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[#0F1115]" style={{ fontFamily: "'Inter', sans-serif" }}>
        <style>{`
          @keyframes blink { 0%, 49% { opacity: 1; } 50%, 100% { opacity: 0; } }
          .cursor-blink { animation: blink 1s step-start infinite; }
        `}</style>

        <ScrollToTop />
        <Nav />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/proyectos" element={<Proyectos />} />
          <Route path="/proyectos/:slug" element={<ProyectoDetalle />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}
