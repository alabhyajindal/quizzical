import React from "react";
import AnswerOption from "./AnswerOption";
import { nanoid } from "nanoid";

export default function Answers(props) {
  const answerElements = props.answersData.map((answers) => {
    return (
      <AnswerOption
        key={nanoid()}
        selectAnswer={props.selectAnswer}
        individualData={answers}
      />
    );
  });

  return <div className="answers-cont">{answerElements}</div>;
}
