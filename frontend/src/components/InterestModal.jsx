import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { submitInterest } from '../services/api';
import RippleEffect from './RippleEffect';
import { useFormValidation, FormField } from './FormValidation';

const InterestModal = ({ isOpen, onClose, selectedStep, onSuccess }) => {
  const { values, errors, touched, handleChange, handleBlur, validateAll, reset } = useFormValidation({
    name: '',
    email: '',
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);
  const [autoCloseTimer, setAutoCloseTimer] = useState(null);

  // Auto-close modal on success
  useEffect(() => {
    if (status?.success) {
      const timer = setTimeout(() => {
        handleClose();
      }, 1500);
      setAutoCloseTimer(timer);
      return () => clearTimeout(timer);
    }
  }, [status]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (autoCloseTimer) clearTimeout(autoCloseTimer);
    };
  }, [autoCloseTimer]);

  const handleClose = () => {
    onClose();
    setTimeout(() => {
      reset();
      setStatus(null);
    }, 300);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate all fields
    if (!validateAll()) {
      return;
    }

    setLoading(true);
    setStatus(null);

    const result = await submitInterest({
      ...values,
      selectedStep: selectedStep?.title
    });

    setLoading(false);
    setStatus(result);

    if (result.success) {
      // Call onSuccess callback for toast notification
      if (onSuccess) {
        onSuccess();
      }
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleClose}
        >
          <motion.div
            className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 relative overflow-hidden"
            initial={{ scale: 0.8, y: 50 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.8, y: 50 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Progress Bar for Auto-close */}
            {status?.success && (
              <motion.div
                className="absolute top-0 left-0 h-1 bg-gradient-to-r from-green-500 to-emerald-500"
                initial={{ width: '100%' }}
                animate={{ width: '0%' }}
                transition={{ duration: 1.5, ease: 'linear' }}
              />
            )}

            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-800">
                Interested in {selectedStep?.title}?
              </h2>
              <motion.button
                onClick={handleClose}
                className="text-gray-400 hover:text-gray-600 text-2xl"
                whileHover={{ scale: 1.2, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
              >
                ×
              </motion.button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <FormField
                label="Name"
                name="name"
                type="text"
                value={values.name}
                error={errors.name}
                touched={touched.name}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Your name"
                required
              />

              <FormField
                label="Email"
                name="email"
                type="email"
                value={values.email}
                error={errors.email}
                touched={touched.email}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="your@email.com"
                required
              />

              {status && !status.success && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 rounded-lg bg-red-50 text-red-800 border border-red-200"
                >
                  {status.message}
                </motion.div>
              )}

              {status?.success && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-4 rounded-lg bg-green-50 text-green-800 border border-green-200 flex items-center gap-3"
                >
                  <motion.span
                    className="text-2xl"
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ type: "spring", stiffness: 200 }}
                  >
                    ✓
                  </motion.span>
                  <span>{status.data.message}</span>
                </motion.div>
              )}

              <motion.button
                type="submit"
                disabled={loading || status?.success}
                className={`w-full py-3 rounded-lg font-semibold text-white bg-gradient-to-r ${selectedStep?.color} ${
                  loading || status?.success ? 'opacity-50 cursor-not-allowed' : 'hover:opacity-90'
                } relative overflow-hidden`}
                whileHover={!loading && !status?.success ? { scale: 1.02 } : {}}
                whileTap={!loading && !status?.success ? { scale: 0.98 } : {}}
              >
                <RippleEffect color="rgba(255, 255, 255, 0.4)">
                  {loading ? (
                    <span className="flex items-center justify-center gap-2">
                      <motion.span
                        className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      />
                      Submitting...
                    </span>
                  ) : status?.success ? (
                    <span className="flex items-center justify-center gap-2">
                      <span>✓</span>
                      Success!
                    </span>
                  ) : (
                    'Submit Interest'
                  )}
                </RippleEffect>
              </motion.button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default InterestModal;
