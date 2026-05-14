import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-[#0a0a0a]">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/80 via-[#0a0a0a]/40 to-[#0a0a0a] z-10" />
        <img
          src="/images/hero-portrait.jpg"
          alt="Designer Portrait"
          className="w-full h-full object-cover grayscale opacity-50"
        />
      </div>

      <div className="relative z-20 text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h1 className="text-6xl md:text-8xl font-light tracking-tighter text-white mb-4">
            Web Designer<br />
            <span className="italic font-serif text-[#d4af37]"> & Developer</span>
          </h1>
          
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light">
            Crafting immersive digital experiences through minimalist design and high-performance development.
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-[#d4af37] text-black font-semibold text-sm tracking-widest uppercase hover:bg-white transition-colors duration-300"
          >
            My Services
          </motion.button>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-gray-500 mb-2 font-medium">Scroll Down</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-[#d4af37] to-transparent" />
      </motion.div>
    </section>
  );
};

export default Hero;
