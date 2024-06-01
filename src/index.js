require('dotenv').config();

const express = require('express');
const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.json());

app.post('*', async (req, res) => {
  res.send(req.body);
});

app.get('*', async (req, res) => {
  res.send('Hello World!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
