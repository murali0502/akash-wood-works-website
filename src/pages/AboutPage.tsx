import { Handshake, Award,  Target, Wrench } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import Header from '../components/Header';

import logoImg from '../imports/Logo.jpeg';
import aboutHeroImg from '../imports/aboutHero.png';

export default function AboutPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      
     {/* Header */}

     <Header />
<section className="bg-gray-100 py-3">
  <div className="max-w-7xl mx-auto px-6">
    <p className="text-sm text-gray-600">
      Home <span className="mx-2">/</span>
      <span className="text-amber-600 font-medium">
        About Us
      </span>
    </p>
  </div>
</section>

  {/* Hero Section */}

<section className="relative min-h-[700px] overflow-hidden">

  {/* Background Image */}

  <img
    src={aboutHeroImg}
    alt="Akash Wood Works"
    className="absolute inset-0 w-full h-full object-cover"
  />

  {/* Dark Overlay */}

  <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/75 to-transparent"></div>

  {/* Content */}

  <div className="relative z-10 max-w-7xl mx-auto px-6 min-h-[700px] flex items-center">

    <div className="max-w-3xl">
      
      <img
      src={logoImg}
      alt="Akash Wood Works Logo"
      className="w-24 sm:w-28 md:w-32 mb-6 bg-white/90 rounded-lg p-2 shadow-lg"
      />

      <p className="text-amber-400 uppercase tracking-[2px] text-sm mb-4">
        ESTABLISHED INDUSTRIAL PACKAGING PARTNER
      </p>

      <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
        READ ABOUT US
      </h1>

      <p className="text-2xl md:text-3xl text-amber-400 font-semibold mb-6">
        QUALITY → PRECISION → TRUST
      </p>

      <div className="w-20 h-1 bg-amber-500 mb-8"></div>

      <div className="space-y-6 text-white text-lg leading-relaxed">

        <p>
          At Akash Wood Works, we are committed to delivering
          <span className="text-amber-400 font-semibold">
            {" "}premium wooden packaging solutions{" "}
          </span>
          that ensure protection, performance, and peace of mind.
        </p>

        <p>
          From export-ready wooden crates and pallets to customized
          industrial packaging, every product is manufactured with
          precision, using quality materials and industry best practices.
        </p>

        <p>
          Our dedication to quality, reliability, and customer satisfaction
          has made us a trusted partner for industries across manufacturing,
          logistics, engineering, pharmaceuticals, exports, and heavy machinery.
        </p>

      </div>

    </div>

  </div>

</section>

      {/* Our Strengths Section */}

      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl text-amber-600 mb-8 sm:mb-12 text-center">Our Strengths</h2>
          
          <div className="max-w-4xl mx-auto text-center mb-12">
            
            <p className="text-gray-700 text-base sm:text-lg lg:text-xl leading-relaxed">
              At Akash Wood Works, we combine premium materials, skilled craftsmanship,
              and precision manufacturing to deliver durable industrial packaging
              solutions trusted by businesses across multiple sectors.
            </p>

          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            

  {/* Card 1 */}

  <div className="bg-white p-8 rounded-xl shadow-md border-t-4 border-amber-600 text-center hover:-translate-y-2 hover:shadow-xl transition-all duration-300">

    <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-5">
      <Wrench className="w-8 h-8 text-amber-600" />
    </div>

    <h3 className="text-xl font-semibold text-gray-900 mb-3">
      Quality Craftsmanship
    </h3>

    <p className="text-gray-600 text-sm leading-relaxed">
      Premium materials and expert manufacturing for dependable industrial packaging.
    </p>

  </div>

  {/* Card 2 */}

  <div className="bg-white p-8 rounded-xl shadow-md border-t-4 border-amber-600 text-center hover:-translate-y-2 hover:shadow-xl transition-all duration-300">

    <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-5">
      <Award className="w-8 h-8 text-amber-600" />
    </div>

    <h3 className="text-xl font-semibold text-gray-900 mb-3">
      Precision Engineering
    </h3>

    <p className="text-gray-600 text-sm leading-relaxed">
      Industry-standard processes ensuring accuracy, durability and performance.
    </p>

  </div>

  {/* Card 3 */}

  <div className="bg-white p-8 rounded-xl shadow-md border-t-4 border-amber-600 text-center hover:-translate-y-2 hover:shadow-xl transition-all duration-300">

    <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-5">
      <Handshake className="w-8 h-8 text-amber-600" />
    </div>

    <h3 className="text-xl font-semibold text-gray-900 mb-3">
      Customer Focus
    </h3>

    <p className="text-gray-600 text-sm leading-relaxed">
      Tailored solutions, responsive service and timely project delivery.
    </p>

  </div>

  {/* Card 4 */}

  <div className="bg-white p-8 rounded-xl shadow-md border-t-4 border-amber-600 text-center hover:-translate-y-2 hover:shadow-xl transition-all duration-300">

    <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-5">
      <Target className="w-8 h-8 text-amber-600" />
    </div>

    <h3 className="text-xl font-semibold text-gray-900 mb-3">
      Trusted Partnership
    </h3>

    <p className="text-gray-600 text-sm leading-relaxed">
      Long-term relationships built on trust, quality and consistency.
    </p>

  </div>

</div> 

</div> 

</section>

{/* CTA Section */}

<section className="py-16 sm:py-20 bg-gradient-to-r from-[#2d1f13] via-[#4a2f1d] to-[#2d1f13] text-white">

  <div className="max-w-5xl mx-auto px-6 text-center">

    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
      Ready to Work With Us?
    </h2>

    <div className="w-20 h-1 bg-amber-500 mx-auto mb-8"></div>

    <p className="text-lg sm:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed mb-10">
      Whether you need export-grade wooden crates, heavy-duty pallets,
      plywood boxes, or customized industrial packaging solutions,
      our team is ready to help you find the right packaging for your business.
    </p>

    <Link
      to="/#contact"
      className="inline-block bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 no-underline"
    >
      Get In Touch
    </Link>

  </div>

</section>

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
