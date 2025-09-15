import { motion } from 'framer-motion';
import { useState } from 'react';
import { Send, Check } from 'lucide-react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log('Subscribed with email:', email);
      setIsLoading(false);
      setIsSubscribed(true);
      setEmail('');
      
      // Reset subscription message after 5 seconds
      setTimeout(() => {
        setIsSubscribed(false);
      }, 5000);
    }, 1000);
  };

  return (
    <section id="newsletter" className="bg-primary-600 text-white py-16">
      <div className="container-fluid mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Stay Updated</h2>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter for the latest smart home innovations, exclusive offers, and helpful tips.
            </p>
            
            {isSubscribed ? (
              <motion.div 
                className="inline-flex items-center bg-green-500 text-white px-6 py-3 rounded-lg"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
              >
                <Check className="w-5 h-5 mr-2" />
                Thank you for subscribing!
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <div className="flex-grow">
                  <label htmlFor="email" className="sr-only">Email address</label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary-300"
                    placeholder="Enter your email"
                    required
                    disabled={isLoading}
                  />
                </div>
                <button
                  type="submit"
                  disabled={isLoading || !email}
                  className={`flex items-center justify-center px-6 py-3 rounded-lg font-medium transition-colors ${
                    isLoading || !email
                      ? 'bg-primary-400 cursor-not-allowed'
                      : 'bg-white text-primary-700 hover:bg-primary-50'
                  }`}
                >
                  {isLoading ? (
                    'Subscribing...'
                  ) : (
                    <>
                      <span>Subscribe</span>
                      <Send className="w-4 h-4 ml-2" />
                    </>
                  )}
                </button>
              </form>
            )}
            
            <p className="text-sm text-primary-200 mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
