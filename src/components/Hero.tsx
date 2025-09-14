import { motion } from 'framer-motion';
import { ArrowRight, ChevronRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative bg-background text-text overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 lg:py-40">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-center lg:text-left"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
              Transform Your Home with <span className="text-primary">Smart Innovation</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-xl mx-auto lg:mx-0">
              Discover the latest in home automation and smart living. Products designed to make your life easier, safer, and more enjoyable.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#products"
                className="bg-primary text-secondary font-bold py-3 px-8 rounded-lg flex items-center justify-center space-x-2 hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105"
              >
                <span>Shop Now</span>
                <ArrowRight size={20} />
              </a>
              <a
                href="#features"
                className="bg-transparent border-2 border-primary text-primary font-bold py-3 px-8 rounded-lg flex items-center justify-center space-x-2 hover:bg-primary hover:text-secondary transition-all duration-300 transform hover:scale-105"
              >
                <span>Learn More</span>
                <ChevronRight size={20} />
              </a>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="relative"
          >
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl shadow-primary/20">
              <img
                src="https://images.unsplash.com/photo-1558002038-1055907df827?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                alt="Smart home devices"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-accent rounded-full opacity-10 -z-10"></div>
            <div className="absolute -top-8 -left-8 w-40 h-40 bg-primary rounded-full opacity-10 -z-10"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
