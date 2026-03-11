const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Store interests in memory (in production, use a database)
const interests = [];

app.post('/api/interest', (req, res) => {
  const { name, email, selectedStep } = req.body;

  // Validation
  if (!name || !email || !selectedStep) {
    return res.status(400).json({ 
      success: false, 
      message: 'Name, email, and selected step are required' 
    });
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ 
      success: false, 
      message: 'Invalid email format' 
    });
  }

  // Simulate processing delay
  setTimeout(() => {
    const interest = {
      id: Date.now(),
      name,
      email,
      selectedStep,
      timestamp: new Date().toISOString()
    };

    interests.push(interest);

    res.status(201).json({
      success: true,
      message: 'Thank you for your interest! We will contact you soon.',
      data: interest
    });
  }, 800);
});

app.get('/api/interests', (req, res) => {
  res.json({ success: true, data: interests });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
