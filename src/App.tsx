import { Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <AnimatePresence>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <ProductGrid />
                  <Features />
                  <Testimonials />
                  <Newsletter />
                </>
              }
            />
            </Routes>
          </AnimatePresence>
        </main>
        <Footer />
      </div>
  );
};

export default App;
