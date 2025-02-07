// import logo from './logo.svg';
import { Outlet } from "react-router-dom";
import '../App.css';
import NavBar from "./NavBar";
import Header from "./Header";

function App() {
  return (
    <div className="app">
      <NavBar />
      <Header />
      <Outlet context={
        {}
      }/>
      
    </div>
  );
}

export default App;

