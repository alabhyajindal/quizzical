import React from 'react';
import { decode } from '../App';

export default function AnswerOption(props) {
  let styles;
  if (!props.checkAnswers && props.individualData.isSelected) {
    styles = {
      backgroundColor: '#d6dbf5',
      border: '0.8px solid #d6dbf5',
    };
  } else if (
    props.checkAnswers &&
    props.individualData.isSelected &&
    props.individualData.isCorrect
  ) {
    styles = {
      backgroundColor: '#94D7A2',
      cursor: 'auto',
    };
  } else if (
    props.checkAnswers &&
    props.individualData.isSelected &&
    !props.individualData.isCorrect
  ) {
    styles = {
      backgroundColor: '#F8BCBC',
      opacity: '0.5',
      cursor: 'auto',
    };
  } else if (props.checkAnswers) {
    styles = {
      cursor: 'auto',
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
