function User({ user }) {
    return (
        <div className="user-card">
            {/* Display user image */}
            {/* <img src={user.image} alt={`${user.userName}'s avatar`} className="user-image" /> */}
            <div className="user-info">
                <p className="user-name">{user.userName}</p>
                <img src={user.image} alt={`${user.userName}'s avatar`} className="user-image"/>
                <p>Idealist: {user.scores.idealist}</p>
                <p>Pragmatist: {user.scores.pragmatist}</p>
                <p>Guardian: {user.scores.guardian}</p>
                <p>Opportunist: {user.scores.opportunist}</p>
                <p>Rebel: {user.scores.rebel}</p>
                <p>Cynic: {user.scores.cynic}</p>
                <p>Hedonist: {user.scores.hedonist}</p>
                <p>powerSeeker: {user.scores.powerSeeker}</p>
                <p>Martyr: {user.scores.martyr}</p>
                <p>Trickster: {user.scores.trickster}</p>
            </div>
        </div>
    )
}

export default User;