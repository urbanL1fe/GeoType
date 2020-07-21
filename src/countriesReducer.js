import {
  fetchStatus,
  gameStatus,
  randomPicker,
  pointsToDecrease,
  filterCountriesByDifficulty
} from "./utils";
import stringSimilarity from "string-similarity";

const initialCountriesReducerState = {
  countriesLeft: [],
  answers: [],
  difficulty: "",
  fStatus: fetchStatus.LOADING,
  gStatus: gameStatus.PREGAME,
  errorMessage: "",
  currentCountry: "",
  score: 0,
  streak: 0
};

function countriesReducer(state, action) {
  switch (action.type) {
    case "FETCH_STARTED":
      return {
        ...state,
        errorMessage: "An error during fetch started has occured"
      };
    case "FETCH_SUCCEDED":
      const countriesWithDifficulty = filterCountriesByDifficulty(
        action.countriesArray,
        state.difficulty
      );
      const firstCountry =
        countriesWithDifficulty[randomPicker(countriesWithDifficulty.length)];
      return {
        ...state,
        fStatus: fetchStatus.SUCCESS,
        countriesLeft: countriesWithDifficulty,
        currentCountry: firstCountry
      };
    case "FETCH_FAILED":
      return {
        ...state,
        errorMessage: action.errorMessage,
        fStatus: fetchStatus.ERROR
      };
    case "INPUT_SUBMITTED":
      const similarityBetweenSubmittedAndCorrect = stringSimilarity.compareTwoStrings(
        action.inputValue.toLowerCase(),
        state.currentCountry.capital.toLowerCase()
      );
      const isAnswerCorrect = similarityBetweenSubmittedAndCorrect > 0.5;
      const pointsToLose = pointsToDecrease(
        similarityBetweenSubmittedAndCorrect
      );
      const scoreChange = isAnswerCorrect ? 10 : pointsToLose;
      const indexToRemove = state.countriesLeft.indexOf(state.currentCountry);
      const newCountriesArr = state.countriesLeft;
      newCountriesArr.splice(indexToRemove, 1);
      console.log(newCountriesArr.length);
      const newCurrentCountry =
        newCountriesArr[randomPicker(newCountriesArr.length)];
      return {
        ...state,
        score: state.score + scoreChange,
        countriesLeft: newCountriesArr,
        currentCountry: newCurrentCountry,
        streak: isAnswerCorrect ? state.streak + 1 : 0,
        answers: [
          ...state.answers,
          {
            userInput: action.inputValue || "PASS",
            capital: state.currentCountry.capital,
            country: state.currentCountry.name,
            score: scoreChange
          }
        ]
      };
    case "TIMES_UP":
      return {
        ...state,
        gStatus: gameStatus.RESULTS
      };
    case "DIFFICULTY_PICKED":
      return {
        ...state,
        difficulty: action.difficulty,
        gStatus: gameStatus.PLAYING
      };
    default:
      throw new Error();
  }
}

export { countriesReducer, initialCountriesReducerState };
