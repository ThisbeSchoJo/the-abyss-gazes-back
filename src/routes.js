//Will be a data file that contains routes
import App from "./components/App";
import ErrorPage from "./components/ErrorPage";
import Home from "./components/Home";
import Play from "./components/Play";
import CharacterList from "./components/CharacterList";
import UserProfiles from "./components/UserProfiles";


const routes = [
    {
        path:"/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                path:"/",
                element: <Home />
            },
            {
                path: "/play",
                element: <Play />
            },
            {
                path: "/character-list",
                element: <CharacterList />
            },
            {
                path: "/user-profiles",
                element: <UserProfiles />
            }
        ]
    }
]

export default routes;