import { useEffect, useState } from 'react';
import { Menu as MenuIcon, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export default function Navigation() {
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const isScrolled = window.scrollY > window.innerHeight - 80;
          setHasScrolled(prev => prev !== isScrolled ? isScrolled : prev);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // If we are not on the home page, always show the solid background
  const isSolid = hasScrolled || isMobileMenuOpen || location.pathname !== '/';

  return (
    <nav 
      className={`fixed top-0 w-full z-50 px-8 lg:px-16 py-8 flex justify-between items-center transition-all duration-700 ${
        isSolid ? 'bg-[#f7f7f5]/95 backdrop-blur-md text-[#1a1a1a] py-6 shadow-[0_4px_30px_rgba(0,0,0,0.03)] border-b border-[#1a1a1a]/5' : 'bg-transparent text-white mix-blend-difference'
      }`}
    >
      <Link to="/" className="font-serif text-3xl tracking-wide uppercase relative z-[60]">Kofi</Link>
      
      {/* Desktop Nav */}
      <div className="hidden lg:flex gap-12 text-xs uppercase tracking-[0.15em] font-medium relative z-[60]">
        <Link to="/menu" className="hover:opacity-50 transition-opacity">Menu</Link>
        <Link to="/about" className="hover:opacity-50 transition-opacity">About The Chef</Link>
        <Link to="/reservations" className="hover:opacity-50 transition-opacity">Reservations</Link>
        <Link to="/maps" className="hover:opacity-50 transition-opacity">Location</Link>
        <a href="#contact" className="hover:opacity-50 transition-opacity">Contact</a>
      </div>

      {/* Mobile Toggle */}
      <button 
        className="lg:hidden relative z-[70] p-2 -mr-2"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        aria-label="Toggle Menu"
      >
        {isMobileMenuOpen ? <X strokeWidth={1} size={28} /> : <MenuIcon strokeWidth={1} size={28} />}
      </button>

      {/* Mobile Sidebar Backdrop */}
      <div 
        className={`fixed inset-0 bg-[#1a1a1a]/40 backdrop-blur-sm z-40 flex flex-col transition-opacity duration-500 lg:hidden ${
          isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* Mobile Sidebar */}
      <div className={`fixed top-0 right-0 h-[100dvh] w-[85vw] max-w-[320px] bg-[#f7f7f5] z-50 flex flex-col pt-32 px-10 lg:hidden shadow-2xl safe-area-inset-bottom transition-transform duration-700 ease-[cubic-bezier(0.7,0,0.3,1)] ${
        isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className={`flex flex-col gap-8 text-left text-sm uppercase tracking-[0.2em] text-[#1a1a1a] transition-all duration-1000 delay-100 ease-[cubic-bezier(0.7,0,0.3,1)] ${
          isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="text-[10px] uppercase tracking-[0.2em] opacity-40 mb-2 border-b border-[#1a1a1a]/10 pb-4">Navigation</div>
          <Link to="/menu" onClick={() => setIsMobileMenuOpen(false)} className="hover:opacity-50 transition-opacity">Menu</Link>
          <Link to="/about" onClick={() => setIsMobileMenuOpen(false)} className="hover:opacity-50 transition-opacity">About The Chef</Link>
          <Link to="/reservations" onClick={() => setIsMobileMenuOpen(false)} className="hover:opacity-50 transition-opacity">Reservations</Link>
          <Link to="/maps" onClick={() => setIsMobileMenuOpen(false)} className="hover:opacity-50 transition-opacity">Location</Link>
          <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="hover:opacity-50 transition-opacity">Contact</a>
        </div>
        
        <div className={`mt-auto mb-10 border-t border-[#1a1a1a]/10 pt-8 flex flex-col gap-4 text-[10px] uppercase tracking-[0.2em] opacity-60 transition-all duration-1000 delay-200 ease-[cubic-bezier(0.7,0,0.3,1)] ${
          isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
           <p className="hover:text-[#1a1a1a] hover:opacity-100 transition-colors cursor-pointer">info@kofi.dk</p>
           <p>+45 32 96 32 97</p>
        </div>
      </div>
    </nav>
  );
}
