import "./App.css";
import Home from "./views/LandingPage/index.tsx";
import NavBar from "./views/NavBar/index.tsx";
import OurStaff from "./views/OurStaff/index.tsx";

function App() {
  return (
    <div className="App">
      <NavBar />
      {/* <Home /> */}
      <OurStaff />
    </div>
  );
}

export default App;
