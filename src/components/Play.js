import { useOutletContext } from "react-router-dom";

function Play(){
    const { dilemmas, currentQuestionIndex, handleChoice } = useOutletContext()

    const currentDilemma = dilemmas[currentQuestionIndex]

    if (currentDilemma !== undefined) {
        console.log(currentDilemma.question)
    } 
    else {
        return null
    }

    //Handle when a uesr selects a choice
    function handleChoiceSelection(choice) {
        //Get the category effects based on the selected choice
        const categoryEffects = choice.categoryEffects
        console.log(`Selected choice:${choice.text}`)
        console.log(`Category effects:${categoryEffects.utilitarian}`)
        handleChoice(categoryEffects) //call the callback to handle the answer
    }
    
            // "deontology": -10,
            // "virtueEthics": 5,
            // "careEthics": -5



    return (
        <div key={currentDilemma.id}>
            <h1>{currentDilemma.question}</h1>
            <div>
                <button onClick={() => handleChoiceSelection(currentDilemma.choices[0])}>{currentDilemma.choices[0].text}</button>
                <button onClick={() => handleChoiceSelection(currentDilemma.choices[1])}>{currentDilemma.choices[1].text}</button>
            </div>
            {/* <h3>{currentDilemma.categoryEffects.utilitarian}</h3>
            <h3>{currentDilemma.categoryEffects.deontology}</h3> */}
        </div>
    )
}

export default Play;

