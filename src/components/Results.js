import { useState } from "react";
import { useOutletContext } from "react-router-dom";


function Results() {
    const { userName, setUserName, scores } = useOutletContext()
    const [isNameSubmitted, setIsNameSubmitted] = useState(false)

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

//if user hasn't submitted their name, show the form
if (!isNameSubmitted) {
    return (
        <div>
            <h1>Enter your name</h1>
            <form onSubmit={handleNameSubmit}>
                <input
                type="text"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                placeholder="Enter your name:"
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
    </div>
    )
}

export default Results;