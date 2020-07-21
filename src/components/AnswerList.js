import React, { useEffect, useReducer } from "react";

function AnswerList({ answers }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Country</th>
          <th>Your Answer</th>
          <th>Correct Answer</th>
          <th>Score</th>
        </tr>
      </thead>
      <tbody>
        {answers.map((answer, id) => (
          <tr key={id}>
            <td>{answer.country}</td>
            <td>{answer.userInput}</td>
            <td>{answer.capital}</td>
            <td>{answer.score}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default AnswerList;
