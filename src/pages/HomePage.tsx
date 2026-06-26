import { Phone, CheckCircle, Clock, Settings, Globe, X, Package, Menu } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { MapPin } from 'lucide-react';

import emailjs from '@emailjs/browser';

import cumiLogo from '../imports/CUMI.jpeg';
import vstLogo from '../imports/VST.jpeg';

import plywoodBoxImg from '../imports/Plywood Box.jpeg';
import batteryBoxImg from '../imports/Battery Box.jpeg';
import woodenPalletImg from '../imports/2_Wooden Pallet.jpeg';
import pinewoodReaperImg from '../imports/Pinewood Reaper.jpeg';

import heroWarehouseImg from '../imports/Background.png';
import logoImg from '../imports/Logo.jpeg';

export default function HomePage() {

  const [showSuccess, setShowSuccess] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const [loading, setLoading] = useState(false);
  const [lastSubmitted, setLastSubmitted] = useState(0);
  
  const [formData, setFormData] = useState({
    phone: '',
    email: '',
    message: '',
    website: '',
  });

  useEffect(() => {

    if (window.location.hash === '#contact') {
      document
      .getElementById('contact')
      ?.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  
  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Honeypot spam check
    if (formData.website) return;

    // Phone validation
    if (!/^[6-9]\d{9}$/.test(formData.phone)) {
      alert('Please enter a valid 10-digit mobile number');
      return;
    }

    // Email validation
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      alert('Please enter a valid email address');
      return;
    }

    // Message validation
    if (formData.message.trim().length < 10) {
      alert('Message should contain at least 10 characters');
      return;
    }

    // 60 second cooldown
    const now = Date.now();

    if (now - lastSubmitted < 60000) {
      alert('Please wait 1 minute before sending another enquiry.');
      return;
    }

    setLastSubmitted(now);

    setLoading(true);  
    try {
      await emailjs.send(
        'service_u5hyz6a',
        'template_udcpqpk',
        {
          phone: formData.phone,
          email: formData.email,
          message: formData.message,
          website: formData.website,
        },
        'dCdjl9qhrBwRj-2gP'
      );
      
      setShowSuccess(true);

      setFormData({
        phone: '',
        email: '',
        message: '',
        website: '',
      });

      setTimeout(() => {
        setShowSuccess(false);
      },  5000);
    
    } 
    
    catch (error) {
      console.error('EMAILJS ERROR:', error);
      alert('Failed to send enquiry. Please try again.');
    }

  setLoading(false);
};

  return (
    <div className="min-h-screen bg-white">

      {/* Header */}

      <header className="bg-[#2d1f13] text-white sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">

          <div className="flex items-center gap-4">
            <button
            className="hover:scale-105 transition-transform duration-300">
              <img
              src={logoImg}
              alt="Akash Wood Works Logo"
              data-aos ="zoom-in"
              data-aos-duration="1200"
              className="w-14 h-14 md:w-16 md:h-16 object-contain bg-white rounded-md p-1"/>
            </button>
            <div>
              <h1 className="text-lg md:text-xl font-semibold text-white uppercase tracking-wide leading-none">
                AKASH
              </h1>
            <p className="text-xs md:text-sm text-amber-500 tracking-wider mt-1">
              WOOD WORKS
            </p>
          </div>
        </div>
        <nav className="hidden md:flex gap-8">
          <a href="#home" className="hover:text-amber-500 transition-colors">
            HOME
          </a>

          <a href="#about" className="hover:text-amber-500 transition-colors">
            ABOUT US
          </a>

          <a href="#products" className="hover:text-amber-500 transition-colors">
            PRODUCTS
          </a>

          <a href="#contact" className="hover:text-amber-500 transition-colors">
            CONTACT US
          </a>
        </nav>
        <button
        className="md:hidden"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? (
            <X size={28} />
          ) : (
          <Menu size={28} />
          )}
          </button>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-[#2d1f13] border-t border-gray-700">
          <div className="flex flex-col px-6 py-4 space-y-4">
            <a
            href="#home"
            onClick={() => setMobileMenuOpen(false)}
            className="hover:text-amber-500">HOME</a>
            
            <a
            href="#about"
            onClick={() => setMobileMenuOpen(false)}
            className="hover:text-amber-500"> ABOUT US </a>
            
            <a
            href="#products"
            onClick={() => setMobileMenuOpen(false)}
            className="hover:text-amber-500"> PRODUCTS </a>
            
            <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="hover:text-amber-500"> CONTACT US </a>
          </div>
        </div>
      )}
    </header>

      {/* Hero Section */}

      <section
        id="home"
        className="relative min-h-[600px] bg-[#2d1f13] overflow-hidden scroll-mt-24"
      >
        <img
          src={heroWarehouseImg}
          alt="Wooden Packaging Solutions"
          className="absolute inset-0 w-full h-full object-cover opacity-70"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent"></div>

        <div className="relative max-w-7xl mx-auto px-6 min-h-[600px] flex flex-col justify-center" data-aos="fade-right">
          
          <p className="text-gray-300 uppercase tracking-widest text-sm mb-4">
            MANUFACTURERS OF
          </p>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-white leading-tight max-w-3xl mb-6">
            WOODEN CRATES,
            <br />
            PALLETS,
            <br />
            PLYWOOD BOXES &
            <br /> 
            <span className="text-amber-500">
              INDUSTRIAL PACKAGING SOLUTIONS
              </span>
              </h1>
            <p className="text-gray-200 text-lg max-w-2xl mb-8">
              Delivering high-quality wooden pallets, plywood boxes, 
              wooden crates, and industrial packaging solutions for 
              manufacturing, logistics, engineering, and export 
              industries across India.
            </p>

          {/* Feature Cards */}
          <div className="flex flex-col md:flex-row gap-6 mb-4">

            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full border-2 border-amber-600 flex items-center justify-center ">
                <CheckCircle className="text-amber-500" />
              </div>

              <div>
                <p className="text-white">
                  PREMIUM QUALITY
                </p>

                <p className="text-gray-400 text-sm">
                  Best materials & craftsmanship
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full border-2 border-amber-600 flex items-center justify-center">
                <Clock className="text-amber-500" />
              </div>

              <div>
                <p className="text-white">
                  ON-TIME DELIVERY
                </p>

                <p className="text-gray-400 text-sm">
                  Committed to timely delivery
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full border-2 border-amber-600 flex items-center justify-center">
                <Settings className="text-amber-500" />
              </div>

              <div>
                <p className="text-white">
                  CUSTOM SOLUTIONS
                </p>

                <p className="text-gray-400 text-sm">
                  Tailored packaging to your needs
                </p>
              </div>
            </div>

          </div>
          <div className = "mt-2">
          <a
            href="#products"
            className="inline-flex w-fit items-center gap-2 bg-amber-700 hover:bg-amber-700 px-8 py-3 rounded text-white transition-colors"
          >
            EXPLORE PRODUCTS →
          </a>
          </div>
        </div>

        {/* ISO Badge */}
        
        <div className="absolute bottom-6 right-6 bg-white px-3 py-2 rounded-md shadow-md">
          <div className="text-center">
            <p className="text-lg font-semibold text-amber-600">ISO</p>
            <p className="text-[10px] text-gray-600">
              9001:2015
            </p>
            <p className="text-[10px] text-gray-600">
              CERTIFIED
            </p>
          </div>
        </div>
      </section>

   {/* Products Section */}

      <section id="products" className="py-20 bg-white scroll-mt-24" data-aos="fade-up">
        <div className="max-w-7xl mx-auto px-6">

          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-8">
            <h2 className="text-3xl md:text-4xl text-gray-900">
              OUR PRODUCTS
            </h2>

            <Link
              to="/products"
              className="text-amber-600 hover:text-amber-700 font-medium"
            >
              VIEW ALL PRODUCTS →
            </Link>
          </div>

          <p className="text-gray-600 max-w-2xl mb-4">
            We offer a wide range of wooden packaging products designed for
            safe handling, storage & transportation.
          </p>

          <p className="text-amber-600 italic mb-12">
            Custom Sizes, Load Capacity & Design Options Available Upon Request
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            {[
              {
                name: 'PLYWOOD BOX',
                desc: 'Strong & durable boxes for heavy-duty packaging',
                img: plywoodBoxImg,
              },
              {
                name: 'BATTERY WOODEN BOX',
                desc: 'Specially designed for safe battery packaging',
                img: batteryBoxImg,
              },
              {
                name: 'WOODEN PALLET',
                desc: 'Sturdy pallets for efficient storage and handling',
                img: woodenPalletImg,
              },
              {
                name: 'PINEWOOD',
                desc: 'High-quality preserved for different uses',
                img: pinewoodReaperImg,
              },
            ].map((product, index) => (
              <div key={index} data-aos="zoom-in">
                <div className="bg-gray-50 rounded-lg border border-gray-200 overflow-hidden shadow-sm mb-4 h-72 flex items-center justify-center">
                  <img
                    src={product.img}
                    alt={product.name}
                    className="w-full h-full object-contain p-4"
                  />
                </div>

                <h3 className="text-xl text-gray-900 mb-2">
                  {product.name}
                </h3>

                <p className="text-gray-600">
                  {product.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}

      <section id="about" className="py-20 bg-gray-50 scroll-mt-24" data-aos="fade-up">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-5xl text-gray-900 mb-8">
            ABOUT US
          </h2>

          <p className="text-xl text-gray-700 leading-relaxed max-w-6xl mb-6">
            Akash Wood Works is a trusted manufacturer of premium wooden
            crates, pallets, plywood boxes, and industrial packaging solutions
            designed for safe storage, handling, and export transportation.
          </p>

          <Link
            to="/about"
            className="text-amber-600 hover:text-amber-700"
          >
            Read About Us →
          </Link>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">

            <div className="bg-white p-6 rounded-lg shadow-sm" data-aos="zoom-in">
              <div className="flex items-center gap-3 mb-3">
                <Clock className="text-amber-600" />
                <span className="text-4xl">10+</span>
              </div>
              <p className="text-gray-600">
                YEARS OF EXPERIENCE
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm" data-aos="zoom-in">
              <div className="flex items-center gap-3 mb-3">
                <CheckCircle className="text-amber-600" />
                <span className="text-4xl">50+</span>
              </div>
              <p className="text-gray-600">
                INDUSTRIAL CLIENTS
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm" data-aos="zoom-in">
              <div className="flex items-center gap-3 mb-3">
                <Package className="text-amber-600" />
                <span className="text-4xl">1000+</span>
              </div>
              <p className="text-gray-600">
                SUCCESSFUL DELIVERIES
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm" data-aos="zoom-in">
              <div className="flex items-center gap-3 mb-3">
                <Settings className="text-amber-600" />
                <span className="text-4xl">100%</span>
              </div>
              <p className="text-gray-600">
                QUALITY ASSURANCE
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">

          <h2 className="text-5xl text-amber-600 mb-8">
            CORE VALUES
          </h2>

          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 text-3xl text-amber-600 mb-8">
            
            <div className="flex items-center gap-2">
              <CheckCircle className="w-6 h-6 text-amber-600" />
              <span>QUALITY</span>
            </div>
            
            <div className="flex items-center gap-2">
              <CheckCircle className="w-6 h-6 text-amber-600" />
              <span>RELIABILITY</span>
            </div>
            
            <div className="flex items-center gap-2">
              <CheckCircle className="w-6 h-6 text-amber-600" />
              <span>PRECISION</span>
              </div>
            </div>

          <p className="uppercase tracking-widest text-gray-500">
            Built into every product we manufacture.
          </p>

        </div>
      </section>

    {/* Clients Section */}

      <section 
      className="py-16 bg-gray-50" data-aos="fade-up">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl text-center text-gray-900 mb-10"> OUR INDUSTRIAL CLIENTS </h2>
          <div className="flex flex-wrap justify-center items-center gap-10">
            <div className="w-40 h-20 bg-white rounded shadow-sm flex items-center justify-center p-4" data-aos ="zoom-in" data-aos-delay="100">
              <img
              src={cumiLogo}
              alt="CUMI"
              className="max-w-full max-h-full object-contain transition-transform duration-500 hover:scale-110"/>
            </div>
          <div className="w-40 h-20 bg-white rounded shadow-sm flex items-center justify-center p-4" data-aos="zoom-in" data-aos-delay="300">
            <img
            src={vstLogo}
            alt="VST Tillers Tractors"
            className="max-w-full max-h-full object-contain transition-transform duration-500 hover:scale-110"/>
          </div>
        </div>
        </div>
      </section>

      {/* Contact Section */}

      <section
        id="contact"
        className="py-20 bg-[#2d1f13] text-white scroll-mt-24"
        data-aos="fade-up"
      >
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-12">

            {/* Contact Info */}
            <div>

              <h2 className="text-4xl mb-4">
                GET IN TOUCH
              </h2>

              <p className="text-amber-500 uppercase tracking-wider text-sm mb-8">
                Reliable B2B Manufacturing Partner for Industrial Packaging Solutions
              </p>

              <div className="space-y-6">
                
                <div className="flex gap-4">
                  <MapPin className="text-amber-500 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-gray-300">
                      Address
                    </p>
                    
                    <a
                    href="https://maps.app.goo.gl/gntGGctqVN64f4UAA"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-amber-500 transition-colors no-underline">
                      
                      <p>
                        3/825-c, Arasanatti, Bharathi Nagar, extension 
                        <br />
                        Hosur, Tamil Nadu 635126
                      </p>
                        
                        <p className="text-amber-500 mt-2 text-sm font-medium">
                          View Location →
                        </p>
                      </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Package className="text-amber-500" />
                  <div>
                    <p className="text-gray-300"> GSTIN </p>
                    <p className="text-white"> 33BGGPM4791M1ZW </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Phone className="text-amber-500" />
                  <div>
                    <a
                    href="tel:+919944070300"
                    className="block hover:text-amber-500 transition-colors"> +91 99440 70300 </a>
                    
                    <a
                    href="tel:+919944352203"
                    className="block hover:text-amber-500 transition-colors"> +91 99443 52203 </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Globe className="text-amber-500" />
                  <a 
                  href="mailto:akashwoodworks2010@gmail.com"
                  className="hover:text-amber-500 transition-colors"
                  >
                    akashwoodworks2010@gmail.com
                  </a>
                </div>

                <div className="flex gap-4">
                  <Clock className="text-amber-500" />
                  <div>
                    <p>Monday - Saturday</p>
                    <p className="text-gray-300">
                      9:00 AM - 6:00 PM
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* Enquiry Form */}
            <div className="bg-[#1a120c] p-8 rounded-lg">

              <h3 className="text-2xl mb-6">
                ENQUIRE NOW
              </h3>

              {showSuccess && (
                <div className="bg-green-600 border border-green-500 text-white rounded-lg p-4 mb-4">
                  <h4 className="font-semibold text-lg mb-2">
                    ✓ Enquiry Submitted Successfully
                  </h4>
                <p className="text-sm">
                  Thank you for contacting Akash Wood Works.
                  Our team will contact you shortly.
                </p>
                
                <p className="text-sm mt-2"> For urgent enquiries: </p>
                <p className="font-medium"> +91 99440 70300 </p>
                <p className="font-medium"> +91 99443 52203 </p>
              </div>
            )}
            
            <form
            className="space-y-4"
            onSubmit={sendEmail}
            >

              <input
              type="text"
              name="website"
              value={formData.website}
              onChange={handleChange}
              autoComplete="off"
              className="hidden"/>
              
              <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone Number"
              required
              className="w-full bg-transparent border border-gray-600 rounded px-4 py-3"/>

              <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address"
              required
              className="w-full bg-transparent border border-gray-600 rounded px-4 py-3"/>

              <textarea
              rows={5}
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              required
              className="w-full bg-transparent border border-gray-600 rounded px-4 py-3 resize-none"/>
              
              <button
              type="submit"
              disabled={loading}
              className="w-full bg-amber-600 hover:bg-amber-700 py-3 rounded transition-colors disabled:opacity-50">
                
                {loading ? 'SENDING...' : 'SEND ENQUIRY'}
                
              </button>

              </form>
            </div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1a120c] text-gray-400 py-8 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h3 className="text-white text-xl mb-2"> AKASH WOOD WORKS </h3>
          
          <p className="mb-2">
            Manufacturer of Wooden Crates, Pallets,
            Plywood Boxes & Industrial Packaging Solutions
          </p>
          
          <p className="mb-4"> Hosur, Tamil Nadu </p>
          <p className="text-sm"> © 2026 Akash Wood Works. All rights reserved. </p>
        </div>
      </footer>
    </div>
  );
}