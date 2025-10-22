import Hero from './components/Hero';
import Features from './components/Features';
import Workflow from './components/Workflow';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black text-white antialiased">
      <Hero />
      <main>
        <Features />
        <Workflow />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
