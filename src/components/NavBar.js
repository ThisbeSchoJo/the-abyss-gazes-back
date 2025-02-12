import { NavLink } from "react-router-dom";

function NavBar(){
    return(
        <nav className="navbar">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/play">Play Game</NavLink>
            <NavLink to="/results">Your Results</NavLink>
            <NavLink to="/character-list">Moral Characters</NavLink>
        </nav>
    )
}

export default NavBar;