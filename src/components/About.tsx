export default function About() {
  return (
    <section id="about" className="py-32 lg:py-48 px-8 lg:px-24 mx-auto flex flex-col lg:flex-row gap-16 lg:gap-32 items-start max-w-[90rem]">
      <div className="w-full lg:w-1/4 text-xs uppercase tracking-[0.15em] opacity-40 pt-3 border-t border-[#1a1a1a]/10">
        01. The Philosophy
      </div>
      <div className="w-full lg:w-3/4">
        <h2 className="font-serif text-4xl lg:text-6xl leading-[1.1] font-light mb-16 text-balance tracking-tight">
          We look to the forest, the ocean, and the soil to understand our place in the world.
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 text-[#4a4a4a] text-base leading-relaxed font-light">
          <p>
            At Kofi, we believe that dining is an extension of the landscape. Every ingredient is sourced within a fifty-mile radius, dictated entirely by the micro-seasons. We do not command nature; we listen to it.
          </p>
          <p>
            Our kitchen operates on the principles of preservation, fermentation, and absolute respect for the raw materials provided by our local foragers, farmers, and fishermen. 
          </p>
        </div>
      </div>
    </section>
  );
}
