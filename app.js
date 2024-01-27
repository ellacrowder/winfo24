const express = require('express');
const app = express();
const axios = require('axios');

const apiKey = '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';

const prompt =
  'Translate the following English text to French: "Hello, how are you?"';

async function callOpenAIChatGPT(prompt) {
  try {
    const response = await axios.post(
      'https://api.openai.com/v1/engines/davinci-codex/completions',
      {
        prompt: prompt,
        max_tokens: 50, // Adjust for desired response length
      },
      {
        headers: {
          Authorization: `Bearer ${apiKey}`,
        },
      }
    );

    const answer = response.data.choices[0].text;
    console.log('ChatGPT Response:', answer);
  } catch (error) {
    console.error('Error calling OpenAI ChatGPT:', error);
  }
}

callOpenAIChatGPT(prompt);

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
