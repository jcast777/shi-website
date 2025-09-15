import { motion } from 'framer-motion';
import { Zap, Shield, Smartphone, Headphones } from 'lucide-react';

const features = [
  {
    icon: <Zap className="w-9 h-9 text-primary" />,
    title: 'Energy Efficient',
    description: 'Our smart devices help reduce energy consumption and lower your utility bills.'
  },
  {
    icon: <Shield className="w-9 h-9 text-primary" />,
    title: 'Secure & Private',
    description: 'Enterprise-grade security to keep your home and data protected at all times.'
  },
  {
    icon: <Smartphone className="w-9 h-9 text-primary" />,
    title: 'Easy to Control',
    description: 'Manage all your devices from one simple app, available on iOS and Android.'
  },
  {
    icon: <Headphones className="w-9 h-9 text-primary" />,
    title: '24/7 Support',
    description: 'Our dedicated support team is always here to help with any questions.'
  }
];

const FeatureCard = ({ feature, index }: { feature: typeof features[0], index: number }) => (
  <motion.div 
    className="bg-secondary p-8 rounded-2xl border border-gray-700/50 hover:border-primary/50 transition-all duration-300 transform hover:-translate-y-2"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.5 }}
    transition={{ delay: index * 0.15, ease: 'easeOut' }}
  >
    <div className="w-20 h-20 bg-background rounded-full flex items-center justify-center mb-6 mx-auto ring-8 ring-secondary">
      {feature.icon}
    </div>
    <h3 className="text-2xl font-bold text-center mb-4 text-text">{feature.title}</h3>
    <p className="text-gray-400 text-center leading-relaxed">{feature.description}</p>
  </motion.div>
);

const Features = () => {
  return (
    <section id="features" className="bg-background text-text py-20 md:py-28">
      <div className="container-fluid mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ ease: 'easeOut', duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4">Why Choose <span className="text-primary">SmartHome</span> Innovations?</h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            We're committed to bringing you the latest in smart home technology with products that are 
            easy to use, reliable, and designed to make your life better.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={feature.title} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
