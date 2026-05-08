import { motion } from 'motion/react';

const menuItems = [
  {
    title: "Pine, Scallop, & Smoked Butter",
    desc: "Hand-dived scallops from the icy waters, served raw and lightly dressed in a vinaigrette made from preserved green pine cones and toasted butter. Found exclusively along the northern coastlines during early spring.",
    foraged: "Spring",
    origin: "Northern Coast",
    allergens: "Dairy, Molluscs",
    imgId: "1588166524941-3bf61a9c41db",
    aspect: "lg:aspect-[3/2]",
    order: "order-2 lg:order-1",
    imgOrder: "order-1 lg:order-2",
    cols: "lg:col-span-5",
    imgCols: "lg:col-span-7",
  },
  {
    title: "Venison, Juniper, & Reindeer Moss",
    desc: "Wild fallow deer aged for 24 days, slowly roasted over birch wood. Served with a reduction of juniper berries and crispy, deep-fried lichen. A representation of the deep forest in late autumn.",
    foraged: "Autumn",
    origin: "Inner Forest",
    allergens: "Paired with: Fermented lingonberry juice",
    imgId: "1600891964092-4316c288032e",
    aspect: "lg:aspect-[4/5]",
    order: "lg:col-span-5 lg:col-start-8",
    imgOrder: "",
    cols: "",
    imgCols: "lg:col-span-6",
  },
  {
    title: "Halibut, White Asparagus, & Kelp",
    desc: "Wild-caught North Sea halibut gently poached in kelp oil, accompanied by the first white asparagus of the season and a delicate sauce of fermented buttermilk. A tribute to the turning currents.",
    foraged: "Early Summer",
    origin: "North Sea",
    allergens: "Fish, Dairy",
    imgId: "1519708227418-c8fd9a32b7a2",
    aspect: "lg:aspect-[3/2]",
    order: "order-2 lg:order-1",
    imgOrder: "order-1 lg:order-2",
    cols: "lg:col-span-5",
    imgCols: "lg:col-span-7",
  },
  {
    title: "Wild Duck, Blackcurrant, & Pine Needles",
    desc: "Dry-aged wild mallard duck, lightly smoked over pine needles. Served with a tart blackcurrant reduction and crisp salsify. A reflection of the transition from autumn to winter.",
    foraged: "Late Autumn",
    origin: "Coastal Marshes",
    allergens: "Paired with: Aged Pinot Noir",
    imgId: "1555939594-58d7cb561ad1",
    aspect: "lg:aspect-[3/2]",
    order: "order-2 lg:order-1",
    imgOrder: "order-1 lg:order-2",
    cols: "lg:col-span-5",
    imgCols: "lg:col-span-7",
  }
];

export default function Menu() {
  return (
    <section id="menu" className="py-32 bg-white selection:bg-[#1a1a1a] selection:text-white">
      <div className="max-w-[90rem] mx-auto px-8 lg:px-24">
        <div className="w-full text-xs uppercase tracking-[0.15em] opacity-40 pt-3 border-t border-[#1a1a1a]/10 mb-32">
          02. Current Season
        </div>
        
        {menuItems.map((item, idx) => (
          <motion.div 
            key={idx} 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className={`grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center ${idx !== menuItems.length - 1 ? 'mb-40' : ''} group cursor-pointer`}
          >
            
            <div className={`${item.cols} ${item.order} space-y-8`}>
              <h3 className="font-serif text-4xl lg:text-5xl font-light tracking-tight group-hover:text-[#1a1a1a]/70 transition-colors duration-500">{item.title}</h3>
              <p className="text-base text-[#4a4a4a] font-light leading-relaxed">
                {item.desc}
              </p>
              <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-700 ease-in-out opacity-0 group-hover:opacity-100">
                <div className="overflow-hidden">
                  <div className="pt-4 text-xs uppercase tracking-[0.1em] text-[#1a1a1a] flex items-center gap-4">
                    <span>{item.foraged.includes("Hunted") || item.foraged.includes("Caught") ? item.foraged : `Foraged: ${item.foraged}`}</span>
                    <span className="opacity-40">•</span>
                    <span>Origin: {item.origin}</span>
                  </div>
                  <div className="mt-4 text-xs text-[#4a4a4a] font-light">
                    {item.allergens.includes("Paired") ? item.allergens : `Allergens: ${item.allergens}`}
                  </div>
                </div>
              </div>
            </div>

            <div className={`${item.imgCols} ${item.imgOrder} overflow-hidden relative`}>
              <img 
                src={`https://images.unsplash.com/photo-${item.imgId}?q=80&w=1200&fm=webp&fit=crop`}
                srcSet={`
                  https://images.unsplash.com/photo-${item.imgId}?q=80&w=640&fm=webp&fit=crop 640w,
                  https://images.unsplash.com/photo-${item.imgId}?q=80&w=1280&fm=webp&fit=crop 1280w,
                  https://images.unsplash.com/photo-${item.imgId}?q=80&w=1920&fm=webp&fit=crop 1920w
                `}
                sizes="(max-width: 768px) 100vw, 60vw"
                alt={item.title}
                loading="lazy"
                decoding="async"
                className={`w-full group-hover:scale-105 transition-transform duration-1000 ease-out object-cover aspect-[4/3] ${item.aspect} bg-[#f7f7f5] will-change-transform`}
              />
            </div>
            
          </motion.div>
        ))}

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center mt-40 group cursor-pointer"
        >
          <div className="lg:col-span-6 overflow-hidden relative">
            <img 
              src="https://cdn.sanity.io/images/jlrwvnbf/production/798261b204492567f5d2c278b4215025b2b0d88b-3846x4808.jpg?w=1200&fm=webp&q=80" 
              srcSet="
                https://cdn.sanity.io/images/jlrwvnbf/production/798261b204492567f5d2c278b4215025b2b0d88b-3846x4808.jpg?w=640&fm=webp&q=80 640w,
                https://cdn.sanity.io/images/jlrwvnbf/production/798261b204492567f5d2c278b4215025b2b0d88b-3846x4808.jpg?w=1280&fm=webp&q=80 1280w
              "
              sizes="(max-width: 768px) 100vw, 50vw"
              alt="Cloudberry dessert"
              loading="lazy"
              decoding="async"
              className="w-full group-hover:scale-105 transition-transform duration-1000 ease-out object-cover aspect-[4/3] lg:aspect-[4/5] bg-[#f7f7f5] will-change-transform"
            />
          </div>
          <div className="lg:col-span-5 lg:col-start-8 space-y-8">
            <h3 className="font-serif text-4xl lg:text-5xl font-light tracking-tight group-hover:text-[#1a1a1a]/70 transition-colors duration-500">Cloudberry, Birch Sap, & Wood Sorrel</h3>
            <p className="text-base text-[#4a4a4a] font-light leading-relaxed">
              A celebration of the brief Nordic summer. Tart cloudberries preserved from last season's harvest, resting on a set cream of reduced birch sap, finished with freshly foraged wood sorrel.
            </p>
            <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-700 ease-in-out opacity-0 group-hover:opacity-100">
              <div className="overflow-hidden">
                <div className="pt-4 text-xs uppercase tracking-[0.1em] text-[#1a1a1a] flex items-center gap-4">
                  <span>Foraged: Summer</span>
                  <span className="opacity-40">•</span>
                  <span>Origin: Arctic Tundra</span>
                </div>
                <div className="mt-4 text-xs text-[#4a4a4a] font-light">
                  Paired with: Wild chamomile tea
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center mt-40 group cursor-pointer"
        >
          <div className="lg:col-span-6 overflow-hidden relative">
            <img 
              src="https://cdn.tasteatlas.com/Images/Dishes/720c2d9305d440ec8cd8fd90b1b09405.jpg?w=1200&h=800" 
              srcSet="
                https://cdn.tasteatlas.com/Images/Dishes/720c2d9305d440ec8cd8fd90b1b09405.jpg?w=640&h=427 640w,
                https://cdn.tasteatlas.com/Images/Dishes/720c2d9305d440ec8cd8fd90b1b09405.jpg?w=1280&h=853 1280w
              "
              sizes="(max-width: 768px) 100vw, 50vw"
              alt="Oyster dish"
              loading="lazy"
              decoding="async"
              className="w-full group-hover:scale-105 transition-transform duration-1000 ease-out object-cover aspect-[4/3] lg:aspect-[4/5] bg-[#f7f7f5] will-change-transform"
            />
          </div>
          <div className="lg:col-span-5 lg:col-start-8 space-y-8">
            <h3 className="font-serif text-4xl lg:text-5xl font-light tracking-tight group-hover:text-[#1a1a1a]/70 transition-colors duration-500">Oyster, Green Strawberry, & Dill</h3>
            <p className="text-base text-[#4a4a4a] font-light leading-relaxed">
              A singular Limfjord oyster, shucked to order. Dressed simply with the juice of unripe green strawberries and an emulsion of sweet cold-pressed dill oil.
            </p>
            <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-700 ease-in-out opacity-0 group-hover:opacity-100">
              <div className="overflow-hidden">
                <div className="pt-4 text-xs uppercase tracking-[0.1em] text-[#1a1a1a] flex items-center gap-4">
                  <span>Foraged: Early Summer</span>
                  <span className="opacity-40">•</span>
                  <span>Origin: Limfjord</span>
                </div>
                <div className="mt-4 text-xs text-[#4a4a4a] font-light">
                  Allergens: Molluscs
                </div>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
