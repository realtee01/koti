import { useEffect, useState } from 'react';
import { Instagram, Facebook, Twitter, Menu, X } from 'lucide-react';

export default function App() {
  const [hasScrolled, setHasScrolled] = useState(false);
  const [reservationSubmitted, setReservationSubmitted] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleReservationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setReservationSubmitted(true);
  };

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
    <div className="min-h-screen bg-[#f7f7f5] text-[#1a1a1a] font-sans selection:bg-[#1a1a1a] selection:text-white">
      {/* Navigation */}
      <nav 
        className={`fixed top-0 w-full z-50 px-8 md:px-16 py-8 flex justify-between items-center transition-all duration-700 ${
          hasScrolled || isMobileMenuOpen ? 'bg-[#f7f7f5]/95 backdrop-blur-md text-[#1a1a1a] py-6 shadow-[0_4px_30px_rgba(0,0,0,0.03)] border-b border-[#1a1a1a]/5' : 'bg-transparent text-white mix-blend-difference'
        }`}
      >
        <div className="font-serif text-3xl tracking-wide uppercase relative z-[60]">Koti</div>
        
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
          {isMobileMenuOpen ? <X strokeWidth={1} size={28} /> : <Menu strokeWidth={1} size={28} />}
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

      {/* Hero Section */}
      <header className="relative h-screen w-full select-none">
        <img 
          src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=2670&auto=format&fit=crop" 
          alt="Nordic restaurant atmospheric"
          fetchPriority="high"
          decoding="sync"
          className="object-cover w-full h-full brightness-[0.7] focus:outline-none will-change-transform"
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

      {/* Chef's Note */}
      <section className="py-24 md:py-40 px-8 mx-auto w-full flex flex-col items-center justify-center">
        <blockquote className="font-serif text-3xl md:text-5xl lg:text-6xl font-light leading-snug md:leading-[1.2] max-w-5xl text-[#1a1a1a] tracking-tight text-balance text-center">
          &ldquo;We do not seek to reinvent nature, but rather to translate its quiet, untamed language onto the plate.&rdquo;
        </blockquote>
        <div className="mt-12 md:mt-16 text-[10px] md:text-xs uppercase tracking-[0.3em] opacity-40 flex items-center justify-center gap-6">
          <span className="w-8 md:w-12 h-[1px] bg-[#1a1a1a]"></span>
          Elias Nordström, Head Chef
          <span className="w-8 md:w-12 h-[1px] bg-[#1a1a1a]"></span>
        </div>
      </section>

      {/* Featured Menu */}
      <section id="menu" className="py-32 bg-white selection:bg-[#1a1a1a] selection:text-white">
        <div className="max-w-[90rem] mx-auto px-8 md:px-24">
          <div className="w-full text-xs uppercase tracking-[0.15em] opacity-40 pt-3 border-t border-[#1a1a1a]/10 mb-32">
          02. Current Season
        </div>
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-24 items-center mb-40 group cursor-pointer">
            <div className="md:col-span-5 order-2 md:order-1 space-y-8">
              <h3 className="font-serif text-4xl md:text-5xl font-light tracking-tight group-hover:text-[#1a1a1a]/70 transition-colors duration-500">Pine, Scallop, & Smoked Butter</h3>
              <p className="text-base text-[#4a4a4a] font-light leading-relaxed">
                Hand-dived scallops from the icy waters, served raw and lightly dressed in a vinaigrette made from preserved green pine cones and toasted butter. Found exclusively along the northern coastlines during early spring.
              </p>
              <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-700 ease-in-out opacity-0 group-hover:opacity-100">
                <div className="overflow-hidden">
                  <div className="pt-4 text-xs uppercase tracking-[0.1em] text-[#1a1a1a] flex items-center gap-4">
                    <span>Foraged: Spring</span>
                    <span className="opacity-40">•</span>
                    <span>Origin: Northern Coast</span>
                  </div>
                  <div className="mt-4 text-xs text-[#4a4a4a] font-light">
                    Allergens: Dairy, Molluscs
                  </div>
                </div>
              </div>
            </div>
            <div className="md:col-span-7 order-1 md:order-2 overflow-hidden relative">
              <img 
                src="https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?q=80&w=2578&auto=format&fit=crop" 
                alt="Scallop dish"
                loading="lazy"
                decoding="async"
                className="w-full group-hover:scale-105 transition-transform duration-1000 ease-out object-cover aspect-[4/3] md:aspect-[3/2] bg-[#f7f7f5] will-change-transform"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-24 items-center mb-40 group cursor-pointer">
            <div className="md:col-span-6 overflow-hidden relative">
              <img 
                src="https://images.unsplash.com/photo-1600891964092-4316c288032e?q=80&w=2670&auto=format&fit=crop" 
                alt="Venison dish"
                loading="lazy"
                decoding="async"
                className="w-full group-hover:scale-105 transition-transform duration-1000 ease-out object-cover aspect-[4/3] md:aspect-[4/5] bg-[#f7f7f5] will-change-transform"
              />
            </div>
            <div className="md:col-span-5 md:col-start-8 space-y-8">
              <h3 className="font-serif text-4xl md:text-5xl font-light tracking-tight group-hover:text-[#1a1a1a]/70 transition-colors duration-500">Venison, Juniper, & Reindeer Moss</h3>
              <p className="text-base text-[#4a4a4a] font-light leading-relaxed">
                Wild fallow deer aged for 24 days, slowly roasted over birch wood. Served with a reduction of juniper berries and crispy, deep-fried lichen. A representation of the deep forest in late autumn.
              </p>
              <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-700 ease-in-out opacity-0 group-hover:opacity-100">
                <div className="overflow-hidden">
                  <div className="pt-4 text-xs uppercase tracking-[0.1em] text-[#1a1a1a] flex items-center gap-4">
                    <span>Hunted: Autumn</span>
                    <span className="opacity-40">•</span>
                    <span>Origin: Inner Forest</span>
                  </div>
                  <div className="mt-4 text-xs text-[#4a4a4a] font-light">
                    Paired with: Fermented lingonberry juice
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-24 items-center mb-40 group cursor-pointer">
            <div className="md:col-span-5 order-2 md:order-1 space-y-8">
              <h3 className="font-serif text-4xl md:text-5xl font-light tracking-tight group-hover:text-[#1a1a1a]/70 transition-colors duration-500">Halibut, White Asparagus, & Kelp</h3>
              <p className="text-base text-[#4a4a4a] font-light leading-relaxed">
                Wild-caught North Sea halibut gently poached in kelp oil, accompanied by the first white asparagus of the season and a delicate sauce of fermented buttermilk. A tribute to the turning currents.
              </p>
              <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-700 ease-in-out opacity-0 group-hover:opacity-100">
                <div className="overflow-hidden">
                  <div className="pt-4 text-xs uppercase tracking-[0.1em] text-[#1a1a1a] flex items-center gap-4">
                    <span>Caught: Early Summer</span>
                    <span className="opacity-40">•</span>
                    <span>Origin: North Sea</span>
                  </div>
                  <div className="mt-4 text-xs text-[#4a4a4a] font-light">
                    Allergens: Fish, Dairy
                  </div>
                </div>
              </div>
            </div>
            <div className="md:col-span-7 order-1 md:order-2 overflow-hidden relative">
              <img 
                src="https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?q=80&w=2670&auto=format&fit=crop" 
                alt="Halibut dish"
                loading="lazy"
                decoding="async"
                className="w-full group-hover:scale-105 transition-transform duration-1000 ease-out object-cover aspect-[4/3] md:aspect-[3/2] bg-[#f7f7f5] will-change-transform"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-24 items-center mb-40 group cursor-pointer">
            <div className="md:col-span-6 overflow-hidden relative">
              <img 
                src="https://cdn.sanity.io/images/jlrwvnbf/production/798261b204492567f5d2c278b4215025b2b0d88b-3846x4808.jpg" 
                alt="Cloudberry dessert"
                loading="lazy"
                decoding="async"
                className="w-full group-hover:scale-105 transition-transform duration-1000 ease-out object-cover aspect-[4/3] md:aspect-[4/5] bg-[#f7f7f5] will-change-transform"
              />
            </div>
            <div className="md:col-span-5 md:col-start-8 space-y-8">
              <h3 className="font-serif text-4xl md:text-5xl font-light tracking-tight group-hover:text-[#1a1a1a]/70 transition-colors duration-500">Cloudberry, Birch Sap, & Wood Sorrel</h3>
              <p className="text-base text-[#4a4a4a] font-light leading-relaxed">
                A celebration of the brief Nordic summer. Tart cloudberries preserved from last season's harvest, resting on a set cream of reduced birch sap, finished with freshly foraged wood sorrel.
              </p>
              <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-700 ease-in-out opacity-0 group-hover:opacity-100">
                <div className="overflow-hidden">
                  <div className="pt-4 text-xs uppercase tracking-[0.1em] text-[#1a1a1a] flex items-center gap-4">
                    <span>Foraged: Summer</span>
                    <span className="opacity-40">•</span>
                    <span>Origin: Arctic Tundra</span>
                  </div>
                  <div className="mt-4 text-xs text-[#4a4a4a] font-light">
                    Paired with: Wild chamomile tea
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-24 items-center mb-40 group cursor-pointer">
            <div className="md:col-span-5 order-2 md:order-1 space-y-8">
              <h3 className="font-serif text-4xl md:text-5xl font-light tracking-tight group-hover:text-[#1a1a1a]/70 transition-colors duration-500">Wild Duck, Blackcurrant, & Pine Needles</h3>
              <p className="text-base text-[#4a4a4a] font-light leading-relaxed">
                Dry-aged wild mallard duck, lightly smoked over pine needles. Served with a tart blackcurrant reduction and crisp salsify. A reflection of the transition from autumn to winter.
              </p>
              <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-700 ease-in-out opacity-0 group-hover:opacity-100">
                <div className="overflow-hidden">
                  <div className="pt-4 text-xs uppercase tracking-[0.1em] text-[#1a1a1a] flex items-center gap-4">
                    <span>Hunted: Late Autumn</span>
                    <span className="opacity-40">•</span>
                    <span>Origin: Coastal Marshes</span>
                  </div>
                  <div className="mt-4 text-xs text-[#4a4a4a] font-light">
                    Paired with: Aged Pinot Noir
                  </div>
                </div>
              </div>
            </div>
            <div className="md:col-span-7 order-1 md:order-2 overflow-hidden relative">
              <img 
                src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=2574&auto=format&fit=crop" 
                alt="Wild Duck dish"
                loading="lazy"
                decoding="async"
                className="w-full group-hover:scale-105 transition-transform duration-1000 ease-out object-cover aspect-[4/3] md:aspect-[3/2] bg-[#f7f7f5] will-change-transform"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-24 items-center group cursor-pointer">
            <div className="md:col-span-6 overflow-hidden relative">
              <img 
                src="https://cdn.tasteatlas.com/Images/Dishes/720c2d9305d440ec8cd8fd90b1b09405.jpg?w=1476&h=830" 
                alt="Oyster dish"
                loading="lazy"
                decoding="async"
                className="w-full group-hover:scale-105 transition-transform duration-1000 ease-out object-cover aspect-[4/3] md:aspect-[4/5] bg-[#f7f7f5] will-change-transform"
              />
            </div>
            <div className="md:col-span-5 md:col-start-8 space-y-8">
              <h3 className="font-serif text-4xl md:text-5xl font-light tracking-tight group-hover:text-[#1a1a1a]/70 transition-colors duration-500">Oyster, Green Strawberry, & Dill</h3>
              <p className="text-base text-[#4a4a4a] font-light leading-relaxed">
                A singular Limfjord oyster, shucked to order. Dressed simply with the juice of unripe green strawberries and an emulsion of sweet cold-pressed dill oil.
              </p>
              <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-700 ease-in-out opacity-0 group-hover:opacity-100">
                <div className="overflow-hidden">
                  <div className="pt-4 text-xs uppercase tracking-[0.1em] text-[#1a1a1a] flex items-center gap-4">
                    <span>Foraged: Early Summer</span>
                    <span className="opacity-40">•</span>
                    <span>Origin: Limfjord</span>
                  </div>
                  <div className="mt-4 text-xs text-[#4a4a4a] font-light">
                    Allergens: Molluscs
                  </div>
                </div>
              </div>
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
            {reservationSubmitted ? (
              <div className="pt-8 space-y-6 animate-in fade-in duration-1000">
                <p className="font-serif text-3xl font-light text-[#f7f7f5]">We look forward to welcoming you.</p>
                <p className="text-[#f7f7f5]/60 text-base font-light">Your request has been received. We will be in touch shortly to confirm.</p>
                <button onClick={() => setReservationSubmitted(false)} className="mt-8 text-xs uppercase tracking-[0.1em] border-b border-[#f7f7f5]/40 pb-1 hover:border-[#f7f7f5] transition-colors">
                  Make another request
                </button>
              </div>
            ) : (
              <form onSubmit={handleReservationSubmit} className="max-w-2xl mx-auto pt-8 space-y-12 text-left">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                  <div className="flex flex-col border-b border-[#f7f7f5]/20 focus-within:border-[#f7f7f5]/60 transition-colors md:col-span-2">
                    <label htmlFor="name" className="text-[10px] uppercase tracking-[0.2em] text-[#f7f7f5]/40 mb-2">Name</label>
                    <input type="text" id="name" required className="bg-transparent border-none outline-none py-2 text-[#f7f7f5] text-sm font-light placeholder:text-[#f7f7f5]/20" placeholder="Your full name" />
                  </div>
                  <div className="flex flex-col border-b border-[#f7f7f5]/20 focus-within:border-[#f7f7f5]/60 transition-colors">
                    <label htmlFor="date" className="text-[10px] uppercase tracking-[0.2em] text-[#f7f7f5]/40 mb-2">Date</label>
                    <input type="date" id="date" required className="bg-transparent border-none outline-none py-2 text-[#f7f7f5] text-sm font-light [&::-webkit-calendar-picker-indicator]:invert [&::-webkit-calendar-picker-indicator]:opacity-50" />
                  </div>
                  <div className="flex flex-col border-b border-[#f7f7f5]/20 focus-within:border-[#f7f7f5]/60 transition-colors">
                    <label htmlFor="time" className="text-[10px] uppercase tracking-[0.2em] text-[#f7f7f5]/40 mb-2">Time</label>
                    <input type="time" id="time" required className="bg-transparent border-none outline-none py-2 text-[#f7f7f5] text-sm font-light [&::-webkit-calendar-picker-indicator]:invert [&::-webkit-calendar-picker-indicator]:opacity-50" />
                  </div>
                  <div className="flex flex-col border-b border-[#f7f7f5]/20 focus-within:border-[#f7f7f5]/60 transition-colors md:col-span-2">
                    <label htmlFor="guests" className="text-[10px] uppercase tracking-[0.2em] text-[#f7f7f5]/40 mb-2">Number of Guests</label>
                    <select id="guests" defaultValue="" required className="bg-transparent border-none outline-none py-2 text-[#f7f7f5] text-sm font-light appearance-none cursor-pointer">
                      <option value="" disabled className="text-black">Select guest count</option>
                      {[1, 2, 3, 4, 5, 6].map(num => (
                        <option key={num} value={num} className="bg-[#181816] text-[#f7f7f5]">{num} {num === 1 ? 'Guest' : 'Guests'}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="pt-8 text-center">
                  <button type="submit" className="px-12 py-5 w-full md:w-auto border border-[#f7f7f5]/20 text-xs uppercase tracking-[0.2em] hover:bg-[#f7f7f5] hover:text-[#181816] hover:border-[#f7f7f5] transition-all duration-500 cursor-pointer">
                    Request Table
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Maps Section */}
      <section id="maps" className="py-24 bg-[#e8e8e5]">
        <div className="max-w-[90rem] mx-auto px-8 md:px-24">
          <div className="w-full text-xs uppercase tracking-[0.15em] opacity-40 pt-3 border-t border-[#1a1a1a]/10 mb-16">
            04. Location
          </div>
          <div className="w-full aspect-square md:aspect-[21/9] bg-[#d5d5d0] overflow-hidden">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2249.497576595537!2d12.593671215930932!3d55.67406608053351!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4652533e4b77fced%3A0xa23565ff9ae7fa65!2sStrandgade%2093%2C%201401%20K%C3%B8benhavn%2C%20Denmark!5e0!3m2!1sen!2sus!4v1683226359567!5m2!1sen!2sus" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-1000"
            ></iframe>
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
            <div className="mt-8 flex gap-6 text-[#1a1a1a]">
              <a href="#" className="opacity-60 hover:opacity-100 transition-opacity" aria-label="Instagram">
                <Instagram size={20} strokeWidth={1.5} />
              </a>
              <a href="#" className="opacity-60 hover:opacity-100 transition-opacity" aria-label="Facebook">
                <Facebook size={20} strokeWidth={1.5} />
              </a>
              <a href="#" className="opacity-60 hover:opacity-100 transition-opacity" aria-label="Twitter">
                <Twitter size={20} strokeWidth={1.5} />
              </a>
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
