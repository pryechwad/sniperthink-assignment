import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const MobileStrategyStep = ({ step, index = 0, onInterestClick }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      className="bg-white rounded-xl shadow-lg p-6 mb-6"
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ 
        duration: 0.5,
        delay: index * 0.15,
        ease: [0.6, -0.05, 0.01, 0.99]
      }}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <div className="flex items-center gap-4 mb-4">
        <motion.div
          className={`text-4xl bg-gradient-to-br ${step.color} p-4 rounded-lg shadow-md`}
          initial={{ scale: 0, rotate: -180 }}
          whileInView={{ scale: 1, rotate: 0 }}
          transition={{ 
            type: "spring", 
            stiffness: 260, 
            damping: 20,
            delay: index * 0.15 + 0.2 
          }}
          whileTap={{ scale: 0.9, rotate: 15 }}
        >
          {step.icon}
        </motion.div>
        <div className="flex-1">
          <h3 className="text-xl font-bold text-gray-800">{step.title}</h3>
          <span className="text-sm text-gray-500">Step {step.id}</span>
        </div>
      </div>

      <motion.p 
        className="text-gray-600 mb-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: index * 0.15 + 0.3 }}
      >
        {step.description}
      </motion.p>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
            className="overflow-hidden"
          >
            <div className="pt-4 border-t border-gray-200">
              <ul className="space-y-2 mb-4">
                {step.details.map((detail, idx) => (
                  <motion.li
                    key={idx}
                    className="text-gray-700 flex items-center gap-2"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                  >
                    <span className="text-blue-500 text-lg">✓</span>
                    <span className="text-sm">{detail}</span>
                  </motion.li>
                ))}
              </ul>
              <motion.button
                className={`w-full py-3 bg-gradient-to-r ${step.color} text-white rounded-lg font-semibold shadow-md`}
                whileTap={{ scale: 0.95 }}
                whileHover={{ scale: 1.02 }}
                onClick={(e) => {
                  e.stopPropagation();
                  onInterestClick(step);
                }}
              >
                I'm Interested
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="text-xs text-gray-400 text-center mt-2">
        {isExpanded ? 'Tap to collapse' : 'Tap to expand'}
      </div>
    </motion.div>
  );
};

export default MobileStrategyStep;
