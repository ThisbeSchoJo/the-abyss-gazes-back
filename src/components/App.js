import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import '../App.css';
import NavBar from "./NavBar";

function App() {
  //State for dilemmas
  const [dilemmas, setDilemmas] = useState([])
  //State for tracking user morality scores
  //NEED TO UPDATE AT END TO INCLUDE ALL RELEVANT CATEGORIES
  const [scores, setScores] = useState({
    idealist: 0,
    pragmatist: 0,
    guardian: 0,
    opportunist: 0,
    rebel: 0,
    cynic: 0,
    hedonist: 0,
    powerSeeker: 0,
    martyr: 0,
    trickster: 0
  })
  //State to track the current question index
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)

  //State to store user's name
  const [userName, setUserName] = useState("")
  
  useEffect(() => {
    retrieveDilemmas()
  }, [])

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
        //NEED TO UPDATE INTO LOOP INSTEAD OF HARD CODED
        //DELETE/ADD WHICHEVER ARE NEEDED AT THE END
        utilitarian: prevScores.utilitarian + (categoryEffects.utilitarian || 0),
        deontology: prevScores.deontology + (categoryEffects.deontology || 0),
        virtueEthics: prevScores.virtueEthics + (categoryEffects.virtueEthics || 0),
        careEthics: prevScores.careEthics + (categoryEffects.careEthics || 0),
        socialContractTheory: prevScores.socialContractTheory + (categoryEffects.socialContractTheory || 0),
        feministEthics: prevScores.feministEthics + (categoryEffects.feministEthics ||0)
      }
      return newScores
    })

    //move to the next question -callback function to update state
    setCurrentQuestionIndex((prevIndex) => prevIndex +1 )
  }

    //Log the final scores if at end or move to next dilemma
  useEffect(() => {
    if (!userName || currentQuestionIndex < dilemmas.length) return //Exit early if userName is not set or questions are not finished
    if (currentQuestionIndex === (dilemmas.length - 1)) {
      const resultData = {
        userName: userName,
        scores: scores
      }
      
      fetch("http://localhost:4000/userScores", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(resultData)
      })
      .then(response => response.json())
      .then(data => {
        console.log(`User scores saved:${data}`)
      })
      console.log(`Game Over - Final Scores:${scores}`)
    }
  }, [scores, currentQuestionIndex, dilemmas.length, userName])  

  return (
    <div>
      <NavBar />
      <Outlet context={
        {
          dilemmas: dilemmas,
          scores: scores,
          currentQuestionIndex: currentQuestionIndex,
          handleChoice : handleChoice,
          setUserName: setUserName,
          userName, userName,
        }
      }/>
      
    </div>
  );
}

export default App;