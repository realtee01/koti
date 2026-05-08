export default function ChefNote() {
  return (
    <section className="py-24 lg:py-40 px-8 mx-auto w-full flex flex-col items-center justify-center">
      <blockquote className="font-serif text-3xl lg:text-5xl xl:text-6xl font-light leading-snug lg:leading-[1.2] max-w-5xl text-[#1a1a1a] tracking-tight text-balance text-center">
        &ldquo;We do not seek to reinvent nature, but rather to translate its quiet, untamed language onto the plate.&rdquo;
      </blockquote>
      <div className="mt-12 lg:mt-16 text-[10px] lg:text-xs uppercase tracking-[0.3em] opacity-40 flex items-center justify-center gap-6">
        <span className="w-8 lg:w-12 h-[1px] bg-[#1a1a1a]"></span>
        Elias Nordström, Head Chef
        <span className="w-8 lg:w-12 h-[1px] bg-[#1a1a1a]"></span>
      </div>
    </section>
  );
}
