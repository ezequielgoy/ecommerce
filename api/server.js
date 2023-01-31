import express from 'express';
import data from './data.js';
import cors from 'cors';

const app = express();

app.use(cors());

app.get('/api/products', async (req, res) => {
  try {
    await res.send(data.products);
  } catch (error) {
    console.log(error);
  }
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`server at http://localhost:${port}`);
});
