import express from 'express';
import cors from 'cors';
import { translateText } from './services/apiService.js';

const app = express();
const port = 3001;

app.use(cors()); // Menambahkan middleware CORS
app.use(express.json());

app.post('/translate', async (req, res) => {
  const { text, targetLang } = req.body;
  try {
    const result = await translateText(text, targetLang);
    res.json({ translatedText: result });
  } catch (error) {
    console.error('Error translating text:', error);
    res.status(500).send('Error translating text');
  }
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
