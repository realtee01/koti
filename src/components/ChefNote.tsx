export default function ChefNote() {
  return (
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
  );
}
