import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-24 bg-[#0a0a0a]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="flex-1"
          >
            <h2 className="text-sm uppercase tracking-[0.3em] text-[#d4af37] mb-6">The Story</h2>
            <h3 className="text-4xl md:text-6xl text-white font-light leading-tight mb-8">
              Turning vision into <br />
              <span className="italic font-serif">digital reality</span>.
            </h3>
            <p className="text-gray-400 text-lg font-light leading-relaxed mb-8 max-w-xl">
              I am a web designer and developer based in London, specializing in creating high-end digital experiences for brands that value aesthetic and performance. 
            </p>
            <p className="text-gray-400 text-lg font-light leading-relaxed mb-12 max-w-xl">
              With over 8 years of experience, I blend technical expertise with artistic vision to deliver websites that don't just look good—they convert.
            </p>
            <div className="flex gap-12">
              <div>
                <p className="text-3xl text-white font-light mb-1">8+</p>
                <p className="text-xs uppercase tracking-widest text-gray-500">Years Exp.</p>
              </div>
              <div>
                <p className="text-3xl text-white font-light mb-1">120+</p>
                <p className="text-xs uppercase tracking-widest text-gray-500">Projects</p>
              </div>
              <div>
                <p className="text-3xl text-white font-light mb-1">15</p>
                <p className="text-xs uppercase tracking-widest text-gray-500">Awards</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="flex-1 relative"
          >
            <div className="aspect-[4/5] bg-[#111] overflow-hidden">
              <img 
                src="/images/hero-portrait.jpg" 
                alt="About Arik" 
                className="w-full h-full object-cover grayscale opacity-70 hover:opacity-100 transition-opacity duration-700"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border border-[#d4af37] z-[-1] hidden md:block" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
