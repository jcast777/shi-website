import { motion } from 'framer-motion';
import { Star, ExternalLink } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'Smart Thermostat Pro',
    description: 'Control your home\'s temperature from anywhere with this energy-efficient smart thermostat.',
    price: 199.99,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1611186871348-b1ce696e5c09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    amazonLink: 'https://www.amazon.com/smart-thermostat/s?k=smart+thermostat',
    aliexpressLink: 'https://www.aliexpress.com/wholesale?catId=0&initiative_id=SB_20230830000001&SearchText=smart+thermostat',
  },
  {
    id: 2,
    name: 'Smart LED Bulbs (4-Pack)',
    description: '16 million colors, dimmable, and works with Alexa and Google Assistant.',
    price: 49.99,
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1578991624414-276ef23a534c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    amazonLink: 'https://www.amazon.com/smart-led-bulbs/s?k=smart+led+bulbs',
    aliexpressLink: 'https://www.aliexpress.com/wholesale?catId=0&initiative_id=SB_20230830000001&SearchText=smart+led+bulbs',
  },
  {
    id: 3,
    name: 'Smart Security Camera',
    description: '1080p HD, night vision, motion detection, and two-way audio.',
    price: 89.99,
    rating: 4.5,
    image: 'https://images.unsplash.com/photo-1527430253228-e93688616381?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1631&q=80',
    amazonLink: 'https://www.amazon.com/smart-security-camera/s?k=smart+security+camera',
    aliexpressLink: 'https://www.aliexpress.com/wholesale?catId=0&initiative_id=SB_20230830000001&SearchText=smart+security+camera',
  },
  {
    id: 4,
    name: 'Smart Plug Mini',
    description: 'Turn any appliance into a smart device. Control with your phone or voice commands.',
    price: 19.99,
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1453&q=80',
    amazonLink: 'https://www.amazon.com/smart-plug/s?k=smart+plug',
    aliexpressLink: 'https://www.aliexpress.com/wholesale?catId=0&initiative_id=SB_20230830000001&SearchText=smart+plug',
  },
  {
    id: 5,
    name: 'Smart Doorbell',
    description: 'See, hear, and speak to visitors from your phone with HD video and two-way audio.',
    price: 129.99,
    rating: 4.4,
    image: 'https://images.unsplash.com/photo-1616128417740-549bdbdede0e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    amazonLink: 'https://www.amazon.com/smart-doorbell/s?k=smart+doorbell',
    aliexpressLink: 'https://www.aliexpress.com/wholesale?catId=0&initiative_id=SB_20230830000001&SearchText=smart+doorbell',
  },
  {
    id: 6,
    name: 'Robot Vacuum Cleaner',
    description: 'Smart navigation, app control, and powerful suction for automated cleaning.',
    price: 249.99,
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1603575448878-868a20723f5d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    amazonLink: 'https://www.amazon.com/robot-vacuum/s?k=robot+vacuum',
    aliexpressLink: 'https://www.aliexpress.com/wholesale?catId=0&initiative_id=SB_20230830000001&SearchText=robot+vacuum',
  },
];

const ProductCard = ({ product }: { product: typeof products[0] }) => {
  return (
    <motion.div 
      className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
      whileHover={{ y: -5 }}
    >
      <div className="h-48 overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>
          <div className="flex items-center bg-yellow-100 text-yellow-800 text-xs font-medium px-2 py-0.5 rounded">
            <Star className="w-3 h-3 mr-1 fill-current" />
            {product.rating}
          </div>
        </div>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{product.description}</p>
        <div className="flex justify-between items-center mb-4">
          <span className="text-lg font-bold text-gray-900">${product.price.toFixed(2)}</span>
        </div>
        <div className="grid grid-cols-2 gap-2">
          <a 
            href={product.amazonLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white text-sm py-2 px-3 rounded-lg transition-colors"
          >
            <img src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" alt="Amazon" className="h-4 mr-2" />
            <ExternalLink className="w-3 h-3" />
          </a>
          <a 
            href={product.aliexpressLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center bg-orange-500 hover:bg-orange-600 text-white text-sm py-2 px-3 rounded-lg transition-colors"
          >
            <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/AliExpress_Logo.svg" alt="AliExpress" className="h-4 mr-2" />
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

const ProductGrid = () => {
  return (
    <section id="products" className="section bg-white">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Featured Products
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
