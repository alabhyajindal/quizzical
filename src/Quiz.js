import React from "react";
import { nanoid } from "nanoid";
import Question from "./components/Question";
import AnswerOption from "./components/AnswerOption";
export default function Quiz(props) {
  // Need to use the Fisher Yates shuffle in order to randomize the arrays. Right now the correct answer is always in the first position of the answer options

  const decode = function (html) {
    const txt = document.createElement("textarea");
    txt.innerHTML = html;
    return txt.value;
  };

  const allAnswers = [];
  props.data.incorrect_answers.forEach((answer) => {
    allAnswers.push(answer);
  });
  allAnswers.push(props.data.correct_answer);
  console.log(allAnswers);

  const answerElements = allAnswers.map((answer) => {
    return <AnswerOption answer={decode(answer)} />;
  });

  return (
    <div key={nanoid()} className="quiz">
      <Question question={decode(props.data.question)} />
      <div className="answers-cont">{answerElements}</div>
      <hr className="divider" />
    </div>
  );
}
