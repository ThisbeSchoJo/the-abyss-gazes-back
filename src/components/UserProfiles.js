import { useOutletContext } from "react-router-dom";
import User from "./User";

function UserProfiles() {
  const { userScores } = useOutletContext();
  
  return (
    <div className="results">
      <div className="userScoresContainer">
          {userScores.length === 0 ? (            
          <p>No results yet. Be the first to take the test!</p>
          ) : (
          <div>
            {userScores.map(user => (
              <User key={user.id} user={user} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
  
export default UserProfiles;
  