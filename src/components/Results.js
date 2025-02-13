import { useState, useEffect } from "react";
// import { useOutletContext } from "react-router-dom";
import User from "./User";

function Results() {
    const [userScores, setUserScores] = useState([]);
  
    useEffect(() => {
      fetch("http://localhost:4000/userScores")
        .then(response => response.json())
        .then(setUserScores);
    }, []);
  
    return (
      <div className="results">
        <h1>All User Profiles</h1>
        <div className="userScoresContainer">
          {userScores.length === 0 ? (
            <p>No results yet. Be the first to take the test!</p>
          ) : (
            <div>
              {userScores.map(user => (
                <User key={user.id} user={user} />
              ))}
            </div>
          )}
        </div>
      </div>
    );
  }
  
  export default Results;
  















//OLD CODE WAITING TO DELETE
// const { scores } = useOutletContext()
//     const [isNameSubmitted, setIsNameSubmitted] = useState(false)
//     const [userScores, setUserScores] = useState([])
//     const [formData, setFormData] = useState({
//         userName: "",
//         image: ""
//     })

//     const handleNameSubmit = (event) => {
//         event.preventDefault()
//         if (formData.userName) {
//             setIsNameSubmitted(true)
//             console.log("Name submitted")
//             handleSubmitResults()
//         }
//         else {
//             alert("We require your name to hold you accountable for the crimes you've committed.")
//         }
//     }

//     useEffect(() => {
//         fetch("http://localhost:4000/userScores")
//         .then(response => response.json())
//         .then(userData => setUserScores(userData)) //updates state, triggering re-render
//     }, [])

//     function updateFormData(event){
//         setFormData({...formData, [event.target.name]: event.target.value}) //Dynamically update formData
//     }

//     function handleSubmitResults(){
//         const newUser = {
//             name: formData.userName,
//             image: formData.image,
//             scores
//         }

//         fetch("http://localhost:4000/userScores", {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json",
//             },
//             body: JSON.stringify(newUser),
//         })
//             .then(response => response.json())
//             .then(newUserData => {
//                 setUserScores((prevUserScores) => [...prevUserScores, newUserData]); // Update the state with new user data
//             })
//     }

// //if user hasn't submitted their name, show the form
// if (!isNameSubmitted) {
//     return (
//         <div>
//             <form onSubmit={handleNameSubmit}>
//                 <input
//                 onChange={updateFormData}
//                 type="text"
//                 id="userName"
//                 name="userName"
//                 placeholder="Enter your name"
//                 value={formData.userName}
//                 />
//                 <input 
//                 onChange={updateFormData} 
//                 type="text" 
//                 id="new-image" 
//                 name= "image" 
//                 placeholder="Enter your profile picture"
//                 value={formData.image}/>
//                 <br></br>
//                 <button type="submit">Submit</button>
//             </form>
//         </div>
//     )
// }

// //if user has submitted their name, show the results
// //I DON'T THINK THIS PART IS WORKING - NEED TO FIX
// if (!scores) {
//     return <p>Please complete the moral dilemma questions to receive results</p>
// }

// return(
//     <div className="results">
//         <h1>Your Results</h1>
//         {/* Render the current user */}
//         <User user={{
//             userName: formData.userName,
//             image: formData.image,
//             scores: scores
//         }}
//         />
        
//         <h2>All User Scores</h2>
//         <div className="userScoresContainer">
//             <ul>
//                 {userScores.map(user => (
//                     <User key={user.id} user={user} />
//                 ))}
//             </ul>
//         </div>
//     </div>
//     )
// }

// export default Results;


