import { game } from './add.js';

// The function displays the game scores in a list format on the webpage.
const displayGame = () => {
  const displayContainer = document.querySelector('.scores');
  displayContainer.innerHTML = '';
  game.forEach((singleGame, index) => {
    const li = document.createElement('li');
    li.textContent = `${singleGame.userName} : ${singleGame.userScore}`;
    displayContainer.appendChild(li);
    li.style.backgroundColor = index % 2 === 0 ? '#f2f2f2' : '#fff';
  });
};
export default displayGame;