import { useState, FormEvent } from 'react';
import { Instagram, Facebook, Twitter } from 'lucide-react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setIsSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer id="contact" className="py-24 px-8 lg:px-24 bg-[#f7f7f5] text-[#1a1a1a]">
      <div className="max-w-[90rem] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 text-sm font-light">
        <div className="lg:col-span-4">
          <h4 className="font-serif text-4xl mb-6">Kofi</h4>
          <p className="opacity-60 max-w-sm leading-relaxed text-sm mb-8">
            A continuously evolving exploration of our harsh, beautiful environment.
          </p>
          <div className="flex gap-6 text-[#1a1a1a]">
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
        <div className="lg:col-span-2">
          <div className="text-xs uppercase tracking-[0.15em] opacity-40 mb-6">Location</div>
          <p className="opacity-80 pb-2">Strandgade 93</p>
          <p className="opacity-80 pb-2">1401 Copenhagen K</p>
          <p className="opacity-80 pb-2">Denmark</p>
          <a href="#" className="inline-block mt-4 text-xs uppercase tracking-[0.1em] border-b border-[#1a1a1a] opacity-80 hover:opacity-100 transition-opacity pb-1">Get Directions</a>
        </div>
        <div className="lg:col-span-2">
          <div className="text-xs uppercase tracking-[0.15em] opacity-40 mb-6">Contact</div>
          <p className="opacity-80 pb-2">info@kofi.dk</p>
          <p className="opacity-80 pb-2">+45 32 96 32 97</p>
        </div>
        <div className="lg:col-span-4">
          <div className="text-xs uppercase tracking-[0.15em] opacity-40 mb-6">Newsletter</div>
          <p className="opacity-60 text-xs mb-6 max-w-xs leading-relaxed">
            Receive updates from the kitchen, foraging insights, and reservation announcements.
          </p>
          {isSubscribed ? (
            <div className="pt-2 animate-in fade-in duration-500">
              <p className="text-xs tracking-[0.1em] text-[#1a1a1a] font-medium uppercase mb-1">Thank you.</p>
              <p className="opacity-60 text-xs">You have successfully subscribed to our newsletter.</p>
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="flex border-b border-[#1a1a1a]/20 focus-within:border-[#1a1a1a]/60 transition-colors py-1 max-w-sm">
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email address" 
                required
                className="bg-transparent border-none outline-none py-1 text-sm font-light placeholder:text-[#1a1a1a]/30 w-full"
              />
              <button 
                type="submit" 
                className="text-[10px] uppercase tracking-[0.2em] opacity-60 hover:opacity-100 transition-opacity ml-4 whitespace-nowrap cursor-pointer"
              >
                Subscribe
              </button>
            </form>
          )}
        </div>
      </div>
      <div className="max-w-[90rem] mx-auto mt-32 pt-8 border-t border-[#1a1a1a]/10 flex flex-col lg:flex-row justify-between items-start lg:items-center text-xs opacity-40 uppercase tracking-[0.1em]">
        <p>&copy; {new Date().getFullYear()} Kofi Restaurant</p>
        <p className="mt-4 lg:mt-0">Design & Architecture</p>
      </div>
    </footer>
  );
}
