import { useEffect, useState } from 'react';

export default function App() {
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#f7f7f5] text-[#1a1a1a] font-sans selection:bg-[#1a1a1a] selection:text-white">
      {/* Navigation */}
      <nav 
        className={`fixed top-0 w-full z-50 px-8 md:px-16 py-8 flex justify-between items-center transition-all duration-700 ${
          hasScrolled ? 'bg-[#f7f7f5] text-[#1a1a1a] py-6 shadow-sm' : 'bg-transparent text-white mix-blend-difference'
        }`}
      >
        <div className="font-serif text-3xl tracking-wide uppercase">Koti</div>
        <div className="hidden md:flex gap-12 text-xs uppercase tracking-[0.15em] font-medium">
          <a href="#menu" className="hover:opacity-50 transition-opacity">Menu</a>
          <a href="#about" className="hover:opacity-50 transition-opacity">About</a>
          <a href="#reservations" className="hover:opacity-50 transition-opacity">Reservations</a>
          <a href="#contact" className="hover:opacity-50 transition-opacity">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative h-screen w-full select-none">
        <img 
          src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=2670&auto=format&fit=crop" 
          alt="Nordic restaurant atmospheric"
          className="object-cover w-full h-full brightness-[0.7] focus:outline-none"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center mix-blend-overlay">
          <h1 className="font-serif text-8xl md:text-[10rem] font-light tracking-tighter mb-8 opacity-90 drop-shadow-sm">Koti</h1>
          <p className="font-sans text-xs md:text-sm uppercase tracking-[0.4em] font-light opacity-90 max-w-lg px-4 drop-shadow-md">
            A study of time, nature, and the North.
          </p>
        </div>
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 text-white/70 text-xs tracking-[0.2em] uppercase mix-blend-difference">
          Scroll
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="py-32 md:py-48 px-8 md:px-24 mx-auto flex flex-col md:flex-row gap-16 md:gap-32 items-start max-w-[90rem]">
        <div className="w-full md:w-1/4 text-xs uppercase tracking-[0.15em] opacity-40 pt-3 border-t border-[#1a1a1a]/10">
          01. The Philosophy
        </div>
        <div className="w-full md:w-3/4">
          <h2 className="font-serif text-4xl md:text-6xl leading-[1.1] font-light mb-16 text-balance tracking-tight">
            We look to the forest, the ocean, and the soil to understand our place in the world.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-[#4a4a4a] text-base leading-relaxed font-light">
            <p>
              At Koti, we believe that dining is an extension of the landscape. Every ingredient is sourced within a fifty-mile radius, dictated entirely by the micro-seasons. We do not command nature; we listen to it.
            </p>
            <p>
              Our kitchen operates on the principles of preservation, fermentation, and absolute respect for the raw materials provided by our local foragers, farmers, and fishermen. 
            </p>
          </div>
        </div>
      </section>

      {/* Featured Menu */}
      <section id="menu" className="py-32 bg-white selection:bg-[#1a1a1a] selection:text-white">
        <div className="max-w-[90rem] mx-auto px-8 md:px-24">
          <div className="w-full text-xs uppercase tracking-[0.15em] opacity-40 pt-3 border-t border-[#1a1a1a]/10 mb-32">
          02. Current Season
        </div>
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-24 items-center mb-40">
            <div className="md:col-span-5 order-2 md:order-1 space-y-8">
              <h3 className="font-serif text-4xl md:text-5xl font-light tracking-tight">Pine, Scallop, & Smoked Butter</h3>
              <p className="text-base text-[#4a4a4a] font-light leading-relaxed">
                Hand-dived scallops from the icy waters, served raw and lightly dressed in a vinaigrette made from preserved green pine cones and toasted butter. Found exclusively along the northern coastlines during early spring.
              </p>
            </div>
            <div className="md:col-span-7 order-1 md:order-2">
              <img 
                src="https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?q=80&w=2578&auto=format&fit=crop" 
                alt="Scallop dish"
                className="w-full group-hover:scale-105 transition-transform duration-1000 object-cover aspect-[4/3] md:aspect-[3/2] bg-[#f7f7f5]"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-24 items-center">
            <div className="md:col-span-6">
              <img 
                src="https://images.unsplash.com/photo-1600891964092-4316c288032e?q=80&w=2670&auto=format&fit=crop" 
                alt="Venison dish"
                className="w-full object-cover aspect-square md:aspect-[4/5] bg-[#f7f7f5]"
              />
            </div>
            <div className="md:col-span-5 md:col-start-8 space-y-8">
              <h3 className="font-serif text-4xl md:text-5xl font-light tracking-tight">Venison, Juniper, & Reindeer Moss</h3>
              <p className="text-base text-[#4a4a4a] font-light leading-relaxed">
                Wild fallow deer aged for 24 days, slowly roasted over birch wood. Served with a reduction of juniper berries and crispy, deep-fried lichen. A representation of the deep forest in late autumn.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Reservation CTA */}
      <section id="reservations" className="py-48 px-8 text-center bg-[#181816] text-[#f7f7f5]">
        <div className="max-w-3xl mx-auto space-y-16">
          <div className="text-xs uppercase tracking-[0.15em] opacity-50">
            03. Reservations
          </div>
          <h2 className="font-serif text-5xl md:text-7xl font-light tracking-tight">Join us at the table.</h2>
          <p className="text-base font-light text-[#f7f7f5]/60 max-w-lg mx-auto leading-relaxed">
            Reservations open on the first of each month at 10:00 AM local time for the following month. We accommodate parties of 1 to 6 guests.
          </p>
          <div className="pt-8">
            <button className="px-12 py-5 border border-[#f7f7f5]/20 text-xs uppercase tracking-[0.2em] hover:bg-[#f7f7f5] hover:text-[#181816] hover:border-[#f7f7f5] transition-all duration-500">
              Make a Reservation
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="py-24 px-8 md:px-24 bg-[#f7f7f5] text-[#1a1a1a]">
        <div className="max-w-[90rem] mx-auto grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-8 text-sm font-light">
          <div className="md:col-span-5">
            <h4 className="font-serif text-4xl mb-6">Koti</h4>
            <p className="opacity-60 max-w-sm leading-relaxed text-sm">
              A continuously evolving exploration of our harsh, beautiful environment.
            </p>
          </div>
          <div className="md:col-span-3">
            <div className="text-xs uppercase tracking-[0.15em] opacity-40 mb-6">Location</div>
            <p className="opacity-80 pb-2">Strandgade 93</p>
            <p className="opacity-80 pb-2">1401 Copenhagen K</p>
            <p className="opacity-80 pb-2">Denmark</p>
            <a href="#" className="inline-block mt-4 text-xs uppercase tracking-[0.1em] border-b border-[#1a1a1a] opacity-80 hover:opacity-100 transition-opacity pb-1">Get Directions</a>
          </div>
          <div className="md:col-span-4">
            <div className="text-xs uppercase tracking-[0.15em] opacity-40 mb-6">Contact</div>
            <p className="opacity-80 pb-2">info@koti.dk</p>
            <p className="opacity-80 pb-2">+45 32 96 32 97</p>
            <div className="mt-8 flex gap-8 text-xs uppercase tracking-[0.15em]">
              <a href="#" className="opacity-60 hover:opacity-100 transition-opacity">Instagram</a>
              <a href="#" className="opacity-60 hover:opacity-100 transition-opacity">Journal</a>
            </div>
          </div>
        </div>
        <div className="max-w-[90rem] mx-auto mt-32 pt-8 border-t border-[#1a1a1a]/10 flex flex-col md:flex-row justify-between items-start md:items-center text-xs opacity-40 uppercase tracking-[0.1em]">
          <p>&copy; {new Date().getFullYear()} Koti Restaurant</p>
          <p className="mt-4 md:mt-0">Design & Architecture</p>
        </div>
      </footer>
    </div>
  );
}
