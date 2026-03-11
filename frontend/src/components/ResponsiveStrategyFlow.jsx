import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import StrategyStep from './StrategyStep';
import MobileStrategyStep from './MobileStrategyStep';
import InterestModal from './InterestModal';
import ProgressIndicator from './ProgressIndicator';
import HeroSection from './HeroSection';
import MagneticCursor from './MagneticCursor';
import FloatingActionButton from './FloatingActionButton';
import TestimonialCarousel from './TestimonialCarousel';
import MorphingShapes from './MorphingShapes';
import WaveAnimation from './WaveAnimation';
import ConfettiExplosion from './ConfettiExplosion';
import FeaturesSection from './FeaturesSection';
import PricingSection from './PricingSection';
import FAQSection from './FAQSection';
import Footer from './Footer';
import { ToastContainer } from './Toast';
import { useToast } from '../hooks/useToast';
import { strategySteps } from '../data/strategyData';

const ResponsiveStrategyFlow = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedStep, setSelectedStep] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const { toasts, addToast, removeToast } = useToast();

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

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

  const handleFormSuccess = () => {
    addToast('Thank you for your interest! We will contact you soon.', 'success', 4000);
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 relative overflow-hidden">
      {/* Morphing Background Shapes */}
      <MorphingShapes />
      
      {/* Confetti Celebration */}
      <ConfettiExplosion trigger={showConfetti} />
      
      {/* Toast Notifications */}
      <ToastContainer toasts={toasts} removeToast={removeToast} />

      {/* Magnetic Cursor Effect (Desktop Only) */}
      {!isMobile && <MagneticCursor />}
      
      <ProgressIndicator currentStep={currentStep} totalSteps={strategySteps.length} />

      <div className="container mx-auto px-4 pt-32 pb-20">
        <HeroSection />

        {isMobile ? (
          <div className="max-w-lg mx-auto">
            {strategySteps.map((step, index) => (
              <div key={step.id} data-step={step.id}>
                <MobileStrategyStep
                  step={step}
                  index={index}
                  onInterestClick={handleInterestClick}
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="max-w-5xl mx-auto relative">
            {/* Vertical Timeline with Glow */}
            <motion.div 
              className="absolute left-1/2 top-0 bottom-0 w-1 transform -translate-x-1/2 -z-10"
              initial={{ scaleY: 0, opacity: 0 }}
              animate={{ scaleY: 1, opacity: 1 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              style={{ transformOrigin: "top" }}
            >
              <div className="w-full h-full bg-gradient-to-b from-blue-400 via-purple-400 to-pink-400 relative">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-b from-blue-400 via-purple-400 to-pink-400 blur-md"
                  animate={{ opacity: [0.3, 0.6, 0.3] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
                <motion.div
                  className="absolute left-1/2 transform -translate-x-1/2 w-3 h-3 bg-white rounded-full shadow-lg"
                  animate={{ y: ['0%', '100%'] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                />
              </div>
            </motion.div>

            {strategySteps.map((step, index) => (
              <div key={step.id} data-step={step.id} className="relative">
                <motion.div
                  className="absolute left-1/2 top-8 transform -translate-x-1/2 w-14 h-14 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold text-xl shadow-2xl z-10 border-4 border-white"
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  whileHover={{ 
                    scale: 1.2, 
                    rotate: 360,
                    boxShadow: "0 0 30px rgba(147, 51, 234, 0.6)"
                  }}
                  transition={{ type: "spring", stiffness: 200, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <motion.div
                    className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500 to-purple-500"
                    animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <span className="relative z-10">{step.id}</span>
                </motion.div>

                <StrategyStep
                  step={step}
                  index={index}
                  onInterestClick={handleInterestClick}
                />
              </div>
            ))}
          </div>
        )}

        {/* Testimonials Section */}
        <TestimonialCarousel />

        {/* Wave Animation Divider */}
        <div className="relative h-32 my-20">
          <WaveAnimation color="blue" />
        </div>

        <motion.div
          className="text-center mt-32"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <motion.div
            className="relative inline-block mb-8"
            whileHover={{ scale: 1.05 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-2xl opacity-30"
              animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 relative z-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Ready to Transform Your Business?
            </motion.h2>
          </motion.div>
          
          <motion.p
            className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Join hundreds of successful companies that have achieved remarkable results with our proven methodology
          </motion.p>

          <motion.button
            className="px-10 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold text-lg shadow-2xl relative overflow-hidden group"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ 
              scale: 1.05, 
              boxShadow: "0 25px 50px rgba(0,0,0,0.3)",
              y: -5
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ delay: 0.4 }}
            onClick={() => {
              setSelectedStep(strategySteps[0]);
              setModalOpen(true);
            }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent"
              animate={{ x: [-200, 200] }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              style={{ opacity: 0.2 }}
            />
            <span className="relative z-10 flex items-center gap-2">
              Get Started Today
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </span>
          </motion.button>

          <motion.div
            className="flex flex-wrap justify-center gap-6 mt-12 items-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <span className="text-sm text-gray-500">Trusted by:</span>
            {['Fortune 500', 'Startups', 'Enterprises', 'SMBs'].map((badge, i) => (
              <motion.div
                key={i}
                className="px-4 py-2 bg-white rounded-lg shadow-md text-sm font-semibold text-gray-700"
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                whileHover={{ scale: 1.1, y: -3 }}
                transition={{ delay: 0.7 + i * 0.1, type: 'spring' }}
              >
                {badge}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Features Section */}
      <FeaturesSection />

      {/* Pricing Section */}
      <PricingSection />

      {/* FAQ Section */}
      <FAQSection />

      {/* Footer */}
      <Footer />

      <InterestModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        selectedStep={selectedStep}
        onSuccess={handleFormSuccess}
      />

      <FloatingActionButton 
        onClick={() => {
          setSelectedStep(strategySteps[0]);
          setModalOpen(true);
        }}
      />
    </div>
  );
};

export default ResponsiveStrategyFlow;
