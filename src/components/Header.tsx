import { Link } from 'react-router-dom';
import logoImg from '../imports/Logo.jpeg';

export default function Header() {
  return (
    <header className="bg-[#2d1f13] text-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">

        <Link to="/" className="flex items-center gap-4 no-underline">
          <img
            src={logoImg}
            alt="Logo"
            className="w-14 h-14 bg-white rounded-md p-1"
          />

          <div>
            <h1 className="text-lg font-semibold text-white">
              AKASH
            </h1>

            <p className="text-amber-500 text-sm">
              WOOD WORKS
            </p>
          </div>
        </Link>

        <nav className="hidden md:flex gap-8">
          <Link to="/">HOME</Link>
          <Link to="/about">ABOUT US</Link>
          <Link to="/products">PRODUCTS</Link>
          <Link to="/#contact">CONTACT US</Link>
        </nav>

      </div>
    </header>
  );
}