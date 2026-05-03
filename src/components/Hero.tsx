export default function Hero() {
  return (
    <header className="relative h-screen w-full select-none">
      <img 
        src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=2670&fm=webp&fit=crop" 
        srcSet="
          https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=640&fm=webp&fit=crop 640w,
          https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1280&fm=webp&fit=crop 1280w,
          https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1920&fm=webp&fit=crop 1920w,
          https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=2670&fm=webp&fit=crop 2670w
        "
        sizes="100vw"
        alt="Nordic restaurant atmospheric"
        fetchPriority="high"
        decoding="sync"
        className="object-cover w-full h-full brightness-[0.7] focus:outline-none will-change-transform"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center mix-blend-overlay">
        <h1 className="font-serif text-8xl md:text-[10rem] font-light tracking-tighter mb-8 opacity-90 drop-shadow-sm">Kofi</h1>
        <p className="font-sans text-xs md:text-sm uppercase tracking-[0.4em] font-light opacity-90 max-w-lg px-4 drop-shadow-md">
          A study of time, nature, and the North.
        </p>
      </div>
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 text-white/70 text-xs tracking-[0.2em] uppercase mix-blend-difference animate-pulse">
        Scroll
      </div>
    </header>
  );
}
