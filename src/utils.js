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
function bonusTimeFromStreak(streak) {
  let bonusTime;
  let bonusPointsinStreak = [3, 5, 10];
  if (bonusPointsinStreak.includes(streak)) {
    bonusTime = streak;
  } else if (streak > 10 && streak % 5 === 0) {
    bonusTime = 10;
  } else {
    bonusTime = null;
  }
  return bonusTime;
}

function filterCountriesByDifficulty(countriesArr, difficulty) {
  let countriesArrWithDifficulty;
  switch (difficulty) {
    case "easy":
      // >25000000
      countriesArrWithDifficulty = countriesArr.filter(el => {
        return el.population >= populationPlusPerDifficulty.EASY;
      });
      break;
    case "normal":
      //440000
      countriesArrWithDifficulty = countriesArr.filter(el => {
        return el.population >= populationPlusPerDifficulty.NORMAL;
      });
      break;
    default:
      countriesArrWithDifficulty = countriesArr;
  }
  return countriesArrWithDifficulty;
}

function filterCountriesByContinents(countriesArr, continentsArr) {
  if (continentsArr.length === 0) return countriesArr;
  return countriesArr.filter(country => {
    return continentsArr.includes(country.region);
  });
}

function capitaliseFirstLetter(s) {
  if (typeof s !== "string") return "";
  return s.charAt(0).toUpperCase() + s.slice(1);
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

const populationPlusPerDifficulty = {
  EASY: 25000000,
  NORMAL: 440000,
  HARD: 0
};
Object.freeze(populationPlusPerDifficulty);

export {
  pointsToDecrease,
  randomPicker,
  fetchStatus,
  gameStatus,
  gameDifficulty,
  filterCountriesByDifficulty,
  filterCountriesByContinents,
  bonusTimeFromStreak,
  populationPlusPerDifficulty,
  capitaliseFirstLetter
};
