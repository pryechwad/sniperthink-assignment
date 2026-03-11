import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import StrategyStep from './StrategyStep';
import InterestModal from './InterestModal';
import ProgressIndicator from './ProgressIndicator';
import { strategySteps } from '../data/strategyData';

const StrategyFlow = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedStep, setSelectedStep] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      const stepElements = document.querySelectorAll('[data-step]');
      
      stepElements.forEach((element, index) => {
        const rect = element.getBoundingClientRect();
        const elementTop = rect.top + window.scrollY;
        
        if (scrollPosition >= elementTop) {
          setCurrentStep(index + 1);
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleInterestClick = (step) => {
    setSelectedStep(step);
    setModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50">
      <ProgressIndicator currentStep={currentStep} totalSteps={strategySteps.length} />

      <div className="container mx-auto px-4 pt-32 pb-20">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-5xl md:text-6xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            How <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              SniperThink
            </span> Works
          </motion.h1>
          <motion.p
            className="text-xl text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            A proven methodology that transforms your vision into measurable results
          </motion.p>
        </motion.div>

        <div className="max-w-6xl mx-auto relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-200 via-purple-200 to-pink-200 transform -translate-x-1/2 hidden md:block" />

          {strategySteps.map((step, index) => (
            <div key={step.id} data-step={step.id}>
              <StrategyStep
                step={step}
                index={index}
                onInterestClick={handleInterestClick}
              />
            </div>
          ))}
        </div>

        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Ready to Transform Your Business?
          </h2>
          <motion.button
            className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold text-lg shadow-lg hover:shadow-xl"
            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0,0,0,0.2)" }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              setSelectedStep(strategySteps[0]);
              setModalOpen(true);
            }}
          >
            Get Started Today
          </motion.button>
        </motion.div>
      </div>

      <InterestModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        selectedStep={selectedStep}
      />
    </div>
  );
};

export default StrategyFlow;
