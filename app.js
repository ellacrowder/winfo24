const express = require('express');
const app = express();

app.use(express.static('public'));
const newConfig = new Configuration({
  apiKey: process.env.OPENAI_SECRET_KEY,
});
const openai = new OpenAIApi(newConfig);

app.post('/chat', async (req, res) => {
  try {
    const resp = await openai.createChatCompletion({
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: req.body.question }],
    });

    res.status(200).json({ message: resp.data.choices[0].message.content });
  } catch (e) {
    res.status(400).json({ message: e.message });
  }
});

const num = 5000;
const PORT = process.env.PORT || num;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
