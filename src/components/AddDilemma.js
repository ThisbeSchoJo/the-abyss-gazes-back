function AddDilemma(){
    return (
        <form>
            <label >Question: </label>
            <input type="text" name= "question" />
            <br/><br/>
            <label>Background: </label>
            <input type="text" name= "background" />
            <br></br>
            <label>Choices: </label>
            <input type="text" name= "choices" />
            <br/><br/>
            <label>Category Effects: </label>
            <input type="text" name= "category-effects" />
            <br/><br/>
            <input type="submit" value="Add Dilemma" />
        </form>
    )
}

export default AddDilemma;



