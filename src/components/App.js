import { Outlet, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import '../App.css';
import NavBar from "./NavBar";

function App() {
  const [dilemmas, setDilemmas] = useState([])
  const [userScores, setUserScores] = useState([]);
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
  const [userImage, setUserImage] = useState("");
  const [showForm, setShowForm] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:4000/dilemmas")
    .then(response => response.json())
    .then(dilemmasData => {
      setDilemmas(dilemmasData)
    })
  }, [])

  useEffect(() => {
    fetch("http://localhost:4000/userScores")
      .then(response => response.json())
      .then(setUserScores);
  }, []);
  
  function handleChoice(categoryEffects) {
    //updates the scores for each morality category after user chooses
    setScores((prevScores) => ({
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
      }))
      if (currentQuestionIndex === dilemmas.length -1) {
        setShowForm(true) //show form after last question
      } else {
        setCurrentQuestionIndex((prevIndex) => prevIndex +1)
      }
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (!userName) {
      alert("Please enter your name to submit your results.");
      return;
    }
    const resultData = { userName, image: userImage, scores };

    fetch("http://localhost:4000/userScores", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(resultData),
    })
      .then(response => response.json())
      .then(data => {
        setUserScores(userScores => [...userScores, data])
        navigate("./user-profiles")
      })

    setShowForm(false)
  }

  return (
    <div>
      <NavBar />
      {dilemmas.length === 0 ? (
        <div>Loading...</div>
      ) : showForm ? (
        <div>
          <h2>Enter Your Details</h2>
          <form onSubmit={handleSubmit}>
            <input 
              type="text" 
              placeholder="Enter your name" 
              value={userName} 
              onChange={(e) => setUserName(e.target.value)} 
            />
            <input 
              type="text" 
              placeholder="Enter image URL" 
              value={userImage} 
              onChange={(e) => setUserImage(e.target.value)} 
            />
            <button type="submit">Submit Results</button>
          </form>
        </div>
      ) : (
        <Outlet context={{ dilemmas, scores, currentQuestionIndex, handleChoice, userScores }} />
      )}
    </div>
  );
}

export default App;