import { motion } from 'framer-motion';

const posts = [
  {
    date: 'Oct 12, 2023',
    title: 'The Future of Minimalist Web Design',
    category: 'Design',
  },
  {
    date: 'Sep 28, 2023',
    title: 'Why Performance is the New Aesthetic',
    category: 'Development',
  },
  {
    date: 'Aug 15, 2023',
    title: 'Mastering Dark Mode UX',
    category: 'UX Research',
  },
];

const Blog = () => {
  return (
    <section id="blog" className="py-24 bg-[#0a0a0a]">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-end mb-16">
          <div>
            <h2 className="text-sm uppercase tracking-[0.3em] text-[#d4af37] mb-4">Journal</h2>
            <h3 className="text-4xl md:text-5xl text-white font-light">Latest Insights</h3>
          </div>
          <button className="hidden md:block text-sm uppercase tracking-widest text-white border-b border-white/20 pb-2 hover:border-[#d4af37] hover:text-[#d4af37] transition-all">
            Read All Posts
          </button>
        </div>

        <div className="space-y-0">
          {posts.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group border-t border-white/10 py-10 flex flex-col md:flex-row md:items-center justify-between hover:bg-white/[0.02] transition-colors px-4 -mx-4 cursor-pointer"
            >
              <div className="flex flex-col md:flex-row md:items-center md:gap-12 mb-4 md:mb-0">
                <span className="text-xs uppercase tracking-widest text-gray-500">{post.date}</span>
                <h4 className="text-2xl text-white font-light group-hover:text-[#d4af37] transition-colors">
                  {post.title}
                </h4>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-xs uppercase tracking-widest text-gray-500 border border-white/10 px-3 py-1 rounded-full">
                  {post.category}
                </span>
                <div className="w-10 h-10 border border-white/10 flex items-center justify-center rounded-full group-hover:bg-[#d4af37] group-hover:border-[#d4af37] transition-all">
                  <span className="text-white group-hover:text-black transition-colors">→</span>
                </div>
              </div>
            </motion.div>
          ))}
          <div className="border-t border-white/10" />
        </div>
      </div>
    </section>
  );
};

export default Blog;
