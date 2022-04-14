import React, { useEffect, useState } from "react";
import Question from "./components/Question";

export default function Quiz() {
  // const [error, setError] = useState(null);
  // const [isLoaded, setIsLoaded] = useState(false);
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
      {quizData.map((data) => (
        <Question ques={decodeHtml(data.question)} />
      ))}
    </div>
  );
}
