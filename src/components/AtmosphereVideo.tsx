import { useState, useEffect } from 'react';

export default function AtmosphereVideo() {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  useEffect(() => {
    // Hide the initial YouTube loading UI with an overlay for the first 3 seconds
    const timer = setTimeout(() => {
      setIsVideoLoaded(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="py-12 pb-32 px-8 w-full flex items-center justify-center">
      <div className="relative w-full max-w-[320px] md:max-w-[400px] aspect-[9/16] overflow-hidden bg-[#e8e8e5] will-change-transform shadow-xl rounded-sm pointer-events-none">
        
        {/* Loading Overlay */}
        <div 
          className={`absolute inset-0 z-10 bg-[#f7f7f5] flex items-center justify-center transition-opacity duration-1000 ease-in-out ${
            isVideoLoaded ? 'opacity-0 pointer-events-none' : 'opacity-100'
          }`}
        >
          {/* Subtle loading pulse */}
          <div className="w-8 h-8 rounded-full border border-[#1a1a1a]/20 border-t-[#1a1a1a]/80 animate-spin"></div>
        </div>

        {/* Video wrapper scaled up to push YouTube UI out of bounds */}
        <div className="absolute top-1/2 left-1/2 w-[180%] h-[180%] -translate-x-1/2 -translate-y-1/2">
          <iframe
            src="https://www.youtube.com/embed/AdrDNhsh9Iw?autoplay=1&mute=1&loop=1&playlist=AdrDNhsh9Iw&controls=0&modestbranding=1&playsinline=1&rel=0&disablekb=1&fs=0&iv_load_policy=3"
            title="Kofi Restaurant Atmosphere"
            className="w-full h-full pointer-events-none"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
