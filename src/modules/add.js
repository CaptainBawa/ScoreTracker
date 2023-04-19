/* This line of code is exporting a constant variable named `game` that is either set to the parsed
value of the `games` key in the local storage or an empty array if the `games` key is not found in
the local storage. This allows other modules to import and use the `game` variable. */
export const game = JSON.parse(localStorage.getItem('games')) || [];

/*
 The function adds a new game score with a username and score to a game array and stores it in local
 storage. */
const addScore = (name, score) => {
  if (name.trim() !== '' && score.trim() !== '') {
    const gameObj = { userName: name, userScore: score };
    game.push(gameObj);
    localStorage.setItem('games', JSON.stringify(game));
  }
};

/* is exporting the addScore function as the default export of the module.
This means that when another module imports this module, they can import the addScore function
using `import addScore from './module'` without needing to specify the function name in curly
braces. */
export default addScore;