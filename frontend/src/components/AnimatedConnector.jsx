import { motion } from 'framer-motion';

const AnimatedConnector = ({ isVisible }) => {
  return (
    <motion.div
      className="absolute left-1/2 w-1 h-32 -bottom-32 transform -translate-x-1/2"
      initial={{ scaleY: 0, opacity: 0 }}
      animate={isVisible ? { scaleY: 1, opacity: 1 } : { scaleY: 0, opacity: 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      style={{ transformOrigin: "top" }}
    >
      <div className="w-full h-full bg-gradient-to-b from-blue-400 to-purple-400 relative">
        <motion.div
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-purple-500 rounded-full"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
      </div>
    </motion.div>
  );
};

export default AnimatedConnector;
