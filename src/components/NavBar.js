import { NavLink } from "react-router-dom";

function NavBar(){
    return(
        <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/play">Play Game</NavLink>
            <NavLink to="/results">Your Results</NavLink>
            <NavLink to="/add-dilemma">Add Dilemma</NavLink>
        </nav>
    )
}

export default NavBar;