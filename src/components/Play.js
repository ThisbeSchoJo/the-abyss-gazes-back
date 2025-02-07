import { useOutletContext } from "react-router-dom";

function Play(){
    const { dilemmas } = useOutletContext()

    const dilemmaComponents = dilemmas.map(dilemma => {
        return(
            <div key={dilemma.id}>
                <h1>{dilemma.question}</h1>
                <h2>{dilemma.choices}</h2>
                <h3>{dilemma.categoryEffects.utilitarian}</h3>
                <h3>{dilemma.categoryEffects.deontology}</h3>
            </div>
        )
    })
    return (
        <div>
            {dilemmaComponents}
        </div>
    )
}

export default Play;

