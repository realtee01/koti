import { Suspense, lazy } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';

// Code splitting / Lazy Loading for below-the-fold components
const About = lazy(() => import('./components/About'));
const ChefNote = lazy(() => import('./components/ChefNote'));
const AtmosphereVideo = lazy(() => import('./components/AtmosphereVideo'));
const Menu = lazy(() => import('./components/Menu'));
const Reservations = lazy(() => import('./components/Reservations'));
const Maps = lazy(() => import('./components/Maps'));
const Footer = lazy(() => import('./components/Footer'));

export default function App() {
  return (
    <div className="min-h-screen bg-[#f7f7f5] text-[#1a1a1a] font-sans selection:bg-[#1a1a1a] selection:text-white">
      {/* Navigation section handles its own scroll re-renders now */}
      <Navigation />
      
      <Hero />

      {/* Lazy Loaded Sections */}
      <Suspense fallback={<div className="py-32 text-center text-xs uppercase tracking-[0.2em] opacity-40">Loading...</div>}>
        <About />
        <ChefNote />
        <AtmosphereVideo />
        <Menu />
        <Reservations />
        <Maps />
        <Footer />
      </Suspense>
    </div>
  );
}

