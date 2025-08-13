
import React, { useState, useEffect } from 'react';

const Logo: React.FC = () => (
  <div className="flex items-center space-x-2">
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="#2E7D32" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M2 17L12 22L22 17" stroke="#1E88E5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M2 12L12 17L22 12" stroke="#FB8C00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
    <span className="font-display font-bold text-xl text-base-text">INVESCO</span>
  </div>
);

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Tentang Kami', href: '#about' },
  { name: 'Produk', href: '#products' },
  { name: 'Kekuatan Kami', href: '#strengths' },
  { name: 'Kontak', href: '#contact' },
];

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Logo />
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="font-display text-base-text hover:text-primary transition-colors duration-300">
              {link.name}
            </a>
          ))}
          <a href="#contact" className="bg-accent hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-full transition-colors duration-300">
            Hubungi Kami
          </a>
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-base-text focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
            </svg>
          </button>
        </div>
      </nav>
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-6 pt-2 pb-4 flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="font-display text-base-text hover:text-primary" onClick={() => setIsMenuOpen(false)}>
                {link.name}
              </a>
            ))}
            <a href="#contact" className="bg-accent text-center hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-full transition-colors duration-300" onClick={() => setIsMenuOpen(false)}>
              Hubungi Kami
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
