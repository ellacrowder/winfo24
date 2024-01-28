'use strict';

/*
(function () {
  const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });

  window.addEventListener('load', init);

  function init() {
    const getPromptButton = document.getElementById('getPrompt');
    getPromptButton.addEventListener('click', getPrompt);
  }

  async function getPrompt() {
    const completion = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [
        {
          role: 'user',
          content:
            'Create a story prompt for a parent telling a 0-3 year old child a story about space, curiosity, and kindness. In your response, give a title, and only provide 6 bullet points. Each bullet point should be one very simple sentence without extra adjectives. The first 3 are under “Plot”. The first point is the beginning of the story, the second is the middle, and the third is the end. The next 3 are under “Characters”. Each different character in the story should all be planets.',
        },
      ],
      max_tokens: 100,
    });

    let title = document.getElementById('title');
    console.log('hi');
    title.textContent = completion.choices[0].message.content;
  }
})();
*/
