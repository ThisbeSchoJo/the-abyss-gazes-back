function User({ user }) {
    return (
        <li>
            <h3>{user.userName}</h3>
            <p>Utilitarian: {user.scores.utilitarian}</p>
            <p>Deontology: {user.scores.deontology}</p>
            <p>Virtue Ethics: {user.scores.virtueEthics}</p>
            <p>Care Ethics: {user.scores.careEthics}</p>
            <p>Social Contract Theory: {user.scores.socialContractTheory}</p>
            <p>Feminist Ethics: {user.scores.feministEthics}</p>
        </li>
    )
}

export default User;