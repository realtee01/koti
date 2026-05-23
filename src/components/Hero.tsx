import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const IMAGES = [
  "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=2670&fm=webp&fit=crop",
  "https://plus.unsplash.com/premium_photo-1661962305366-0c62646fd249?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1578474846511-04ba529f0b88?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % IMAGES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <header className="relative h-screen w-full select-none overflow-hidden bg-black">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0 w-full h-full"
        >
          <img 
            src={IMAGES[currentIndex]}
            alt={`Nordic restaurant atmospheric scene ${currentIndex + 1}`}
            className="object-cover w-full h-full brightness-[0.6] will-change-transform"
            fetchPriority="high"
            decoding="sync"
          />
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 bg-[#1a1a1a]/10 pointer-events-none" />

      {/* Typography Overlay */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-white text-center mix-blend-overlay pointer-events-none">
        <h1 className="font-serif text-8xl lg:text-[10rem] font-light tracking-tighter mb-8 opacity-90 drop-shadow-sm">Kofi</h1>
        <p className="font-sans text-xs lg:text-sm uppercase tracking-[0.4em] font-light opacity-90 max-w-lg px-4 drop-shadow-md">
          A study of time, nature, and the North.
        </p>
      </div>

      {/* Slideshow Progress Indicators */}
      <div className="absolute bottom-24 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {IMAGES.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to background image ${index + 1}`}
            className={`w-1.5 h-1.5 rounded-full transition-all duration-700 focus:outline-none cursor-pointer ${
              currentIndex === index ? 'bg-white w-5' : 'bg-white/30 hover:bg-white/60'
            }`}
          />
        ))}
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 text-white/70 text-xs tracking-[0.2em] uppercase mix-blend-difference animate-pulse pointer-events-none z-10">
        Scroll
      </div>
    </header>
  );
}

