import { useOutletContext } from "react-router-dom";

function Play(){
    const { dilemmas, handleChoice } = useOutletContext()

    const currentDilemma = dilemmas[0]

    // if (currentDilemma !== undefined) {
    //     console.log(currentDilemma.question)
    // } 
    // else {
    //     return null
    // }
    if (!currentDilemma) {
        return <h1>Loading dilemma...</h1>;
      }

    //Handle when a user selects a choice
    function handleChoiceSelection(choice) {
        //Get the category effects based on the selected choice
        const categoryEffects = choice.categoryEffects
        console.log(`Selected choice:${choice.text}`)
        console.log(`Utilitarian:${categoryEffects.utilitarian}`)
        console.log(`Deontology:${categoryEffects.deontology}`)
        console.log(`Virtue Ethics:${categoryEffects.virtueEthics}`)
        console.log(`Care Ethics:${categoryEffects.careEthics}`)
        console.log(`Social Contract Theory:${categoryEffects.socialContractTheory}`)
        console.log(`Feminist Ethics: ${categoryEffects.feministEthics}`)
        handleChoice(categoryEffects) //call the callback to handle the answer
    }

    return (
        <div>
              {/* <img 
                src={currentDilemma.background} 
                alt="Dilemma background" 
                className="background-image"
              /> */}
            <div className="background" style={{ backgroundImage: `url(${currentDilemma.background})` }}>
                <div className="content">
                    <h2>{currentDilemma.question}</h2>
                    {currentDilemma.choices.map((choice, index) => (
                        <button key={index} onClick={() => handleChoiceSelection(choice)}>
                            {choice.text}
                        </button>
                ))}
              </div>
            </div>
        </div>
      );      
}

export default Play;




// {currentDilemma ? (
//     <>
//       <img 
//         src={currentDilemma.background} 
//         alt="Dilemma background" 
//         className="background-image"
//       />
//       {/* Text container that appears above the image */}
//       <div className="question-container">
//         <h2>{currentDilemma.question}</h2>
//         {currentDilemma.choices.map((choice, index) => (
//             <button key={index} onClick={() => handleChoiceSelection(choice)}>
//                 {choice.text}
//             </button>
//         ))}
//       </div>
//     </>
//   ) : (
//     <div className="loading">Loading dilemmas...</div> // Show loading until data is available
//   )}