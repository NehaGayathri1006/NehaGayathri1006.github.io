export default function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;
    
    // In a real application, you might use Nodemailer to send this to an email inbox
    // or store it in a MongoDB/MySQL database. For now, we will just log it and return success.
    console.log(`New message received from ${name} (${email}):`);
    console.log(message);
    
    return res.status(200).json({ success: true, message: 'Your message has been received successfully.' });
  } else {
    res.setHeader('Allow', ['POST']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
