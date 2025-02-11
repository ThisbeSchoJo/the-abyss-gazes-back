import { useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import User from "./User";

function Results() {
    const { userName, setUserName, scores } = useOutletContext()
    const [isNameSubmitted, setIsNameSubmitted] = useState(false)
    const [userScores, setUserScores] = useState([])

    const handleNameSubmit = (event) => {
        event.preventDefault()
        if (userName) {
            setIsNameSubmitted(true)
            console.log("Name submitted")
        }
        else {
            alert("Please enter your name!")
        }
    }

    useEffect(() => {
        fetch("http://localhost:4000/userScores")
        .then(response => response.json())
        .then(userData => setUserScores(userData)) //updates state, triggering re-render
    }, [])

//if user hasn't submitted their name, show the form
if (!isNameSubmitted) {
    return (
        <div>
            <form onSubmit={handleNameSubmit}>
                <input
                type="text"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                placeholder="Enter your name"
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

//if user has submitted their name, show the results
if (!scores) {
    return <p>Please complete the moral dilemma questions to receive results</p>
}




return(
    <div className="results">
        <h1>Your Results</h1>
            <p>Name: {userName}</p>
            <p>Utilitarian: {scores.utilitarian}</p>
            <p>Deontology: {scores.deontology}</p>
            <p>Virtue Ethics: {scores.virtueEthics}</p>
            <p>Care Ethics: {scores.careEthics}</p>
            <p>Social Contract Theory: {scores.socialContractTheory}</p>
            <p>Feminist Ethics: {scores.feministEthics}</p>
        <h2>All User Scores</h2>
            <ul>
                {userScores.map(user => (
                    <User key={user.id} user={user} />
                ))}
            </ul>
    </div>
    )
}

export default Results;