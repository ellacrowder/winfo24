'use strict';

(function () {
  // MODULE GLOBAL VARIABLES, CONSTANTS, AND HELPER FUNCTIONS CAN BE PLACED HERE

  window.addEventListener('load', init);

  function init() {
    // THIS IS THE CODE THAT WILL BE EXECUTED ONCE THE WEBPAGE LOADS
  }

  function exampleFunction1() {
    /* SOME CODE */
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
