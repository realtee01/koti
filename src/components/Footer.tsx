import { Instagram, Facebook, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="py-24 px-8 lg:px-24 bg-[#f7f7f5] text-[#1a1a1a]">
      <div className="max-w-[90rem] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 text-sm font-light">
        <div className="lg:col-span-5">
          <h4 className="font-serif text-4xl mb-6">Kofi</h4>
          <p className="opacity-60 max-w-sm leading-relaxed text-sm">
            A continuously evolving exploration of our harsh, beautiful environment.
          </p>
        </div>
        <div className="lg:col-span-3">
          <div className="text-xs uppercase tracking-[0.15em] opacity-40 mb-6">Location</div>
          <p className="opacity-80 pb-2">Strandgade 93</p>
          <p className="opacity-80 pb-2">1401 Copenhagen K</p>
          <p className="opacity-80 pb-2">Denmark</p>
          <a href="#" className="inline-block mt-4 text-xs uppercase tracking-[0.1em] border-b border-[#1a1a1a] opacity-80 hover:opacity-100 transition-opacity pb-1">Get Directions</a>
        </div>
        <div className="lg:col-span-4">
          <div className="text-xs uppercase tracking-[0.15em] opacity-40 mb-6">Contact</div>
          <p className="opacity-80 pb-2">info@kofi.dk</p>
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
      <div className="max-w-[90rem] mx-auto mt-32 pt-8 border-t border-[#1a1a1a]/10 flex flex-col lg:flex-row justify-between items-start lg:items-center text-xs opacity-40 uppercase tracking-[0.1em]">
        <p>&copy; {new Date().getFullYear()} Kofi Restaurant</p>
        <p className="mt-4 lg:mt-0">Design & Architecture</p>
      </div>
    </footer>
  );
}
