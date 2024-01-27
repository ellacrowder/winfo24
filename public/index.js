'use strict';

(function () {
  const apiKey = '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';

  window.addEventListener('load', init);

  function init() {
    sendPrompt();
  }

  async function sendPrompt() {
    const prompt =
      'Translate the following English text to French: "Hello, how are you?"';

    try {
      const response = await axios.post(
        '/chatgpt',
        { prompt },
        { headers: { Authorization: `Bearer ${apiKey}` } }
      );

      const answer = response.data.answer;
      console.log('ChatGPT Response:', answer);

      // Use the answer as needed in your client-side code
    } catch (error) {
      console.error('Error calling OpenAI ChatGPT from client:', error);
    }
  }

  function exampleFunction2(someVariable) {
    /* SOME CODE */
    return something;
  }

  /** ------------------------------ Helper Functions  ------------------------------ */
  function id(idName) {
    return document.getElementById(idName);
  }

  function qs(selector) {
    return document.querySelector(selector);
  }

  function qsa(selector) {
    return document.querySelectorAll(selector);
  }

  function gen(tagName) {
    return document.createElement(tagName);
  }
})();
