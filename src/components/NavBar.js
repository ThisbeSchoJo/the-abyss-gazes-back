import { NavLink } from "react-router-dom";

function NavBar(){
    return(
        <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/add-dilemma">Add Dilemma</NavLink>
            <NavLink to="/results">Your Results</NavLink>
        </nav>
    )
}

export default NavBar;