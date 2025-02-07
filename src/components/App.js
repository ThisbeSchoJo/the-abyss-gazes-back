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


  useEffect(retrieveDilemmas, [])

  function retrieveDilemmas(){
    fetch("http://localhost:4000/questions")
    .then(response => response.json())
    .then(setDilemmas)
  }

  return (
    <div className="app">
      <NavBar />
      <Header />
      <Outlet context={
        {
          dilemmas: dilemmas,
          scores: scores
        }
      }/>
      
    </div>
  );
}

export default App;

