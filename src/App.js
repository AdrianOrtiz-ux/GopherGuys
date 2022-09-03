import "./App.css";
import Home from "./views/LandingPage/index.tsx";
import NavBar from "./views/NavBar/index.tsx";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
    </div>
  );
}

export default App;
