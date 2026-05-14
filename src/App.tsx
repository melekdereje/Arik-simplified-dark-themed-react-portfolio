import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Clients from './components/Clients';
import Services from './components/Services';
import Works from './components/Works';
import About from './components/About';
import Blog from './components/Blog';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-[#0a0a0a] min-h-screen font-sans text-white selection:bg-[#d4af37] selection:text-black">
      <Navbar />
      <main>
        <Hero />
        <Clients />
        <About />
        <Services />
        <Works />
        <Blog />
      </main>
      <Footer />
    </div>
  );
}

export default App;
