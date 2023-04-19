import id, { apiURL } from './dataAndId.js';

/*
 The function sends a POST request to a specified API endpoint with user and score data and returns
 the result.
The user parameter is a string that represents the name or identifier of the user
 whose score is being submitted.
 The score parameter is a numerical value representing the score achieved by the
 user in a game. It is used in the `displayScore` function to send a POST request to the server with
 the user's score data.
 The function `displayScore` is returning the `result` property of the JSON response from
 the API.
 */
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