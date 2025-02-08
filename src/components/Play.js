import { useOutletContext } from "react-router-dom";

function Play(){
    const { dilemmas, currentQuestionIndex, onAnswered } = useOutletContext()

    const currentDilemma = dilemmas[currentQuestionIndex]

    if (currentDilemma !== undefined) {
        console.log(currentDilemma.question)
    } 
    else {
        return null
    }

    //Handle when a uesr selects a choice
    function handleChoiceSelection(choice) {
        console.log(`Selected choice:${choice}`)
        // onAnswered(choice) //call the callback to handle the answer
    }
    
    return (
        <div key={currentDilemma.id}>
            <h1>{currentDilemma.question}</h1>
            <div>
                <button onClick={() => handleChoiceSelection(currentDilemma.choices[0])}>{currentDilemma.choices[0]}</button>
                <button onClick={() => handleChoiceSelection(currentDilemma.choices[1])}>{currentDilemma.choices[1]}</button>
            </div>
            {/* <h3>{currentDilemma.categoryEffects.utilitarian}</h3>
            <h3>{currentDilemma.categoryEffects.deontology}</h3> */}
        </div>
    )
}

export default Play;

