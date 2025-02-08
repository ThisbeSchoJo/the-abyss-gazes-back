import { useOutletContext } from "react-router-dom";

function Play(){
    const { dilemmas, currentQuestionIndex } = useOutletContext()

    const currentDilemma = dilemmas[currentQuestionIndex]

    if (currentDilemma !== undefined) {
        console.log(currentDilemma.question)
    } 
    else {
        return null
    }
    
    return (
        <div key={currentDilemma.id}>
            <h1>{currentDilemma.question}</h1>
            <h2>{currentDilemma.choices}</h2>
            {/* <h3>{currentDilemma.categoryEffects.utilitarian}</h3>
            <h3>{currentDilemma.categoryEffects.deontology}</h3> */}
        </div>
    )
}

export default Play;

