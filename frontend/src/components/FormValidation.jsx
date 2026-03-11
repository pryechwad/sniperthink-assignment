import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const useFormValidation = (initialValues) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const validateName = (name) => {
    return name.trim().length >= 2;
  };

  const validate = (fieldName, value) => {
    let error = '';

    switch (fieldName) {
      case 'name':
        if (!value.trim()) {
          error = 'Name is required';
        } else if (!validateName(value)) {
          error = 'Name must be at least 2 characters';
        }
        break;
      case 'email':
        if (!value.trim()) {
          error = 'Email is required';
        } else if (!validateEmail(value)) {
          error = 'Please enter a valid email address';
        }
        break;
      default:
        break;
    }

    return error;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });

    // Real-time validation
    if (touched[name]) {
      const error = validate(name, value);
      setErrors({ ...errors, [name]: error });
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched({ ...touched, [name]: true });
    const error = validate(name, value);
    setErrors({ ...errors, [name]: error });
  };

  const validateAll = () => {
    const newErrors = {};
    Object.keys(values).forEach((key) => {
      const error = validate(key, values[key]);
      if (error) newErrors[key] = error;
    });
    setErrors(newErrors);
    setTouched(Object.keys(values).reduce((acc, key) => ({ ...acc, [key]: true }), {}));
    return Object.keys(newErrors).length === 0;
  };

  const reset = () => {
    setValues(initialValues);
    setErrors({});
    setTouched({});
  };

  return {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    validateAll,
    reset,
  };
};

export const FormField = ({ 
  label, 
  name, 
  type = 'text', 
  value, 
  error, 
  touched, 
  onChange, 
  onBlur,
  placeholder,
  required = false 
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const hasError = touched && error;
  const isValid = touched && !error && value;

  return (
    <div className="relative">
      <label className="block text-sm font-medium text-gray-700 mb-2">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      
      <div className="relative">
        <motion.input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          onBlur={(e) => {
            onBlur(e);
            setIsFocused(false);
          }}
          onFocus={() => setIsFocused(true)}
          placeholder={placeholder}
          className={`w-full px-4 py-3 border-2 rounded-lg outline-none transition-all duration-300 ${
            hasError
              ? 'border-red-500 bg-red-50'
              : isValid
              ? 'border-green-500 bg-green-50'
              : isFocused
              ? 'border-blue-500 bg-blue-50'
              : 'border-gray-300 bg-white'
          }`}
          animate={{
            scale: isFocused ? 1.02 : 1,
          }}
          transition={{ duration: 0.2 }}
        />

        {/* Validation Icons */}
        <AnimatePresence>
          {hasError && (
            <motion.div
              className="absolute right-3 top-1/2 transform -translate-y-1/2"
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0, rotate: 180 }}
            >
              <span className="text-red-500 text-xl">✕</span>
            </motion.div>
          )}
          {isValid && (
            <motion.div
              className="absolute right-3 top-1/2 transform -translate-y-1/2"
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0, rotate: 180 }}
            >
              <span className="text-green-500 text-xl">✓</span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Error Message */}
      <AnimatePresence>
        {hasError && (
          <motion.div
            className="mt-2 text-sm text-red-600 flex items-center gap-2"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
          >
            <span>⚠</span>
            <span>{error}</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Success Message */}
      <AnimatePresence>
        {isValid && (
          <motion.div
            className="mt-2 text-sm text-green-600 flex items-center gap-2"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
          >
            <span>✓</span>
            <span>Looks good!</span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
