const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors')
const Certificate = require('./models/Certificate');
const bcrypt = require('bcryptjs');
const User = require('./models/User');
 // Adjust the path to where your User model is located
 const jwt = require('jsonwebtoken');




dotenv.config();

const adminRoutes = require('./routes/adminRoutes');
const app = express();
app.use(cors({
    origin: "https://certificate-verificationn-system-frontend.vercel.app", // Your frontend URL
    methods: ["POST", "GET", "OPTIONS"],
    credentials: true // Allow credentials (cookies, authorization headers, etc.)
}));
app.use(express.json());

// app.get('/',(req,res)=>{
//  res.json("Hello")
// });

app.post('/login', async (req, res) => {
  const { username, password } = req.body;
  console.log('Received login attempt:', { username, password });

  try {
      // Find user by username
      const user = await User.findOne({ username });
      console.log('Found user:', user);

      if (!user) {
          return res.status(400).json({ message: 'User not found' });
      }

      // Compare provided password with stored hashed password
      const isMatch = await bcrypt.compare(password, user.password);
      console.log('Password comparison:', { hashedPassword: user.password, providedPassword: password, isMatch });

      if (!isMatch) {
          return res.status(400).json({ message: 'Invalid credentials' });
      }

      // Generate JWT token
      const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, {
          expiresIn: '1h',
      });
      console.log('Generated token:', token);

      // Respond with token and role
      res.json({ token, role: user.role });
  } catch (err) {
      console.error('Server error:', err);
      res.status(500).json({ message: 'Server error' });
  }
});


mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.log('Not Connected'));

app.use('/admin', adminRoutes);

app.get('/student/:id', async (req, res) => {
  try {
    const certificate = await Certificate.findOne({ certificateId: req.params.id });
    if (certificate) {
      res.json(certificate);
    } else {
      res.status(404).json({ message: 'Certificate not found' });
    }
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
