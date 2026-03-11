import { motion } from 'framer-motion';
import { useScrollProgress } from '../hooks/useScrollProgress';

const ProgressIndicator = ({ currentStep, totalSteps }) => {
  const scrollProgress = useScrollProgress();

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md shadow-md">
      <motion.div
        className="h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: scrollProgress / 100 }}
        transition={{ duration: 0.1, ease: "easeOut" }}
        style={{ transformOrigin: "left" }}
      />
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <motion.div 
          className="text-sm font-semibold text-gray-700"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          SniperThink Strategy Flow
        </motion.div>
        <div className="flex items-center gap-2">
          {Array.from({ length: totalSteps }).map((_, index) => (
            <motion.div
              key={index}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index + 1 <= currentStep ? 'bg-blue-600 w-3 h-3' : 'bg-gray-300'
              }`}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ 
                scale: 1, 
                opacity: 1,
                y: index + 1 === currentStep ? [-2, 0] : 0
              }}
              transition={{ 
                delay: index * 0.1,
                y: { duration: 0.5, repeat: index + 1 === currentStep ? Infinity : 0, repeatType: "reverse" }
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProgressIndicator;
