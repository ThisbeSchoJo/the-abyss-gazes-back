//Will be a data file that contains routes
import App from "./components/App";
import ErrorPage from "./components/ErrorPage";
import Home from "./components/Home";
import Play from "./components/Play";
import AddDilemma from "./components/AddDilemma";
import Results from "./components/Results";


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
                path: "/add-dilemma",
                element: <AddDilemma />
            },
            {
                path: "/results",
                element: <Results />
            }
        ]
    }
]

export default routes;