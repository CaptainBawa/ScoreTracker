import displayGame from './display.js';
import add from './add.js';

/*
 The function listens for a form submission, adds the name and score values to a list, displays the
 list, and resets the form. */
const showScores = () => {
  const form = document.querySelector('form');
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const name = document.querySelector('#name');
    const score = document.querySelector('#score');
    add(name.value, score.value);
    displayGame();
    name.value = '';
    score.value = '';
  });
};

export default showScores;