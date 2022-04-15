import React, { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import Question from "./components/Question";
import AnswerOption from "./components/AnswerOption";
import { DATA } from "./DATA.js";
export default function Quiz() {
  const [quizData, setQuizData] = useState([]);

  // useEffect(() => {
  //   fetch("https://opentdb.com/api.php?amount=5&type=multiple")
  //     .then((response) => response.json())
  //     .then((result) => {
  //       setQuizData(result.results);
  //     });
  // }, []);

  const answers = [];
  DATA.map((data) => {
    answers.push(data.correct_answer);
    data.incorrect_answers.map((ans) => {
      answers.push(ans);
    });
  });

  const metaAnswer = [];
  // Divide the answers array into 5 sub arrays
  for (let i = 0; i < 20; i += 4) {
    metaAnswer.push(answers.slice(i, i + 4));
  }

  const questions = [];
  DATA.map((data) => {
    questions.push(data.question);
  });

  const questionElements = questions.map((question) => {
    return <Question key={nanoid()} ques={decodeHtml(question)} />;
  });

  const answerElements = metaAnswer.map((answer) => {
    return answer.map((x) => {
      return <AnswerOption ans={x} />;
    });
  });

  // Need to use the Fisher Yates shuffle in order to randomize the arrays. Right now the correct answer is always in the first position of the answer options

  console.log(metaAnswer);

  function decodeHtml(html) {
    const txt = document.createElement("textarea");
    txt.innerHTML = html;
    return txt.value;
  }

  return (
    <>
      {questionElements}
      <div className="answers-cont">{answerElements}</div>
    </>
  );
}

// Create an array of answers - which has both the correct answer and the incorrect answers
// Randomize the order of the array - so that the correct answer is not in the same place always
// Map over the answers array and render them below <Question />
