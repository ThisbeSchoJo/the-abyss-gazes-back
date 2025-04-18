import { useOutletContext } from "react-router-dom";

function Play(){
    const { dilemmas, handleChoice, currentQuestionIndex } = useOutletContext()

    const currentDilemma = dilemmas[currentQuestionIndex]

    //Handle when a user selects a choice
    function handleChoiceSelection(choice) {
        //Get the category effects based on the selected choice
        const categoryEffects = choice.categoryEffects
        handleChoice(categoryEffects) //call the callback to handle the answer
    }

    return (
            <div key={currentDilemma.id}>
                <div className="background" style={{ backgroundImage: `url(${currentDilemma.background})` }}>
                    <div className="dilemma-box">
                        <h4>{currentDilemma.question}</h4>
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

