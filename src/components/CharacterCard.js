function CharacterCard({ character }){
    return(
        <div className="character-card">
            <img src={character.image} alt={character.category}/>
            <div className="character-info">
                <h4>{character.category}</h4>
                <h4>Description: {character.description}</h4>
            </div>
        </div>
    )
}

export default CharacterCard;