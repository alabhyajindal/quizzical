import React from "react";
import { decode } from "../Quiz";

export default function AnswerOption(props) {
  let styles;
  if (props.individualData.isCorrect) {
    styles = {
      color: "#293264",
      backgroundColor: "#d6dbf5",
      border: "0.8px solid #d6dbf5",
    };
  }

  // console.log(props.individualData);

  return (
    <button
      className="answer-option"
      style={styles}
      onClick={props.selectAnswer}
    >
      {decode(props.individualData.answer)}
    </button>
  );
}
