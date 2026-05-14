import { ArrowUpRight } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0a0a0a] border-t border-white/5 pt-24 pb-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 mb-24">
          <div>
            <h2 className="text-5xl md:text-7xl text-white font-light tracking-tighter mb-12">
              Let's create something <span className="italic font-serif text-[#d4af37]">extraordinary</span>.
            </h2>
            <a 
              href="mailto:hello@arik.design" 
              className="text-2xl md:text-4xl text-white border-b border-white/20 pb-4 flex items-center group hover:border-[#d4af37] transition-all"
            >
              hello@arik.design
              <ArrowUpRight className="ml-4 w-8 h-8 group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform" />
            </a>
          </div>

          <div className="grid grid-cols-2 gap-12">
            <div>
              <h4 className="text-[#d4af37] uppercase tracking-widest text-xs mb-8">Navigation</h4>
              <ul className="space-y-4">
                {['Home', 'Services', 'Works', 'About', 'Blog'].map((item) => (
                  <li key={item}>
                    <a href={`#${item.toLowerCase()}`} className="text-gray-400 hover:text-white transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-[#d4af37] uppercase tracking-widest text-xs mb-8">Social</h4>
              <div className="flex flex-col space-y-4">
                {['Dribbble', 'LinkedIn', 'Instagram', 'Twitter'].map((social) => (
                  <a 
                    key={social} 
                    href="#" 
                    className="text-gray-400 hover:text-[#d4af37] transition-colors flex items-center group"
                  >
                    {social}
                    <ArrowUpRight size={14} className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center border-t border-white/5 pt-8 mt-8">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © {currentYear} arik. All rights reserved.
          </p>
          <div className="flex space-x-8 text-sm text-gray-500">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
