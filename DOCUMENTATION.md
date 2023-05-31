### Documentation for Non-Technical Users

***dataAndId.js***

The dataAndId.js file contains the following code:
```
export const apiURL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api';
const id = 'Zl4d7IVkemOBAWa2fUdz';

export default id;
```

This code exports a constant variable apiURL that holds the URL for an API endpoint. It also defines a constant variable id with a specific value. The id variable is not exported.

***display.js***

The display.js file contains the following code:
```
import id, { apiURL } from './dataAndId.js';
const displayScore = async (user, score) => {
  const response = await fetch(`${apiURL}/games/${id}/scores/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify({
      user,
      score,
    }),
  });
  const data = await response.json();
  return data.result;
};

export default displayScore;
```
This code exports a function displayScore that sends a POST request to a specified API endpoint with user and score data. It takes two parameters: user (representing the name or identifier of the user) and score (representing the score achieved by the user in a game). The function returns the result property of the JSON response from the API.

***add.js***

The add.js file contains the following code:
```
import id, { apiURL } from './dataAndId.js';
const addScores = async () => {
  const response = await fetch(`${apiURL}/games/${id}/scores/`);
  const data = await response.json();
  const scores = data.result.sort((a, b) => b.score - a.score);
  return scores;
};

export default addScores;
```
This code exports a function addScores that retrieves and sorts scores for a specific game from an API. The function makes a GET request to the API endpoint and returns an array of scores sorted in descending order based on the score value.

***show.js***

The show.js file contains the following code:
```
import addScores from './add.js';

const display = async () => {
  const displayContainer = document.querySelector('.scores');
  const sortedScores = await addScores();
  displayContainer.innerHTML = '';
  sortedScores.forEach((singleGame, index) => {
    const li = document.createElement('li');
    li.textContent = `${singleGame.user} : ${singleGame.score}`;
    displayContainer.appendChild(li);
    li.style.backgroundColor = index % 2 === 0 ? '#f2f2f2' : '#fff';
    displayContainer.appendChild(li);
  });
};

export default display;
```
This code exports a function display that displays sorted scores in a list format on a webpage. The function uses the addScores function from the add.js module to retrieve the scores. It then creates list items (li) for each score and appends them to the specified HTML element with the class .scores. The list items are styled alternately using a background color based on the index.

***index.js***

The index.js file contains the following code:
```
import './style.css';
import displayScore from './modules/display.js';
import display from './modules/show.js';

const form = document.querySelector('form');

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
```
This code is the entry point of the application. It imports the displayScore and display functions from the display.js and show.js modules respectively. These functions are used in the event listeners attached to the form submit button and the refresh button to display and update the scores on the webpage.

The code adds an event listener to the form element that listens for a submit event. When the form is submitted, the event listener function is executed. It prevents the default form submission behavior, retrieves the values of the name and score inputs, and passes them as arguments to the displayScore function. After displaying the score, it clears the input fields and calls the display function to update the scores displayed on the webpage.

Additionally, the code adds event listeners to the button and refresh button for displaying and updating the scores respectively. It also includes a function that adds a hover class to the button element when all input fields are empty and removes the class when the mouse leaves the button.