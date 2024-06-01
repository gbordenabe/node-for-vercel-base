require('dotenv').config();

const express = require('express');
const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.json());

app.get('/greet', async (req, res) => {
  res.send('Hello World');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
