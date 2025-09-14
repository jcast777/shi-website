import { motion } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useRef, useEffect, useCallback } from 'react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  rating: number;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Homeowner',
    content: 'The smart thermostat has cut our energy bill by 20%! The app is so easy to use, and being able to control the temperature from my phone is a game-changer.',
    rating: 5,
    image: 'https://randomuser.me/api/portraits/women/43.jpg'
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Tech Enthusiast',
    content: 'I\'ve tried many smart home products, but the quality and reliability of these devices are exceptional. The security camera has crystal clear video and the smart plugs work seamlessly with my existing setup.',
    rating: 5,
    image: 'https://randomuser.me/api/portraits/men/32.jpg'
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    role: 'Busy Parent',
    content: 'As a working mom, the robot vacuum has been a lifesaver. I can schedule cleanings and control it from my phone. The house has never been cleaner with so little effort!',
    rating: 4,
    image: 'https://randomuser.me/api/portraits/women/68.jpg'
  },
  {
    id: 4,
    name: 'David Kim',
    role: 'Early Adopter',
    content: 'The smart lighting system has completely transformed our home. The ability to set scenes and control everything with voice commands makes daily life so much more convenient.',
    rating: 5,
    image: 'https://randomuser.me/api/portraits/men/75.jpg'
  },
  {
    id: 5,
    name: 'Jessica Williams',
    role: 'Rental Property Owner',
    content: 'I installed smart locks and doorbell cameras in all my rental properties. The tenants love the convenience, and I appreciate the added security and peace of mind.',
    rating: 4,
    image: 'https://randomuser.me/api/portraits/women/29.jpg'
  }
];

const TestimonialCard = ({ testimonial, isActive }: { testimonial: Testimonial, isActive: boolean }) => (
  <div className={`flex flex-col items-center text-center p-8 transition-opacity duration-300 ${isActive ? 'opacity-100' : 'opacity-0 absolute'}`}>
    <div className="w-20 h-20 rounded-full overflow-hidden mb-6 border-4 border-primary-100">
      <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover" />
    </div>
    <div className="flex mb-4">
      {[...Array(5)].map((_, i) => (
        <Star 
          key={i} 
          className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
        />
      ))}
    </div>
    <p className="text-lg text-gray-700 mb-6 max-w-2xl">"{testimonial.content}"</p>
    <div>
      <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
      <p className="text-sm text-gray-600">{testimonial.role}</p>
    </div>
  </div>
);

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    if (!autoPlay) return;
    
    timeoutRef.current = setTimeout(() => {
      nextSlide();
    }, 5000);

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
    };
  }, [currentIndex, autoPlay, nextSlide]);

  return (
    <section id="testimonials" className="section bg-white">
      <div className="container">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">What Our Customers Say</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our customers have to say about their experience with SmartHome Innovations.
          </p>
        </motion.div>

        <div 
          className="relative max-w-4xl mx-auto overflow-hidden rounded-2xl bg-gray-50 shadow-inner"
          onMouseEnter={() => setAutoPlay(false)}
          onMouseLeave={() => setAutoPlay(true)}
        >
          <div className="relative h-96">
            {testimonials.map((testimonial, index) => (
              <div 
                key={testimonial.id}
                className={`absolute inset-0 transition-opacity duration-500 ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
              >
                <TestimonialCard 
                  testimonial={testimonial} 
                  isActive={index === currentIndex} 
                />
              </div>
            ))}
          </div>
          
          <button 
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white w-10 h-10 rounded-full shadow-md flex items-center justify-center text-primary-600 hover:bg-primary-50 transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button 
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white w-10 h-10 rounded-full shadow-md flex items-center justify-center text-primary-600 hover:bg-primary-50 transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
          
          <div className="absolute bottom-6 left-0 right-0 flex justify-center space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${index === currentIndex ? 'bg-primary-600' : 'bg-gray-300'}`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
