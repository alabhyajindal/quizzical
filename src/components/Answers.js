import React from "react";
import AnswerOption from "./AnswerOption";
import { nanoid } from "nanoid";

export default function Answers(props) {
  const answerText = props.answersData.map((answerData) => {
    return answerData.answer;
  });

  // console.log(props.answersData);

  const answerElements = answerText.map((answer) => {
    return (
      <AnswerOption
        key={nanoid()}
        text={answer}
        selectAnswer={props.selectAnswer}
        answersData={props.answersData}
      />
    );
  });

  return <div className="answers-cont">{answerElements}</div>;
}
