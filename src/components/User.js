function User({ user }) {
    return (
            <div className="user-card">
                <img src={user.image} alt={`${user.userName}'s avatar`} className="user-image"/>
                <div className="user-info">
                    <h4>{user.userName}</h4>
                    <p>Idealist: {user.scores.idealist}</p>
                    <p>Pragmatist: {user.scores.pragmatist}</p>
                    <p>Guardian: {user.scores.guardian}</p>
                    <p>Opportunist: {user.scores.opportunist}</p>
                    <p>Rebel: {user.scores.rebel}</p>
                    <p>Cynic: {user.scores.cynic}</p>                    
                    <p>Hedonist: {user.scores.hedonist}</p>
                    <p>Power Seeker: {user.scores.powerSeeker}</p>
                    <p>Martyr: {user.scores.martyr}</p>
                    <p>Trickster: {user.scores.trickster}</p>
                </div>
            </div>
    )
}

export default User;