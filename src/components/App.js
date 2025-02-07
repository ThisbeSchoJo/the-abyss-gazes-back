// import logo from './logo.svg';
import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import '../App.css';
import NavBar from "./NavBar";
import Header from "./Header";

function App() {

  //State for dilemmas
  const [dilemmas, setDilemmas] = useState([])

  //State for tracking user morality scores
  const [scores, setScores] = useState({utilitarian: 0, deontology: 0})

  //State to track the current question index
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  
  useEffect(retrieveDilemmas, [])

  function retrieveDilemmas(){
    fetch("http://localhost:4000/questions")
    .then(response => response.json())
    .then(setDilemmas)
  }

  //function will update the scores state based on user's choice
  //function will also move to the next dilemma
  //function will log the final scores when last question is answered
  function handleChoice(categoryEffects) {
    //updates the scores for each morality category after user chooses
    setScores((prevScores) => {
      const newScores = {
        utilitarian: prevScores.utilitarian + (categoryEffects.utilitarian),
        deontology: prevScores.deontology + (categoryEffects.deontology),
      }

      //Log the final scores when the last question is answered
      if (currentQuestionIndex === dilemmas.length -1) {
        console.log(`Game Over - Final Scores:${newScores}`)
      }

      return newScores
    })
  }

  return (
    <div className="app">
      <NavBar />
      <Header />
      <Outlet context={
        {
          dilemmas: dilemmas,
          scores: scores,
          currentQuestionIndex: currentQuestionIndex
        }
      }/>
      
    </div>
  );
}

export default App;

