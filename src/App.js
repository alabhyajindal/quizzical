import React from "react";
import Quiz from "./Quiz";
import "./style.css";
import { DATA } from "./DATA";

export default function App() {
  // Enabling useEffect and replacing Data with quizData in the render method will replace the data file with the data coming in from the API
  // const [quizData, setQuizData] = useState([]);

  // useEffect(() => {
  //   fetch("https://opentdb.com/api.php?amount=5&type=multiple")
  //     .then((response) => response.json())
  //     .then((result) => {
  //       setQuizData(result.results);
  //     });
  // }, []);

  return (
    <main className="main">
      {DATA.map((data) => {
        return <Quiz data={data} />;
      })}
    </main>
  );
}
