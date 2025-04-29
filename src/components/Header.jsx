import { Link } from 'react-router-dom';
import { useState, useRef } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownTimeoutRef = useRef(null);

  const handleMouseEnter = () => {
    clearTimeout(dropdownTimeoutRef.current);
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setIsDropdownOpen(false);
    }, 500); // stays for 1 second on hover out
  };

  return (
    <header style={{ backgroundColor: "#003B73" }} className="text-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="text-2xl font-bold text-white">IncorpNow</Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8 items-center">
          <Link to="/" className="text-white hover:text-green-200">Home</Link>
          <Link to="/services" className="text-white hover:text-green-200">Services</Link>
          <Link to="/about" className="text-white hover:text-green-200">About Us</Link>
          <Link to="/blog" className="text-white hover:text-green-200">Blog</Link>
          <Link to="/contact" className="text-white hover:text-green-200">Contact</Link>

          {/* Dropdown */}
          <div 
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <button className="bg-[#00563a] text-white px-4 py-2 rounded-lg hover:bg-[#00462f] transition">
              Consult An Expert
            </button>

            {isDropdownOpen && (
              <div className="absolute mt-2 right-0 bg-white text-black shadow-lg rounded-lg w-48 z-50">
                <Link to="/form?type=lawyer" className="block px-4 py-2 hover:bg-gray-100">Talk to Lawyer</Link>
                <Link to="/form?type=ca" className="block px-4 py-2 hover:bg-gray-100">Talk to CA</Link>
                <Link to="/form?type=cs" className="block px-4 py-2 hover:bg-gray-100">Talk to CS</Link>
                <Link to="/form?type=others" className="block px-4 py-2 hover:bg-gray-100">Talk to Others</Link>
              </div>
            )}
          </div>
        </div>

        {/* Mobile Hamburger Button */}
        <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div style={{ backgroundColor: "#00674b" }} className="md:hidden py-4 px-4 shadow-lg">
          <div className="flex flex-col space-y-4">
            <Link to="/" className="text-white hover:text-green-200" onClick={() => setIsMenuOpen(false)}>Home</Link>
            <Link to="/services" className="text-white hover:text-green-200" onClick={() => setIsMenuOpen(false)}>Services</Link>
            <Link to="/about" className="text-white hover:text-green-200" onClick={() => setIsMenuOpen(false)}>About Us</Link>
            <Link to="/blog" className="text-white hover:text-green-200" onClick={() => setIsMenuOpen(false)}>Blog</Link>
            <Link to="/contact" className="text-white hover:text-green-200" onClick={() => setIsMenuOpen(false)}>Contact</Link>

            <details className="text-white">
              <summary className="bg-[#00563a] px-4 py-2 rounded-lg">Consult An Expert</summary>
              <div className="flex flex-col mt-2 space-y-2">
                <Link to="/form?type=lawyer" onClick={() => setIsMenuOpen(false)} className="text-white hover:text-green-200">Talk to Lawyer</Link>
                <Link to="/form?type=ca" onClick={() => setIsMenuOpen(false)} className="text-white hover:text-green-200">Talk to CA</Link>
                <Link to="/form?type=cs" onClick={() => setIsMenuOpen(false)} className="text-white hover:text-green-200">Talk to CS</Link>
                <Link to="/form?type=others" onClick={() => setIsMenuOpen(false)} className="text-white hover:text-green-200">Talk to Others</Link>
              </div>
            </details>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
