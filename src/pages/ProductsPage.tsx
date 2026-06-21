//import { Link } from 'react-router-dom';
import { useEffect } from 'react';

import plywoodBoxImg from '../imports/Plywood Box.jpeg';
import batteryBoxImg from '../imports/Battery Box.jpeg';
import woodenPalletImg from '../imports/2_Wooden Pallet.jpeg';
import fourWayPalletImg from '../imports/4_Wooden Pallet.png';
import sawWoodPowderImg from '../imports/Saw Wood Powder.jpeg';
import pinewoodReaperImg from '../imports/Pinewood Reapers.png';

import logoImg from '../imports/Logo.jpeg';
import productsHeroImg from '../imports/productsHero.png';

import Header from '../components/Header';

export default function ProductsPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  const products = [
    {
      id: 1,
      name: 'PLYWOOD BOX',
      tagline: 'EXPORT-READY PACKAGING • HIGH LOAD CAPACITY • CUSTOM MANUFACTURING',
      image: plywoodBoxImg,
      content: [
        'Our industrial plywood boxes are built to provide maximum protection for machinery, automotive parts, engineering equipment, and export consignments during storage and transportation.',
        'Manufactured using premium-grade plywood and reinforced pinewood framing, these boxes deliver exceptional durability, structural strength, and secure handling for heavy industrial applications.',
        'Designed for forklift movement, stacking efficiency, and long-distance shipment safety, our plywood boxes are trusted by industries requiring reliable and damage-resistant packaging solutions.',
        'Custom sizes, load capacities, and reinforced designs are available based on client specifications and export requirements.'
      ]
    },
    {
      id: 2,
      name: 'BATTERY PLYWOOD BOX',
      tagline: 'HEAVY-DUTY PROTECTION • EXPORT QUALITY • SECURE INDUSTRIAL STORAGE',
      image: batteryBoxImg,
      content: [
        'Specially designed for battery transportation and industrial storage applications, our battery plywood boxes offer high structural strength, impact resistance, and safe product handling.',
        'Constructed using export-grade plywood panels with reinforced framing and durable base support, these boxes are engineered to withstand heavy loads and demanding logistics operations.',
        'The precision-fitted removable lid design ensures secure closure, efficient handling, and easy accessibility during packaging and shipment processes.',
        'Ideal for industrial batteries, engineering components, machinery parts, and heavy-duty export packaging applications.'
      ]
    },
    {
      id: 3,
      name: 'PALLET: TWO-WAY PALLET',
      tagline: 'HEAVY-DUTY WOODEN PALLET • RELIABLE LOAD SUPPORT • WAREHOUSE READY',
      image: woodenPalletImg,
      content: [
        'Our two-way wooden pallets are manufactured for efficient warehouse operations, industrial storage, and secure goods transportation across logistics and export environments.',
        'Built using premium-quality pinewood and kiln-dried timber, these pallets provide excellent durability, stable load distribution, and dependable performance for heavy industrial applications.',
        'The strong deck-board construction and reinforced support structure ensure safe forklift handling, stacking stability, and reduced product movement during transit.',
        'Suitable for warehouses, container loading, industrial packaging, and long-distance transportation requirements.'
      ]
    },
    {
      id: 4,
      name: 'PALLET: FOUR-WAY PALLET',
      tagline: 'ADVANCED MATERIAL HANDLING • HIGH LOAD STABILITY • INDUSTRIAL PERFORMANCE',
      image: fourWayPalletImg,
      content: [
        'Designed for modern warehouse handling and industrial logistics operations, our four-way pallets allow smooth forklift access from all sides for faster and more efficient material movement.',
        'Manufactured using high-strength pinewood and precision-engineered block construction, these pallets offer superior load-bearing performance, structural durability, and long-term reliability.',
        'The heavy-duty design supports safe stacking, container transportation, and secure placement of industrial goods while minimizing transit-related damage.',
        'Available in multiple sizes and customized configurations to meet industry-specific storage and shipping requirements.'
      ]
    },
    {
      id: 5,
      name: 'PINEWOOD REAPER',
      tagline: 'HIGH-STRENGTH PINEWOOD • PRECISION FINISH • INDUSTRIAL GRADE',
      image: pinewoodReaperImg,
      content: [
        'Engineered for strength, durability, and industrial performance, our premium pinewood reapers are manufactured using high-quality seasoned pinewood for reliable structural support and long-lasting usage.',
        'Designed for crate manufacturing, pallet production, industrial framing, and export packaging applications, these reapers provide excellent load-bearing capacity and dimensional stability under demanding conditions.',
        'Each piece is precision-cut and quality-checked to ensure smooth finishing, uniform sizing, and superior performance in heavy-duty industrial environments.',
        'Available in customized sizes and thicknesses to match specific packaging and manufacturing requirements.'
      ]
    },
    {
      id: 6,
      name: 'SAW WOOD POWDER',
      tagline: 'FINE GRADE SAW DUST • MULTI-PURPOSE APPLICATIONS • ECO-FRIENDLY',
      image: sawWoodPowderImg,
      content: [
        'Our premium-quality Saw Wood Powder is manufactured from carefully processed natural wood, ensuring uniform particle size, low moisture content, and reliable performance across various industrial applications.',

    'Widely used in biomass fuel production, particle board manufacturing, incense stick production, organic composting, and agricultural applications, our wood powder offers excellent versatility and consistent quality.',

    'Processed under strict quality standards, the material is free from harmful contaminants and provides superior handling characteristics for industrial processing and large-scale manufacturing operations.',

    'Available in customized quantities and packaging options to meet the specific requirements of manufacturers, distributors, and industrial customers.'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">

{/* Header */}

<Header/>
<section className="bg-gray-100 py-3">
  <div className="max-w-7xl mx-auto px-6">
    <p className="text-sm text-gray-600">
      Home
      <span className="mx-2">/</span>
      <span className="text-amber-600 font-medium">
        Products
      </span>
    </p>
  </div>
</section>

{/* Hero Section */}

<section className="relative min-h-[500px] md:min-h-[650px] overflow-hidden">

  <img
    src={productsHeroImg}
    alt="Wooden Packaging Solutions"
    className="absolute inset-0 w-full h-full object-cover"
  />

  <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-transparent"></div>

  <div className="relative z-10 max-w-7xl mx-auto px-6 min-h-[500px] md:min-h-[650px] flex items-center">

    <div className="max-w-3xl">

      <img
        src={logoImg}
        alt="Akash Wood Works"
        className="w-24 sm:w-28 md:w-32 mb-6 bg-white/90 rounded-lg p-2 shadow-lg"
      />

      <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-4">
        OUR PRODUCTS
      </h1>

      <p className="text-xl md:text-3xl text-amber-400 font-semibold mb-6">
        Premium Wooden Packaging Solutions
      </p>

      <div className="w-20 h-1 bg-amber-500 mb-8"></div>

      <p className="text-white text-base md:text-lg leading-relaxed">
        Engineered for industrial strength, reliability,
        safe transportation, and export-grade performance.
      </p>

    </div>

  </div>

</section>

{/* Products Section */}

      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="space-y-16 sm:space-y-20 lg:space-y-24">
            {products.map((product, index) => (
              <div
                key={product.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Product Image */}

                <div className={`${index % 2 === 1 ? 'lg:order-2' : 'lg:order-1'}`}>
                  <div className="bg-gray-50 rounded-xl overflow-hidden border border-gray-200 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-500">
                    
                    <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 sm:h-80 lg:h-96 object-contain p-4 sm:p-6 hover:scale-110 transition-transform duration-500"/>
                  </div>
                </div>

                {/* Product Details */}

                <div className={`${index % 2 === 1 ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div className="space-y-4 sm:space-y-6">
                    <div>

                      <p className="text-amber-600 text-5xl font-bold opacity-20 mb-2">
                        {String(product.id).padStart(2, '0')}
                      </p>
                      
                      <h2 className="text-2xl sm:text-3xl lg:text-4xl text-gray-900 mb-3 sm:mb-4 font-medium">
                        {product.name}
                      </h2>
                      
                      <p className="text-amber-600 text-xs sm:text-sm font-medium uppercase tracking-wide">
                        {product.tagline}
                      </p>
                      
                      <div className="flex flex-wrap gap-2 mt-4">
                        
                        {product.name === 'SAW WOOD POWDER' ? (
                          <>
                          <span className="bg-amber-100 text-amber-700 px-3 py-1 rounded-full text-xs"> 
                            Industrial Grade
                          </span>

                          <span className="bg-amber-100 text-amber-700 px-3 py-1 rounded-full text-xs">
                            Biomass Fuel
                          </span>

                          <span className="bg-amber-100 text-amber-700 px-3 py-1 rounded-full text-xs">
                            Premium Quality
                          </span>
                          </>
                        ) : (
                        <>
                          <span className="bg-amber-100 text-amber-700 px-3 py-1 rounded-full text-xs">
                            Export Ready
                          </span>

                          <span className="bg-amber-100 text-amber-700 px-3 py-1 rounded-full text-xs">
                            Custom Sizes
                          </span>

                          <span className="bg-amber-100 text-amber-700 px-3 py-1 rounded-full text-xs">
                            Heavy Duty
                          </span>
                        </>
                        )}
                      </div>
                    </div>

                    <div className="h-px bg-gray-200"></div>

                    <div className="space-y-3 sm:space-y-4">
                      {product.content.map((paragraph, idx) => (
                        <p
                          key={idx}
                          className="text-gray-700 text-sm sm:text-base leading-relaxed text-justify"
                        >
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}

<section className="py-16 sm:py-20 bg-gradient-to-r from-[#2d1f13] via-[#4a2f1d] to-[#2d1f13] text-white">

  <div className="max-w-5xl mx-auto px-6 text-center">

    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
      Need Custom Wooden Packaging?
    </h2>

    <div className="w-20 h-1 bg-amber-500 mx-auto mb-8"></div>

    <p className="text-lg sm:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed mb-10">
      Whether you need export-grade plywood boxes,
      heavy-duty pallets, battery boxes or custom industrial
      packaging, our team can manufacture according to your exact requirements.
    </p>

    <a
      href="/#contact"
      className="inline-block bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 no-underline"
    >
      Get In Touch
    </a>

  </div>

</section>

      {/* Footer */}
<footer className="bg-[#1a120c] text-gray-400 py-8 text-center">

  <div className="max-w-4xl mx-auto px-4">

    <h3 className="text-white text-xl mb-2">
      AKASH WOOD WORKS
    </h3>

    <p className="mb-2">
      Manufacturer of Wooden Crates, Pallets,
      Plywood Boxes & Industrial Packaging Solutions
    </p>

    <p className="mb-4">
      Hosur, Tamil Nadu
    </p>

    <p className="text-sm">
      © 2026 Akash Wood Works. All rights reserved.
    </p>

  </div>

</footer>
    </div>
  );
}
