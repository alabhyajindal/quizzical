import React, { useState } from 'react';
import Quiz from './Quiz';
import './style.css';
import { DATA } from './DATA';
import { nanoid } from 'nanoid';

// Named export
export const decode = function (html) {
  const txt = document.createElement('textarea');
  txt.innerHTML = html;
  return txt.value;
};

export default function App() {
  // State to track if the user wants to check the answers
  const [checkAnswers, setCheckAnswers] = useState(false);

  // Enabling useEffect and replacing Data with quizData in the render method will replace the data file with the data coming in from the API

  // const [quizData, setQuizData] = useState([]);
  const [answersData, setAnswersData] = useState(computeAnswers());

  // useEffect(() => {
  //   fetch("https://opentdb.com/api.php?amount=5&type=multiple")
  //     .then((response) => response.json())
  //     .then((result) => {
  //       setQuizData(result.results);
  //     });
  // }, []);

  // Function to show the result of the answers selected by the users
  const displayResults = function () {
    setCheckAnswers((prevState) => !prevState);
  };

  // Using function declaration rather than expression since this can be used for setting state
  function computeAnswers() {
    const allAnswers = [];
    DATA.map((data) =>
      data.incorrect_answers.forEach((answer, index) => {
        allAnswers.push(decode(answer));
        index == 2 && allAnswers.push(decode(data.correct_answer));
      })
    );

    // Creating an object of answers which is then used in state
    const answerObjects = [];
    allAnswers.forEach((answer) => {
      answerObjects.push({
        answer: answer,
        isSelected: false,
        isCorrect: false,
      });
    });
    answerObjects[3].isCorrect = true;
    return answerObjects;
  }

  // Function for selecting answers
  const selectAnswer = function (e) {
    if (!checkAnswers) {
      // const selectedAnswer = e.target;
      const selectedAnswerText = e.target.innerHTML;

      let updatedData = answersData.map((data) => {
        return decode(data.answer) === selectedAnswerText
          ? { ...data, isSelected: !data.isSelected }
          : { ...data, isSelected: false };
      });
      setAnswersData(updatedData);
    }
  };

  return (
    <main className='main'>
      {DATA.map((data) => {
        // console.log(data);
        return (
          <Quiz
            key={nanoid()}
            data={data}
            checkAnswers={checkAnswers}
            answersData={answersData}
            selectAnswer={selectAnswer}
          />
        );
      })}
      <button className='check' onClick={displayResults}>
        {checkAnswers ? 'Play Again' : 'Check Answers'}
      </button>
    </main>
  );
}
