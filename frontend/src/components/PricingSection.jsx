import { motion } from 'framer-motion';
import { useState } from 'react';

const PricingSection = () => {
  const [billingCycle, setBillingCycle] = useState('monthly');

  const plans = [
    {
      name: 'Starter',
      description: 'Perfect for small teams getting started',
      monthlyPrice: 49,
      yearlyPrice: 470,
      features: [
        'Up to 5 team members',
        'Basic analytics',
        '10 GB storage',
        'Email support',
        'Mobile app access',
      ],
      color: 'from-blue-500 to-cyan-500',
      popular: false,
    },
    {
      name: 'Professional',
      description: 'For growing businesses',
      monthlyPrice: 99,
      yearlyPrice: 950,
      features: [
        'Up to 20 team members',
        'Advanced analytics',
        '100 GB storage',
        'Priority support',
        'Custom integrations',
        'API access',
        'Advanced security',
      ],
      color: 'from-purple-500 to-pink-500',
      popular: true,
    },
    {
      name: 'Enterprise',
      description: 'For large organizations',
      monthlyPrice: 299,
      yearlyPrice: 2870,
      features: [
        'Unlimited team members',
        'Enterprise analytics',
        'Unlimited storage',
        '24/7 dedicated support',
        'Custom development',
        'SLA guarantee',
        'Advanced compliance',
        'White-label options',
      ],
      color: 'from-orange-500 to-red-500',
      popular: false,
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
          className="inline-block px-4 py-2 bg-purple-100 text-purple-600 rounded-full text-sm font-semibold mb-4"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 200 }}
        >
          💰 Pricing
        </motion.span>

        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Simple, transparent{' '}
          <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            pricing
          </span>
        </h2>

        <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
          Choose the perfect plan for your business. No hidden fees.
        </p>

        {/* Billing Toggle */}
        <motion.div
          className="inline-flex items-center gap-4 bg-white rounded-full p-2 shadow-lg"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ delay: 0.2, type: 'spring' }}
        >
          <motion.button
            className={`px-6 py-2 rounded-full font-semibold transition-all ${
              billingCycle === 'monthly'
                ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                : 'text-gray-600'
            }`}
            onClick={() => setBillingCycle('monthly')}
            whileTap={{ scale: 0.95 }}
          >
            Monthly
          </motion.button>
          <motion.button
            className={`px-6 py-2 rounded-full font-semibold transition-all ${
              billingCycle === 'yearly'
                ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                : 'text-gray-600'
            }`}
            onClick={() => setBillingCycle('yearly')}
            whileTap={{ scale: 0.95 }}
          >
            Yearly
            <span className="ml-2 text-xs bg-green-100 text-green-600 px-2 py-1 rounded-full">
              Save 20%
            </span>
          </motion.button>
        </motion.div>
      </motion.div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans.map((plan, index) => (
          <motion.div
            key={index}
            className="relative"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            {plan.popular && (
              <motion.div
                className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-1 rounded-full text-sm font-semibold z-10"
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                transition={{ type: 'spring', stiffness: 200 }}
              >
                ⭐ Most Popular
              </motion.div>
            )}

            <motion.div
              className={`bg-white rounded-2xl p-8 shadow-xl relative overflow-hidden ${
                plan.popular ? 'border-2 border-purple-500' : ''
              }`}
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              {/* Background Gradient */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${plan.color} opacity-0 hover:opacity-5 transition-opacity`}
              />

              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-6">{plan.description}</p>

                <div className="mb-6">
                  <motion.div
                    className="flex items-baseline gap-2"
                    key={billingCycle}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <span className="text-5xl font-bold text-gray-900">
                      ${billingCycle === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice}
                    </span>
                    <span className="text-gray-600">
                      /{billingCycle === 'monthly' ? 'mo' : 'yr'}
                    </span>
                  </motion.div>
                  {billingCycle === 'yearly' && (
                    <motion.p
                      className="text-sm text-green-600 mt-2"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                    >
                      Save ${plan.monthlyPrice * 12 - plan.yearlyPrice}/year
                    </motion.p>
                  )}
                </div>

                <motion.button
                  className={`w-full py-3 rounded-lg font-semibold mb-6 bg-gradient-to-r ${plan.color} text-white`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get Started
                </motion.button>

                <ul className="space-y-3">
                  {plan.features.map((feature, idx) => (
                    <motion.li
                      key={idx}
                      className="flex items-center gap-3 text-gray-700"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.05 }}
                    >
                      <span className="text-green-500 text-xl">✓</span>
                      <span>{feature}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* FAQ Link */}
      <motion.div
        className="text-center mt-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <p className="text-gray-600">
          Have questions?{' '}
          <motion.a
            href="#"
            className="text-purple-600 font-semibold hover:underline"
            whileHover={{ scale: 1.05 }}
          >
            View our FAQ
          </motion.a>
        </p>
      </motion.div>
    </div>
  );
};

export default PricingSection;
