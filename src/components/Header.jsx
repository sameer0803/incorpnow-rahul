import { Link } from 'react-router-dom';
import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header style={{ backgroundColor: "#003B73" }} className="text-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="text-2xl font-bold text-white">
            IncorpNow
          </Link>
        </div>

        <div className="hidden md:flex space-x-8">
          <Link to="/" className="text-white hover:text-green-200">Home</Link>
          <Link to="/services" className="text-white hover:text-green-200">Services</Link>
          <Link to="/about" className="text-white hover:text-green-200">About Us</Link>
          <Link to="/blog" className="text-white hover:text-green-200">Blog</Link>
          <Link to="/contact" className="text-white hover:text-green-200">Contact</Link>
        </div>

        <div className="hidden md:block">
          <button className="bg-[#00563a] text-white px-4 py-2 rounded-lg hover:bg-[#00462f] transition">
            Get Started
          </button>
        </div>

        <button 
          className="md:hidden text-white" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div style={{ backgroundColor: "#00674b" }} className="md:hidden py-4 px-4 shadow-lg">
          <div className="flex flex-col space-y-4">
            <Link to="/" className="text-white hover:text-green-200" onClick={() => setIsMenuOpen(false)}>Home</Link>
            <Link to="/services" className="text-white hover:text-green-200" onClick={() => setIsMenuOpen(false)}>Services</Link>
            <Link to="/about" className="text-white hover:text-green-200" onClick={() => setIsMenuOpen(false)}>About Us</Link>
            <Link to="/blog" className="text-white hover:text-green-200" onClick={() => setIsMenuOpen(false)}>Blog</Link>
            <Link to="/contact" className="text-white hover:text-green-200" onClick={() => setIsMenuOpen(false)}>Contact</Link>
            <button className="bg-[#00563a] text-white px-4 py-2 rounded-lg hover:bg-[#00462f] w-full">
              Get Started
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
