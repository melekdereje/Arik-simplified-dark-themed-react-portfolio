import { motion } from 'framer-motion';
import { Layout, Code, Search } from 'lucide-react';

const services = [
  {
    title: 'Web Design',
    description: 'Bespoke UI/UX design focused on aesthetic excellence and intuitive user journeys.',
    icon: <Layout className="w-8 h-8" />,
  },
  {
    title: 'Development',
    description: 'Clean, efficient, and scalable code built with modern frameworks like React and Next.js.',
    icon: <Code className="w-8 h-8" />,
  },
  {
    title: 'Content & SEO',
    description: 'Strategizing and optimizing your digital footprint to reach and engage your target audience.',
    icon: <Search className="w-8 h-8" />,
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-[#0a0a0a]">
      <div className="container mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-sm uppercase tracking-[0.3em] text-[#d4af37] mb-4">What I offer</h2>
          <h3 className="text-4xl md:text-5xl text-white font-light">Comprehensive Services</h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="p-10 border border-white/5 bg-[#111] hover:border-[#d4af37]/30 transition-all duration-500 group"
            >
              <div className="text-[#d4af37] mb-6 group-hover:scale-110 transition-transform duration-500 origin-left">
                {service.icon}
              </div>
              <h4 className="text-xl text-white mb-4 font-medium">{service.title}</h4>
              <p className="text-gray-400 mb-8 font-light leading-relaxed">
                {service.description}
              </p>
              <a href="#" className="text-xs uppercase tracking-widest text-[#d4af37] border-b border-[#d4af37]/30 pb-1 hover:border-[#d4af37] transition-all">
                About Service
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
