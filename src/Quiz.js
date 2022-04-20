import React, { useState } from 'react';
import Question from './components/Question';
import Answers from './components/Answers';
import { decode } from './App';

export default function Quiz(props) {
  console.log(props.answersData);
  return (
    <div className='quiz'>
      <Question question={decode(props.data.question)} />
      <Answers
        className='answers-cont'
        answersData={props.answersData}
        selectAnswer={props.selectAnswer}
        checkAnswers={props.checkAnswers}
      />
      <hr className='divider' />
    </div>
  );
}
