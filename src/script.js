import './style.css';
/* These lines of code are importing two functions `displayScore` and `display` from two different
modules `./modules/display.js` and `./modules/show.js` respectively. These functions are then used
in the event listeners attached to the form submit button and the refresh button to display and
update the scores on the webpage. */
import displayScore from './modules/display.js';
import display from './modules/show.js';

const form = document.querySelector('form');

/* This code is adding an event listener to the form element that listens for a submit event.
When the form is submitted, the event listener function is executed. The function first prevents
the default form submission behavior using `event.preventDefault()`. It then retrieves the values
of the name and score inputs from the form, and passes them as arguments to the `displayScore`
function, which is imported from the `./modules/display.js` module. The `await` keyword is used
to wait for the `displayScore` function to complete before moving on to the next line of code.
After the score is displayed, the function clears the input fields by setting their values
to an empty string. Finally, it calls the `display` function, which is imported from the
`./modules/show.js` module, to update the scores displayed on the webpage. */
form.addEventListener('submit', async (event) => {
  event.preventDefault();
  const nameInput = document.querySelector('#name');
  const scoreInput = document.querySelector('#score');
  const name = nameInput.value;
  const score = scoreInput.value;
  await displayScore(name, score);
  nameInput.value = '';
  scoreInput.value = '';
  await display();
});

const button = document.querySelector('.button');
button.addEventListener('click', display);

const refreshBtn = document.querySelector('.refresh');

refreshBtn.addEventListener('click', async () => {
  await display();
});

/*
 This function adds a hover class to a button element if all input fields are empty when the mouse
 enters the button, and removes the class when the mouse leaves the button. */
const movingButton = () => {
  button.addEventListener('mouseenter', () => {
    const inputFields = document.querySelectorAll('input');
    const allInputsEmpty = Array.from(inputFields).every((input) => input.value === '');
    if (allInputsEmpty) {
      button.classList.add('hover');
    }
  });
  button.addEventListener('mouseleave', async () => {
    button.classList.remove('hover');
  });
};
movingButton();