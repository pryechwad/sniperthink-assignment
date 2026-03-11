import { motion } from 'framer-motion';

const MorphingShapes = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Morphing Blob 1 */}
      <motion.div
        className="absolute top-20 left-20 w-96 h-96 opacity-20"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
          borderRadius: ["30% 70% 70% 30% / 30% 30% 70% 70%", 
                        "70% 30% 30% 70% / 70% 70% 30% 30%",
                        "30% 70% 70% 30% / 30% 30% 70% 70%"],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        style={{
          background: 'linear-gradient(45deg, #3b82f6, #8b5cf6)',
          filter: 'blur(40px)',
        }}
      />

      {/* Morphing Blob 2 */}
      <motion.div
        className="absolute bottom-20 right-20 w-80 h-80 opacity-20"
        animate={{
          scale: [1, 1.3, 1],
          rotate: [360, 180, 0],
          borderRadius: ["70% 30% 50% 50% / 60% 40% 60% 40%", 
                        "50% 50% 30% 70% / 40% 60% 40% 60%",
                        "70% 30% 50% 50% / 60% 40% 60% 40%"],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        style={{
          background: 'linear-gradient(135deg, #ec4899, #f59e0b)',
          filter: 'blur(40px)',
        }}
      />

      {/* Morphing Blob 3 */}
      <motion.div
        className="absolute top-1/2 left-1/2 w-72 h-72 opacity-15"
        animate={{
          x: [-100, 100, -100],
          y: [-50, 50, -50],
          scale: [1, 1.4, 1],
          borderRadius: ["40% 60% 60% 40% / 50% 50% 50% 50%", 
                        "60% 40% 40% 60% / 50% 50% 50% 50%",
                        "40% 60% 60% 40% / 50% 50% 50% 50%"],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        style={{
          background: 'linear-gradient(90deg, #10b981, #06b6d4)',
          filter: 'blur(50px)',
        }}
      />
    </div>
  );
};

export default MorphingShapes;
