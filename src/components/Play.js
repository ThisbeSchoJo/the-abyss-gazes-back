import { useOutletContext } from "react-router-dom";

function Play(){
    const { dilemmas, handleChoice, currentQuestionIndex } = useOutletContext()

    const currentDilemma = dilemmas[currentQuestionIndex]

    //Handle when a user selects a choice
    function handleChoiceSelection(choice) {
        //Get the category effects based on the selected choice
        const categoryEffects = choice.categoryEffects
        console.log(`Selected choice:${choice.text}`)
        console.log(`Idealist:${categoryEffects.idealist}`)
        console.log(`Pragmatist:${categoryEffects.pragmatist}`)
        console.log(`Opportunist:${categoryEffects.opportunist}`)
        handleChoice(categoryEffects) //call the callback to handle the answer
    }

    return (
            <div>
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


// return (
//     <div>
//         <div className="background" style={{ backgroundImage: `url(${currentDilemma.background})` }}>
//             <div className="content">
//                 <h2>{currentDilemma.question}</h2>
//                 {currentDilemma.choices.map((choice, index) => (
//                     <button key={index} onClick={() => handleChoiceSelection(choice)}>
//                         {choice.text}
//                     </button>
//             ))}
//           </div>
//         </div>
//     </div>
//   ); 