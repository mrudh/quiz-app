import { useState } from 'react';
import './App.css'
import questions from "./constants/questions.json";
import Question from './components/question';
import Result from './components/Result';

function App() {
  const [currentQn, setCurrentQn] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);

  const handleNextQuestion = (isCorrect) => {
    setCurrentQn(currentQn +1);
    setUserAnswers([...userAnswers, isCorrect]);
  };

  const resetQuiz = () => {
    setCurrentQn(0);
    setUserAnswers([]);
  }

  return (
    <div className='App'>
      <h1>World Quiz</h1>

      {/* Questions Component */}
      {currentQn < questions.length && (
        <Question question={questions[currentQn]}
        onAnswerClick={handleNextQuestion} />
      )}
      

      {/* Result Component */}
      {currentQn === questions.length && (
      <Result 
      userAnswers = {userAnswers}
      questions = {questions}
      resetQuiz = {resetQuiz}
      />)}
    </div>
  );
}

export default App