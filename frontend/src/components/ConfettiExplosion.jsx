import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const ConfettiExplosion = ({ trigger = false, duration = 3000 }) => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    if (trigger) {
      const newParticles = Array.from({ length: 50 }, (_, i) => ({
        id: i,
        x: Math.random() * window.innerWidth,
        y: window.innerHeight / 2,
        color: ['#3b82f6', '#8b5cf6', '#ec4899', '#f59e0b', '#10b981'][Math.floor(Math.random() * 5)],
        rotation: Math.random() * 360,
        size: Math.random() * 10 + 5,
      }));

      setParticles(newParticles);

      setTimeout(() => {
        setParticles([]);
      }, duration);
    }
  }, [trigger, duration]);

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999]">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute"
          style={{
            left: particle.x,
            top: particle.y,
            width: particle.size,
            height: particle.size,
            backgroundColor: particle.color,
            borderRadius: Math.random() > 0.5 ? '50%' : '0%',
          }}
          initial={{
            x: 0,
            y: 0,
            opacity: 1,
            rotate: 0,
          }}
          animate={{
            x: (Math.random() - 0.5) * 500,
            y: Math.random() * -300 + 200,
            opacity: 0,
            rotate: particle.rotation,
          }}
          transition={{
            duration: duration / 1000,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
        />
      ))}
    </div>
  );
};

export default ConfettiExplosion;
