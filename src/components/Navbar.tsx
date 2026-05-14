import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/80 backdrop-blur-md py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold tracking-tighter text-white">
          arik<span className="text-[#d4af37]">.</span>
        </a>

        <div className="hidden md:flex items-center space-x-8">
          {['Home', 'Services', 'Works', 'About', 'Blog'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm font-medium text-gray-400 hover:text-[#d4af37] transition-colors"
            >
              {item}
            </a>
          ))}
        </div>

        <button className="px-6 py-2 border border-[#d4af37] text-[#d4af37] text-sm font-medium hover:bg-[#d4af37] hover:text-black transition-all duration-300">
          Let's Talk
        </button>
      </div>
    </motion.nav>
  );
};

export default Navbar;
