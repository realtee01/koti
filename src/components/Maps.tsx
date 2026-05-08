export default function Maps() {
  return (
    <section id="maps" className="py-24 bg-[#e8e8e5]">
      <div className="max-w-[90rem] mx-auto px-8 lg:px-24">
        <div className="w-full text-xs uppercase tracking-[0.15em] opacity-40 pt-3 border-t border-[#1a1a1a]/10 mb-16">
          04. Location
        </div>
        <div className="w-full aspect-square lg:aspect-[21/9] bg-[#d5d5d0] overflow-hidden">
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
  );
}
