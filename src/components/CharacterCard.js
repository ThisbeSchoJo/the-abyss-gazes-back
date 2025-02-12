function CharacterCard({ character }){
    return(
        <div>
            <img className="character-photo" src={character.image} alt={character.category}/>
            <h2>{character.category}</h2>
            <h2>Description: {character.description}</h2>
        </div>
    )
}

export default CharacterCard;