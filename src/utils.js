function randomPicker(totalItems) {
  return Math.floor(Math.random() * (totalItems - 1));
}

function roundFirstDecimal(num) {
  const x10 = num * 10;
  return Math.round(x10) / 10;
}

function pointsToDecrease(num) {
  return -(3 - Math.round(roundFirstDecimal(num) / (1 / 6)));
}

function filterCountriesByDifficulty(countriesArr, difficulty) {
  let countriesArrWithDifficulty;
  switch (difficulty) {
    case "easy":
      // >25000000
      countriesArrWithDifficulty = countriesArr.filter(el => {
        return el.population >= 25000000;
      });
      break;
    case "normal":
      //440000
      countriesArrWithDifficulty = countriesArr.filter(el => {
        return el.population >= 440000;
      });
      break;
    default:
      countriesArrWithDifficulty = countriesArr;
  }
  return countriesArrWithDifficulty;
}

const fetchStatus = {
  LOADING: "loading",
  SUCCESS: "success",
  ERROR: "error"
};
Object.freeze(fetchStatus);

const gameStatus = {
  PREGAME: "pregame",
  PLAYING: "playing",
  RESULTS: "results"
};
Object.freeze(gameStatus);

const gameDifficulty = {
  EASY: "easy",
  NORMAL: "normal",
  HARD: "hard"
};
Object.freeze(gameDifficulty);

export {
  pointsToDecrease,
  randomPicker,
  fetchStatus,
  gameStatus,
  gameDifficulty,
  filterCountriesByDifficulty
};
