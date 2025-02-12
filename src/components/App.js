import { Outlet } from "react-router-dom";
import React, { useState, useEffect } from "react";
import '../App.css';
import NavBar from "./NavBar";
// import db from "../db.json";

function App() {
  //State for dilemmas
  const [dilemmas, setDilemmas] = useState([])
  //State for tracking user morality scores
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
    fetch("http://localhost:4000/dilemmas")
    .then(response => response.json())
    .then(dilemmasData => {
      setDilemmas(dilemmasData)
    })
  }, [])
  
  function handleChoice(categoryEffects) {
    //updates the scores for each morality category after user chooses
    setScores((prevScores) => {
      const newScores = {
        idealist: prevScores.idealist + (categoryEffects.idealist || 0),
        pragmatist: prevScores.pragmatist + (categoryEffects.pragmatist || 0),
        guardian: prevScores.guardian + (categoryEffects.guardian || 0),
        opportunist: prevScores.opportunist + (categoryEffects.opportunist || 0),
        rebel: prevScores.rebel + (categoryEffects.rebel || 0),
        cynic: prevScores.cynic + (categoryEffects.cynic ||0),
        hedonist: prevScores.hedonist + (categoryEffects.hedonist ||0),
        powerSeeker: prevScores.powerSeeker + (categoryEffects.powerSeeker ||0),
        martyr: prevScores.martyr + (categoryEffects.martyr ||0),
        trickster: prevScores.trickster + (categoryEffects.trickster ||0)
      }
      return newScores
    })

    //move to the next question -callback function to update state
    setCurrentQuestionIndex((prevIndex) => prevIndex +1 )
  }

  useEffect(() => {
    if (currentQuestionIndex < dilemmas.length) return;
    if (currentQuestionIndex === dilemmas.length -1) {
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
      {dilemmas.length === 0 ? (
          <div>Loading...</div>
        ) : (
          <Outlet context={{
            dilemmas: dilemmas,
            scores: scores,          
            currentQuestionIndex: currentQuestionIndex,
            handleChoice : handleChoice,
            setUserName: setUserName,
            userName: userName,
          }}/>
        )}
      </div>
    );
}

export default App;