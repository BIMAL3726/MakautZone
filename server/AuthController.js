const User = require('./User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.register = async (req, res) => {
  const { name, email, mobile, password } = req.body;

  try {
    const existingUser = await User.findOne({ mobile });
    if (existingUser) return res.status(400).json({ msg: 'Mobile already registered' });

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({ name, email, mobile, password: hashedPassword });

    res.status(201).json({ msg: 'User registered successfully', user });
  } catch (err) {
    res.status(500).json({ msg: 'Server Error' });
  }
};

exports.login = async (req, res) => {
  const { mobile, password } = req.body;

  try {
    const user = await User.findOne({ mobile });
    if (!user) return res.status(400).json({ msg: 'User not found' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(401).json({ msg: 'Invalid' });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '7d' });

    res.json({ msg: 'Login successful', user, token });
  } catch (err) {
    res.status(500).json({ msg: 'Server Error' });
  }
};
