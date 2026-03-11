import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: 'How quickly can we get started?',
      answer: 'You can get started immediately! Our onboarding process takes less than 5 minutes. Simply sign up, and our team will guide you through the setup process.',
      icon: '⚡',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      question: 'What kind of support do you offer?',
      answer: 'We offer 24/7 email support for all plans, priority support for Professional plans, and dedicated account managers for Enterprise customers. Our average response time is under 2 hours.',
      icon: '💬',
      color: 'from-purple-500 to-pink-500',
    },
    {
      question: 'Can I change my plan later?',
      answer: 'Absolutely! You can upgrade or downgrade your plan at any time. Changes take effect immediately, and we\'ll prorate any charges or credits.',
      icon: '🔄',
      color: 'from-orange-500 to-red-500',
    },
    {
      question: 'Is my data secure?',
      answer: 'Yes! We use bank-level encryption (AES-256) and are compliant with SOC 2, GDPR, and HIPAA standards. Your data is backed up daily and stored in secure data centers.',
      icon: '🔒',
      color: 'from-green-500 to-emerald-500',
    },
    {
      question: 'Do you offer refunds?',
      answer: 'We offer a 30-day money-back guarantee. If you\'re not satisfied with our service, contact us within 30 days for a full refund, no questions asked.',
      icon: '💰',
      color: 'from-yellow-500 to-orange-500',
    },
    {
      question: 'Can I integrate with other tools?',
      answer: 'Yes! We offer integrations with 100+ popular tools including Slack, Salesforce, HubSpot, and more. Custom integrations are available for Enterprise plans.',
      icon: '🔗',
      color: 'from-indigo-500 to-purple-500',
    },
  ];

  return (
    <div className="py-20 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <motion.span
          className="inline-block px-4 py-2 bg-green-100 text-green-600 rounded-full text-sm font-semibold mb-4"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 200 }}
        >
          ❓ FAQ
        </motion.span>

        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 font-heading">
          Got{' '}
          <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
            questions?
          </span>
        </h2>

        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          We've got answers. Can't find what you're looking for? Chat with our team.
        </p>
      </motion.div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            className={`relative group cursor-pointer ${
              openIndex === index ? 'md:col-span-2' : ''
            }`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            layout
          >
            <motion.div
              className={`bg-white rounded-2xl shadow-lg overflow-hidden border-2 transition-all ${
                openIndex === index
                  ? 'border-transparent shadow-2xl'
                  : 'border-transparent hover:border-gray-200'
              }`}
              whileHover={{ y: -5 }}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              {/* Gradient Background on Active */}
              {openIndex === index && (
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${faq.color} opacity-5`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.05 }}
                />
              )}

              <div className="p-6 relative z-10">
                <div className="flex items-start gap-4">
                  {/* Icon */}
                  <motion.div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${faq.color} flex items-center justify-center text-2xl flex-shrink-0`}
                    animate={{
                      scale: openIndex === index ? [1, 1.1, 1] : 1,
                      rotate: openIndex === index ? [0, 5, -5, 0] : 0,
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    {faq.icon}
                  </motion.div>

                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="text-lg font-bold text-gray-900 group-hover:text-gray-700 transition-colors">
                        {faq.question}
                      </h3>
                      
                      <motion.div
                        className={`w-8 h-8 rounded-lg bg-gradient-to-br ${faq.color} flex items-center justify-center text-white flex-shrink-0`}
                        animate={{ rotate: openIndex === index ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <span className="text-sm font-bold">
                          {openIndex === index ? '−' : '+'}
                        </span>
                      </motion.div>
                    </div>

                    <AnimatePresence>
                      {openIndex === index && (
                        <motion.div
                          initial={{ height: 0, opacity: 0, marginTop: 0 }}
                          animate={{ height: 'auto', opacity: 1, marginTop: 16 }}
                          exit={{ height: 0, opacity: 0, marginTop: 0 }}
                          transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
                          className="overflow-hidden"
                        >
                          <p className="text-gray-600 leading-relaxed">
                            {faq.answer}
                          </p>
                          
                          <motion.button
                            className={`mt-4 px-4 py-2 bg-gradient-to-r ${faq.color} text-white rounded-lg text-sm font-semibold`}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                          >
                            Learn More →
                          </motion.button>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Still have questions */}
      <motion.div
        className="text-center mt-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
      >
        <div className="bg-white rounded-2xl shadow-xl p-8 max-w-2xl mx-auto">
          <motion.div
            className="text-5xl mb-4"
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            💡
          </motion.div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Still have questions?</h3>
          <p className="text-gray-600 mb-6">
            Can't find the answer you're looking for? Our team is here to help.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <motion.button
              className="px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-full font-semibold"
              whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(0,0,0,0.2)" }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Support
            </motion.button>
            <motion.button
              className="px-6 py-3 bg-gray-100 text-gray-700 rounded-full font-semibold hover:bg-gray-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Schedule a Call
            </motion.button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default FAQSection;
