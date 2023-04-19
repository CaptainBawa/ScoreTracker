import addScores from './add.js';

// This function displays sorted scores in a list format on a webpage.
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