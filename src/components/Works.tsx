import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Aura Lifestyle',
    category: 'E-commerce / Design',
    image: '/images/project1.jpg',
  },
  {
    title: 'Lumina Arch',
    category: 'Architecture / Portfolio',
    image: '/images/project4.jpg',
  },
  {
    title: 'Noir Agency',
    category: 'Creative / Branding',
    image: '/images/project3.jpg',
  },
  {
    title: 'Gilded Fine',
    category: 'Jewelry / E-commerce',
    image: '/images/project2.jpg',
  },
];

const Works = () => {
  return (
    <section id="works" className="py-24 bg-[#0a0a0a]">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-end mb-16">
          <div>
            <h2 className="text-sm uppercase tracking-[0.3em] text-[#d4af37] mb-4">Portfolio</h2>
            <h3 className="text-4xl md:text-5xl text-white font-light">Selected Work</h3>
          </div>
          <button className="hidden md:block text-sm uppercase tracking-widest text-white border-b border-white/20 pb-2 hover:border-[#d4af37] hover:text-[#d4af37] transition-all">
            View All Projects
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group relative cursor-pointer"
            >
              <div className="relative overflow-hidden aspect-[16/10] bg-[#111]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <div className="text-center p-6">
                    <p className="text-[#d4af37] text-xs uppercase tracking-[0.2em] mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      {project.category}
                    </p>
                    <h4 className="text-white text-2xl font-light translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                      {project.title}
                    </h4>
                  </div>
                </div>
              </div>
              <div className="mt-6 md:hidden">
                <h4 className="text-white text-xl font-light">{project.title}</h4>
                <p className="text-gray-500 text-sm mt-1">{project.category}</p>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 md:hidden text-center">
          <button className="text-sm uppercase tracking-widest text-[#d4af37] border border-[#d4af37]/30 px-8 py-4">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default Works;
