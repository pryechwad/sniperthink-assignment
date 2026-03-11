import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';
import { useEffect, useRef } from 'react';

const AnimatedCounter = ({ value, duration = 2 }) => {
  const ref = useRef(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: duration * 1000 });
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      motionValue.set(parseFloat(value));
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current) {
        const isPercentage = value.toString().includes('%');
        const isPlus = value.toString().includes('+');
        
        if (isPercentage) {
          ref.current.textContent = Math.floor(latest) + '%';
        } else if (isPlus) {
          ref.current.textContent = Math.floor(latest) + '+';
        } else {
          ref.current.textContent = Math.floor(latest).toLocaleString();
        }
      }
    });
  }, [springValue, value]);

  return <span ref={ref}>0</span>;
};

export default AnimatedCounter;
