import React, { useEffect, useState } from "react";
import AnswerOption from "./components/AnswerOption";
import Question from "./components/Question";

export default function Quiz() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [quizData, setQuizData] = useState("default");

  useEffect(() => {
    fetch("https://opentdb.com/api.php?amount=5&type=multiple")
      .then((response) => response.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setQuizData(result.results);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  if (error) {
    return <h1>Error: {error.message}</h1>;
  } else if (!isLoaded) {
    return <h1>Loading...</h1>;
  } else {
    return <Question ques={quizData[1].question} />;
  }
}
