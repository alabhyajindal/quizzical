import React, { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import Question from './components/Question';
import Answers from './components/Answers';
// Named export
export const decode = function (html) {
  const txt = document.createElement('textarea');
  txt.innerHTML = html;
  return txt.value;
};

// Default export of the component
export default function Quiz(props) {
  // State of answers' data which is passed down to components
  const [answersData, setAnswersData] = useState(computeAnswers());

  // Using function declaration rather than expression since this can be used for setting state
  function computeAnswers() {
    const allAnswers = [];
    props.data.incorrect_answers.forEach((answer) => {
      allAnswers.push(answer);
    });
    allAnswers.push(props.data.correct_answer);

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
    if (!props.checkAnswers) {
      const selectedAnswer = e.target;
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
    <div className='quiz'>
      <Question question={decode(props.data.question)} />
      <Answers
        className='answers-cont'
        answersData={answersData}
        selectAnswer={selectAnswer}
        checkAnswers={props.checkAnswers}
      />
      <hr className='divider' />
    </div>
  );
}
