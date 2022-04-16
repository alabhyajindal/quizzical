import React from 'react';
import { decode } from '../Quiz';

export default function AnswerOption(props) {
  let styles;
  if (!props.checkAnswers && props.individualData.isSelected) {
    styles = {
      backgroundColor: '#d6dbf5',
      border: '0.8px solid #d6dbf5',
    };
  } else if (props.checkAnswers && props.individualData.isCorrect) {
    styles = {
      backgroundColor: 'lightgreen',
    };
  }

  return (
    <button
      className='answer-option'
      style={styles}
      onClick={props.selectAnswer}
    >
      {decode(props.individualData.answer)}
    </button>
  );
}
