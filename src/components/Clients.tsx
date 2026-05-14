import { motion } from 'framer-motion';

const clients = [
  { name: 'VOGUE', id: 1 },
  { name: 'ROLEX', id: 2 },
  { name: 'HERMÈS', id: 3 },
  { name: 'TESLA', id: 4 },
  { name: 'APPLE', id: 5 },
];

const Clients = () => {
  return (
    <section className="py-20 bg-[#0a0a0a] border-y border-white/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap justify-center md:justify-between items-center gap-12 md:gap-8 opacity-40">
          {clients.map((client) => (
            <motion.div
              key={client.id}
              whileHover={{ opacity: 1, scale: 1.1 }}
              className="text-2xl md:text-3xl font-serif tracking-widest text-white cursor-default transition-all duration-300"
            >
              {client.name}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
