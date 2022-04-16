import React, { useState } from 'react';
import Quiz from './Quiz';
import './style.css';
import { DATA } from './DATA';
import { nanoid } from 'nanoid';

export default function App() {
  // State to track if the user wants to check the answers
  const [checkAnswers, setCheckAnswers] = useState(false);

  // Enabling useEffect and replacing Data with quizData in the render method will replace the data file with the data coming in from the API

  // const [quizData, setQuizData] = useState([]);

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

  return (
    <main className='main'>
      {DATA.map((data) => {
        return <Quiz key={nanoid()} data={data} checkAnswers={checkAnswers} />;
      })}
      <button className='check' onClick={displayResults}>
        {checkAnswers ? 'Play Again' : 'Check Answers'}
      </button>
    </main>
  );
}
