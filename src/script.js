// These lines of code are importing modules and stylesheets into the JavaScript file.
import './style.css';
import displayGame from './modules/display.js';
import showScores from './modules/show.js';

/* These lines of code are selecting the HTML element with the ID "button" and adding
an event listener to it. When the button is clicked, the `showScores` function will be executed. */
const button = document.querySelector('#button');
button.addEventListener('click', showScores);

/* is adding an event listener to the window object. When the window has finished loading, the
`displayGame` function will be executed. This ensures that the `displayGame` function is only
called after all the resources on the page have finished loading, which can prevent errors and
improve performance. */
window.addEventListener('load', () => {
  displayGame();
});
