import { Suspense, lazy, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import BackToTop from './components/BackToTop';
import Footer from './components/Footer';

// Code splitting / Lazy Loading for below-the-fold components
const About = lazy(() => import('./components/About'));
const ChefNote = lazy(() => import('./components/ChefNote'));
const AtmosphereVideo = lazy(() => import('./components/AtmosphereVideo'));
const Menu = lazy(() => import('./components/Menu'));
const Reservations = lazy(() => import('./components/Reservations'));
const Maps = lazy(() => import('./components/Maps'));

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);

    // Update document title based on route for basic SEO
    let title = 'Kofi | A Nordic Restaurant';
    if (pathname === '/about') title = 'About The Chef | Kofi';
    if (pathname === '/menu') title = 'Current Season | Kofi';
    if (pathname === '/reservations') title = 'Reservations | Kofi';
    if (pathname === '/maps') title = 'Location | Kofi';
    
    document.title = title;
  }, [pathname]);

  return null;
}

function HomePage() {
  return (
    <>
      <Hero />
      <ChefNote />
      <AtmosphereVideo />
    </>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-[#f7f7f5] text-[#1a1a1a] font-sans selection:bg-[#1a1a1a] selection:text-white flex flex-col">
      <ScrollToTop />
      {/* Navigation section handles its own scroll re-renders now */}
      <Navigation />
      
      {/* Lazy Loaded Sections */}
      <main className="flex-grow">
        <Suspense fallback={<div className="h-screen flex items-center justify-center text-xs uppercase tracking-[0.2em] opacity-40">Loading...</div>}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<div className="pt-32"><About /></div>} />
            <Route path="/menu" element={<div className="pt-32"><Menu /></div>} />
            <Route path="/reservations" element={<div className="pt-32"><Reservations /></div>} />
            <Route path="/maps" element={<div className="pt-32"><Maps /></div>} />
            {/* Catch-all route can redirect to Home or a 404 page */}
            <Route path="*" element={<HomePage />} />
          </Routes>
        </Suspense>
      </main>

      <Footer />
      {/* Minimal Back to top button */}
      <BackToTop />
    </div>
  );
}

