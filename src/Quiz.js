import React, { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import Question from "./components/Question";
import AnswerOption from "./components/AnswerOption";

export default function Quiz() {
  const [quizData, setQuizData] = useState([]);

  useEffect(() => {
    fetch("https://opentdb.com/api.php?amount=5&type=multiple")
      .then((response) => response.json())
      .then((result) => {
        setQuizData(result.results);
      });
  }, []);

  function decodeHtml(html) {
    const txt = document.createElement("textarea");
    txt.innerHTML = html;
    return txt.value;
  }

  return (
    <div>
      {quizData.map((data, index) => {
        return (
          <div key={nanoid()}>
            <Question ques={decodeHtml(data.question)} />
            <AnswerOption ans={data.correct_answer} />
          </div>
        );
      })}
    </div>
  );
}

// Create an array of answers - which has both the correct answer and the incorrect answers
// Randomize the order of the array - so that the correct answer is not in the same place always
// Map over the answers array and render them below <Question />
