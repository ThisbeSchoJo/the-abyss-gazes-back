import NavBar from "./NavBar";
import Header from "./Header";

function ErrorPage(){
    return(
        <div className="app">
            <NavBar />
            <Header />
            <h4>You have wandered into the abyss.... Please return home.</h4>
        </div>
    )
}

export default ErrorPage;
