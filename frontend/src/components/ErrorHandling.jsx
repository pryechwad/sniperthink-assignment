import { motion } from 'framer-motion';

export const ErrorBoundaryFallback = ({ error, resetError }) => {
  return (
    <motion.div
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-50 to-orange-50 p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.div
        className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full"
        initial={{ scale: 0.8, y: 50 }}
        animate={{ scale: 1, y: 0 }}
      >
        <motion.div
          className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6"
          animate={{
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span className="text-4xl">⚠️</span>
        </motion.div>

        <h2 className="text-2xl font-bold text-gray-800 text-center mb-4">
          Oops! Something went wrong
        </h2>

        <p className="text-gray-600 text-center mb-6">
          We encountered an unexpected error. Don't worry, we're on it!
        </p>

        {error && (
          <motion.div
            className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <p className="text-sm text-red-800 font-mono">{error.message}</p>
          </motion.div>
        )}

        <motion.button
          onClick={resetError}
          className="w-full py-3 bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-lg font-semibold"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          Try Again
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export const ErrorMessage = ({ message, onRetry, onDismiss }) => {
  return (
    <motion.div
      className="bg-red-50 border-l-4 border-red-500 p-4 rounded-lg"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
    >
      <div className="flex items-start gap-3">
        <motion.span
          className="text-2xl"
          animate={{ rotate: [0, -10, 10, -10, 0] }}
          transition={{ duration: 0.5 }}
        >
          ⚠️
        </motion.span>

        <div className="flex-1">
          <h3 className="text-red-800 font-semibold mb-1">Error</h3>
          <p className="text-red-700 text-sm">{message}</p>

          <div className="flex gap-2 mt-3">
            {onRetry && (
              <motion.button
                onClick={onRetry}
                className="px-4 py-2 bg-red-600 text-white rounded-lg text-sm font-semibold"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Retry
              </motion.button>
            )}
            {onDismiss && (
              <motion.button
                onClick={onDismiss}
                className="px-4 py-2 bg-red-100 text-red-700 rounded-lg text-sm font-semibold"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Dismiss
              </motion.button>
            )}
          </div>
        </div>

        {onDismiss && (
          <motion.button
            onClick={onDismiss}
            className="text-red-400 hover:text-red-600 text-xl"
            whileHover={{ scale: 1.2, rotate: 90 }}
            whileTap={{ scale: 0.9 }}
          >
            ×
          </motion.button>
        )}
      </div>
    </motion.div>
  );
};

export const NetworkError = ({ onRetry }) => {
  return (
    <motion.div
      className="flex flex-col items-center justify-center p-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <motion.div
        className="text-6xl mb-4"
        animate={{
          y: [0, -10, 0],
        }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        📡
      </motion.div>

      <h3 className="text-xl font-bold text-gray-800 mb-2">Connection Lost</h3>
      <p className="text-gray-600 text-center mb-6">
        Please check your internet connection and try again.
      </p>

      <motion.button
        onClick={onRetry}
        className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Retry Connection
      </motion.button>
    </motion.div>
  );
};

export const NotFound = ({ message = "Page not found", onGoBack }) => {
  return (
    <motion.div
      className="flex flex-col items-center justify-center p-8"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
    >
      <motion.div
        className="text-8xl mb-4"
        animate={{
          rotate: [0, 10, -10, 0],
        }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        🔍
      </motion.div>

      <h3 className="text-3xl font-bold text-gray-800 mb-2">404</h3>
      <p className="text-gray-600 text-center mb-6">{message}</p>

      {onGoBack && (
        <motion.button
          onClick={onGoBack}
          className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Go Back
        </motion.button>
      )}
    </motion.div>
  );
};
