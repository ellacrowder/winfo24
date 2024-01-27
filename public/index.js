'use strict';

(function () {
  const express = require('express');
  const bodyParser = require('body-parser');
  const axios = require('axios');

  const app = express();
  app.use(bodyParser.json());

  const apiKey = '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';

  window.addEventListener('load', init);

  function init() {
    sendPrompt;
  }

  function sendPrompt() {}

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
