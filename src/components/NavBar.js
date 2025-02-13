import React, { useState, useRef } from 'react';
import { NavLink } from "react-router-dom";

function Navbar() {
    // Ref to the audio element
    const audioRef = useRef(null);
    // Handle button click to play/pause music
    const handleMusicToggle = () => {
        audioRef.current.play();
    };

  return(
    <div>
        <nav className="navbar">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/play">Play Game</NavLink>
            <NavLink to="/user-profiles">User Profiles</NavLink>
            <NavLink to="/character-list">Moral Characters</NavLink>
            <button onClick={handleMusicToggle}style={{ fontSize: '30px', background: 'transparent', border: 'none', cursor: 'pointer' }}>🌩</button>
        </nav>
        {/* Audio element */}
        <audio ref={audioRef} loop>
            <source src="./audio/thunderstorm.mp3" type="audio/mp3" />
        </audio>
        </div>
)
}

export default Navbar;





// import { NavLink } from "react-router-dom";

// function NavBar(){
//     return(
//         <nav className="navbar">
//             <NavLink to="/">Home</NavLink>
//             <NavLink to="/play">Play Game</NavLink>
//             <NavLink to="/user-profiles">User Profiles</NavLink>
//             <NavLink to="/character-list">Moral Characters</NavLink>
//             <button>Play Music</button>
//         </nav>
//     )
// }

// export default NavBar;