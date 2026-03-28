const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Routes
app.get('/api/status', (req, res) => {
    res.json({ status: 'API is running', timestamp: new Date() });
});

app.post('/api/contact', (req, res) => {
    const { name, email, message } = req.body;
    
    // In a real application, you might use Nodemailer to send this to an email inbox
    // or store it in a MongoDB/MySQL database. For now, we will just log it and return success.
    console.log(`New message received from ${name} (${email}):`);
    console.log(message);
    
    res.status(200).json({ success: true, message: 'Your message has been received successfully.' });
});

app.listen(PORT, () => {
    console.log(`Backend server is running on http://localhost:${PORT}`);
});
