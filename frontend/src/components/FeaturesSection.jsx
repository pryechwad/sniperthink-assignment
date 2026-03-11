import { motion } from 'framer-motion';

const FeaturesSection = () => {
  const features = [
    {
      icon: '🚀',
      title: 'Lightning Fast',
      description: 'Deploy your strategy in days, not months. Our streamlined process gets you results quickly.',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: '💡',
      title: 'Data-Driven Insights',
      description: 'Make informed decisions with real-time analytics and actionable intelligence.',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: '🎯',
      title: 'Precision Targeting',
      description: 'Reach the right audience at the right time with our advanced targeting algorithms.',
      color: 'from-orange-500 to-red-500',
    },
    {
      icon: '🔒',
      title: 'Enterprise Security',
      description: 'Bank-level encryption and compliance with SOC 2, GDPR, and HIPAA standards.',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: '⚡',
      title: 'Real-Time Collaboration',
      description: 'Work seamlessly with your team across time zones with live updates.',
      color: 'from-yellow-500 to-orange-500',
    },
    {
      icon: '📊',
      title: 'Advanced Analytics',
      description: 'Track every metric that matters with customizable dashboards and reports.',
      color: 'from-indigo-500 to-purple-500',
    },
  ];

  return (
    <div className="py-20 px-4">
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <motion.span
          className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold mb-4"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 200 }}
        >
          ✨ Features
        </motion.span>
        
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Everything you need to{' '}
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            succeed
          </span>
        </h2>
        
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Powerful features designed to accelerate your growth and maximize ROI
        </p>
      </motion.div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="relative group"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <motion.div
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-shadow relative overflow-hidden"
              whileHover={{ y: -10 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              {/* Gradient Background on Hover */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity`}
              />

              {/* Icon */}
              <motion.div
                className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center text-3xl mb-6 relative z-10`}
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
              >
                {feature.icon}
              </motion.div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-3 relative z-10">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed relative z-10">
                {feature.description}
              </p>

              {/* Hover Arrow */}
              <motion.div
                className="mt-4 flex items-center gap-2 text-blue-600 font-semibold opacity-0 group-hover:opacity-100 transition-opacity relative z-10"
                initial={{ x: -10 }}
                whileHover={{ x: 0 }}
              >
                <span>Learn more</span>
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
              </motion.div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default FeaturesSection;
