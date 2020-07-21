import React from "react";
import AnswerList from "./AnswerList";

function Results({ answers, score }) {
  return (
    <>
      <p>Score: {score}</p>
      <AnswerList answers={answers} />
    </>
  );
}

export default Results;
