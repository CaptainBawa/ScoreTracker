import id, { apiURL } from './dataAndId.js';

/*
 This function retrieves and sorts scores for a specific game from an API.
 The `addScores` function is returning an array of scores sorted in descending order based
 on the score value. */
const addScores = async () => {
  const response = await fetch(`${apiURL}/games/${id}/scores/`);
  const data = await response.json();
  const scores = data.result.sort((a, b) => b.score - a.score);
  return scores;
};

export default addScores;