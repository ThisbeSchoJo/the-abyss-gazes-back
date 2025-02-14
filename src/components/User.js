function User({ user }) {
  // Find the highest scoring category
  const highestScoreCategory = Object.keys(user.scores).reduce((maxCategory, category) => {
    if (user.scores[category] > user.scores[maxCategory]) {
      return category;
    }
    return maxCategory;
  }, Object.keys(user.scores)[0]); // Default to the first category if all scores are the same

  return (
    <div className="user-card">
      <img src={user.image} alt={user.userName} className="user-image"/>
      <div className="user-info">
        <h4>{user.userName}</h4>
        {Object.entries(user.scores).map(([category, score]) => (
          <p
            key={category}
            className={category === highestScoreCategory ? "highlighted-score" : ""}
          >
            {`${category.charAt(0).toUpperCase() + category.slice(1)}: ${score}`}
          </p>
        ))}
      </div>
    </div>
  );
}

export default User;