import { useEffect, useState } from 'react';
import { Menu as MenuIcon, X } from 'lucide-react';

export default function Navigation() {
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

  return (
    <nav 
      className={`fixed top-0 w-full z-50 px-8 md:px-16 py-8 flex justify-between items-center transition-all duration-700 ${
        hasScrolled || isMobileMenuOpen ? 'bg-[#f7f7f5]/95 backdrop-blur-md text-[#1a1a1a] py-6 shadow-[0_4px_30px_rgba(0,0,0,0.03)] border-b border-[#1a1a1a]/5' : 'bg-transparent text-white mix-blend-difference'
      }`}
    >
      <div className="font-serif text-3xl tracking-wide uppercase relative z-[60]">Kofi</div>
      
      {/* Desktop Nav */}
      <div className="hidden md:flex gap-12 text-xs uppercase tracking-[0.15em] font-medium relative z-[60]">
        <a href="#menu" className="hover:opacity-50 transition-opacity">Menu</a>
        <a href="#about" className="hover:opacity-50 transition-opacity">About The Chef</a>
        <a href="#reservations" className="hover:opacity-50 transition-opacity">Reservations</a>
        <a href="#contact" className="hover:opacity-50 transition-opacity">Contact</a>
        <a href="#maps" className="hover:opacity-50 transition-opacity">Maps</a>
      </div>

      {/* Mobile Toggle */}
      <button 
        className="md:hidden relative z-[60] p-2 -mr-2"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        aria-label="Toggle Menu"
      >
        {isMobileMenuOpen ? <X strokeWidth={1} size={28} /> : <MenuIcon strokeWidth={1} size={28} />}
      </button>

      {/* Mobile Sidebar Overlay */}
      <div className={`fixed inset-0 bg-[#f7f7f5]/60 backdrop-blur-md z-50 flex flex-col justify-center items-center transition-all duration-700 ease-[cubic-bezier(0.7,0,0.3,1)] md:hidden ${
        isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}>
        <div className={`flex flex-col gap-12 text-center text-lg uppercase tracking-[0.2em] text-[#1a1a1a] transition-all duration-1000 delay-100 ease-[cubic-bezier(0.7,0,0.3,1)] ${
          isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <a href="#menu" onClick={() => setIsMobileMenuOpen(false)} className="hover:opacity-50 transition-opacity">Menu</a>
          <a href="#about" onClick={() => setIsMobileMenuOpen(false)} className="hover:opacity-50 transition-opacity">About The Chef</a>
          <a href="#reservations" onClick={() => setIsMobileMenuOpen(false)} className="hover:opacity-50 transition-opacity">Reservations</a>
          <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="hover:opacity-50 transition-opacity">Contact</a>
          <a href="#maps" onClick={() => setIsMobileMenuOpen(false)} className="hover:opacity-50 transition-opacity">Maps</a>
        </div>
      </div>
    </nav>
  );
}
