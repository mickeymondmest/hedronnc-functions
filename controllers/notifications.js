// Import Dependencies

exports.email = (req, res) => {
  res.json({ message: 'Email Sent Successfully' });
}

exports.sms = (req, res) => {
  res.json({ message: 'SMS Sent Successfully' });
}
