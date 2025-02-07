// import logo from './logo.svg';
import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import '../App.css';
import NavBar from "./NavBar";
import Header from "./Header";

function App() {

  const [question, setQuestion] = useState([])

  useEffect(retrieveQuestion, [])

  function retrieveQuestion(){
    fetch("http://localhost:4000/questions")
    .then(response => response.json())
    .then(setQuestion)
  }

  return (
    <div className="app">
      <NavBar />
      <Header />
      <Outlet context={
        {
          question: question
        }
      }/>
      
    </div>
  );
}

export default App;

