import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

const TestimonialCarousel = () => {
  const [current, setCurrent] = useState(0);

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CEO, TechCorp',
      image: '👩‍💼',
      text: 'SniperThink transformed our business strategy. Results exceeded expectations!',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'Founder, StartupX',
      image: '👨‍💻',
      text: 'The most professional and effective team we\'ve worked with. Highly recommended!',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      role: 'CMO, GlobalBrand',
      image: '👩‍🎨',
      text: 'Their strategic approach helped us achieve 300% growth in just 6 months.',
      rating: 5
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <div className="relative max-w-4xl mx-auto my-20 px-4">
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          What Our Clients Say
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full" />
      </motion.div>

      <div className="relative h-64 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            className="absolute inset-0 flex items-center justify-center"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-2xl">
              <div className="flex items-center gap-4 mb-4">
                <div className="text-5xl">{testimonials[current].image}</div>
                <div>
                  <h3 className="font-bold text-lg text-gray-800">
                    {testimonials[current].name}
                  </h3>
                  <p className="text-sm text-gray-600">{testimonials[current].role}</p>
                </div>
              </div>
              
              <div className="flex gap-1 mb-4">
                {[...Array(testimonials[current].rating)].map((_, i) => (
                  <motion.span
                    key={i}
                    className="text-yellow-400 text-xl"
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    ⭐
                  </motion.span>
                ))}
              </div>
              
              <p className="text-gray-700 text-lg italic">
                "{testimonials[current].text}"
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center gap-2 mt-8">
        {testimonials.map((_, index) => (
          <motion.button
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === current ? 'bg-blue-600' : 'bg-gray-300'
            }`}
            onClick={() => setCurrent(index)}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            animate={{
              scale: index === current ? 1.2 : 1,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialCarousel;
