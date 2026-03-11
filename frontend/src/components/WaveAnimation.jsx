import { motion } from 'framer-motion';

const WaveAnimation = ({ color = 'blue' }) => {
  const colors = {
    blue: ['#3b82f6', '#60a5fa', '#93c5fd'],
    purple: ['#8b5cf6', '#a78bfa', '#c4b5fd'],
    pink: ['#ec4899', '#f472b6', '#f9a8d4'],
  };

  const waveColors = colors[color] || colors.blue;

  return (
    <div className="absolute bottom-0 left-0 right-0 h-32 overflow-hidden opacity-30">
      {/* Wave 1 */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-full"
        style={{
          background: `linear-gradient(180deg, transparent, ${waveColors[0]})`,
        }}
        animate={{
          x: ['-100%', '0%'],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'linear',
        }}
      >
        <svg
          className="absolute bottom-0 w-[200%] h-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,50 C150,80 350,0 600,50 C850,100 1050,20 1200,50 L1200,120 L0,120 Z"
            fill={waveColors[0]}
            opacity="0.5"
          />
        </svg>
      </motion.div>

      {/* Wave 2 */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-full"
        style={{
          background: `linear-gradient(180deg, transparent, ${waveColors[1]})`,
        }}
        animate={{
          x: ['0%', '-100%'],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'linear',
        }}
      >
        <svg
          className="absolute bottom-0 w-[200%] h-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,70 C200,20 400,100 600,70 C800,40 1000,90 1200,70 L1200,120 L0,120 Z"
            fill={waveColors[1]}
            opacity="0.4"
          />
        </svg>
      </motion.div>

      {/* Wave 3 */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-full"
        animate={{
          x: ['-100%', '0%'],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'linear',
        }}
      >
        <svg
          className="absolute bottom-0 w-[200%] h-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,90 C250,60 450,110 600,90 C750,70 950,100 1200,90 L1200,120 L0,120 Z"
            fill={waveColors[2]}
            opacity="0.3"
          />
        </svg>
      </motion.div>
    </div>
  );
};

export default WaveAnimation;
