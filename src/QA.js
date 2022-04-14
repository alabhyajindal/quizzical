import React, { useEffect } from "react";
import AnswerOption from "./components/AnswerOptions";
import Question from "./components/Question";

export default function QA() {
  return (
    <div>
      <Question />
      <hr className="qa-hr" />
    </div>
  );
}
