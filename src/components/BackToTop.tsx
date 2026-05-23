import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUp } from 'lucide-react';

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          // Show button when scrolled past the first viewport (Hero height)
          const scrolledPastHero = window.scrollY > window.innerHeight - 100;
          setIsVisible(scrolledPastHero);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          id="back-to-top"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-40 p-4 rounded-full bg-[#f7f7f5]/90 border border-[#1a1a1a]/10 text-[#1a1a1a] shadow-[0_4px_24px_rgba(0,0,0,0.06)] hover:bg-[#1a1a1a] hover:text-white hover:border-[#1a1a1a] transition-all duration-300 backdrop-blur-md group focus:outline-none"
          aria-label="Back to top"
        >
          <ArrowUp 
            size={16} 
            strokeWidth={1.5} 
            className="group-hover:-translate-y-0.5 transition-transform duration-300 ease-out" 
          />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
