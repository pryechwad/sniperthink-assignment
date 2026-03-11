import { motion } from 'framer-motion';
import { useState } from 'react';

const StrategyStep = ({ step, index, onInterestClick }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const icons = {
    1: (
      <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    2: (
      <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9 5H7C5.89543 5 5 5.89543 5 7V19C5 20.1046 5.89543 21 7 21H17C18.1046 21 19 20.1046 19 19V7C19 5.89543 18.1046 5 17 5H15M9 5C9 6.10457 9.89543 7 11 7H13C14.1046 7 15 6.10457 15 5M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5M12 12H15M12 16H15M9 12H9.01M9 16H9.01" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    3: (
      <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13 10V3L4 14H11L11 21L20 10L13 10Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    4: (
      <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7 12L12 7M12 7L17 12M12 7V17M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  };

  const containerVariants = {
    hidden: { 
      opacity: 0, 
      y: 100,
      scale: 0.9
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: { 
        duration: 0.7,
        ease: [0.6, -0.05, 0.01, 0.99],
        delay: index * 0.15
      }
    }
  };

  const iconVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: { 
      scale: 1, 
      rotate: 0,
      transition: { 
        type: "spring",
        stiffness: 200,
        damping: 15,
        delay: index * 0.15 + 0.3
      }
    }
  };

  return (
    <motion.div
      className="flex items-center justify-center gap-8 mb-24 relative"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      style={{ perspective: "1000px" }}
    >
      {/* Animated Connecting Line */}
      <motion.div
        className="absolute left-1/2 top-8 w-24 h-0.5 overflow-hidden"
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        transition={{ delay: index * 0.15 + 0.5, duration: 0.6 }}
        viewport={{ once: true }}
        style={{ transformOrigin: "left" }}
      >
        <motion.div
          className="w-full h-full bg-gradient-to-r from-purple-400 via-pink-400 to-transparent"
          animate={{
            backgroundPosition: ['0% 50%', '100% 50%'],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{ backgroundSize: '200% 100%' }}
        />
      </motion.div>

      {/* Glowing Particles on Hover */}
      {isHovered && (
        <>
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className={`absolute w-2 h-2 rounded-full bg-gradient-to-r ${step.color}`}
              initial={{ 
                x: 0, 
                y: 0, 
                scale: 0,
                opacity: 1 
              }}
              animate={{
                x: Math.cos((i * Math.PI * 2) / 8) * 120,
                y: Math.sin((i * Math.PI * 2) / 8) * 120,
                scale: [0, 1.5, 0],
                opacity: [1, 0.6, 0]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.15
              }}
              style={{ left: '50%', top: '50%' }}
            />
          ))}
        </>
      )}

      <motion.div
        className={`w-full max-w-4xl bg-white rounded-3xl shadow-2xl p-10 ml-10 relative overflow-hidden border-2 ${
          isExpanded ? `border-transparent` : 'border-gray-100'
        }`}
        whileHover={{ 
          y: -12, 
          scale: 1.02,
          boxShadow: "0 30px 60px -12px rgba(0, 0, 0, 0.3)",
        }}
        onClick={() => setIsExpanded(!isExpanded)}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
      >
        {/* Animated Border Gradient */}
        {isExpanded && (
          <motion.div
            className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-10`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.1 }}
            transition={{ duration: 0.3 }}
          />
        )}

        {/* Shimmer Effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0"
          animate={{
            x: isHovered ? [-1000, 1000] : -1000,
            opacity: isHovered ? [0, 0.2, 0] : 0
          }}
          transition={{
            duration: 1.5,
            repeat: isHovered ? Infinity : 0,
            ease: "easeInOut"
          }}
        />

        <div className="flex items-start gap-6 relative z-10">
          {/* Icon with Advanced Animation */}
          <motion.div
            className={`relative flex-shrink-0`}
            variants={iconVariants}
            whileHover={{ scale: 1.15, rotate: [0, -5, 5, -5, 0] }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              className={`w-20 h-20 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center shadow-xl relative z-10`}
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Icon Glow Effect */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${step.color} rounded-2xl blur-xl`}
                animate={{
                  scale: isHovered ? [1, 1.3, 1] : 1,
                  opacity: isHovered ? [0.4, 0.7, 0.4] : 0.3
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <div className="relative z-10">{icons[step.id]}</div>
            </motion.div>

            {/* Orbiting Dots */}
            {isHovered && (
              <>
                {[0, 120, 240].map((angle, i) => (
                  <motion.div
                    key={i}
                    className={`absolute w-2 h-2 rounded-full bg-gradient-to-r ${step.color}`}
                    style={{
                      left: '50%',
                      top: '50%',
                    }}
                    animate={{
                      x: Math.cos((angle * Math.PI) / 180) * 50,
                      y: Math.sin((angle * Math.PI) / 180) * 50,
                      rotate: 360,
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />
                ))}
              </>
            )}
          </motion.div>
          
          <div className="flex-1">
            {/* Title with Badge */}
            <div className="flex items-center gap-3 mb-3">
              <motion.h3 
                className="text-3xl font-bold text-gray-900 font-heading"
                style={{ letterSpacing: '-0.01em' }}
              >
                {step.title}
              </motion.h3>
              
              <motion.span
                className={`px-3 py-1 text-xs font-bold rounded-full bg-gradient-to-r ${step.color} text-white shadow-lg`}
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                transition={{ delay: index * 0.15 + 0.7, type: "spring", stiffness: 200 }}
                whileHover={{ scale: 1.1, rotate: 360 }}
              >
                STEP {step.id}
              </motion.span>
            </div>
            
            <motion.p 
              className="text-gray-600 text-lg leading-relaxed mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: index * 0.15 + 0.6 }}
            >
              {step.description}
            </motion.p>

            {/* Expand/Collapse Indicator */}
            <motion.div
              className="flex items-center gap-2 text-sm font-semibold text-gray-400 cursor-pointer"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <span>{isExpanded ? 'Click to collapse' : 'Click to expand'}</span>
              <motion.span
                animate={{ y: isExpanded ? [-2, 2, -2] : [2, -2, 2] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                {isExpanded ? '▲' : '▼'}
              </motion.span>
            </motion.div>
          </div>
        </div>

        {/* Expanded Content */}
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ 
            height: isExpanded ? 'auto' : 0,
            opacity: isExpanded ? 1 : 0
          }}
          transition={{ duration: 0.5, ease: [0.04, 0.62, 0.23, 0.98] }}
          className="overflow-hidden"
        >
          <div className="mt-8 pt-8 border-t-2 border-gray-100 relative z-10">
            {/* Details Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              {step.details.map((detail, idx) => (
                <motion.div
                  key={idx}
                  className="bg-gradient-to-br from-gray-50 to-white p-4 rounded-xl border border-gray-100"
                  initial={{ opacity: 0, y: 20, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ delay: idx * 0.1, type: "spring", stiffness: 200 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <div className="flex items-start gap-3">
                    <motion.span 
                      className={`text-2xl bg-gradient-to-r ${step.color} bg-clip-text text-transparent`}
                      whileHover={{ scale: 1.3, rotate: 360 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      ✓
                    </motion.span>
                    <span className="text-gray-700 font-medium">{detail}</span>
                  </div>
                </motion.div>
              ))}
            </div>
            
            {/* CTA Button */}
            <motion.button
              className={`w-full py-4 bg-gradient-to-r ${step.color} text-white rounded-xl font-bold text-lg shadow-xl relative overflow-hidden group`}
              whileHover={{ 
                scale: 1.02, 
                boxShadow: "0 25px 50px rgba(0,0,0,0.3)",
                y: -3
              }}
              whileTap={{ scale: 0.98 }}
              onClick={(e) => {
                e.stopPropagation();
                onInterestClick(step);
              }}
            >
              {/* Button Shine Effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20"
                animate={{
                  x: [-200, 200]
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <span className="relative z-10 flex items-center justify-center gap-3">
                <span>I'm Interested in {step.title}</span>
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
              </span>
            </motion.button>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default StrategyStep;
