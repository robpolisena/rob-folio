import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Cards from "./components/Cards";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Home />
        <About />
        <Cards />
        <Switch>
          <Route path="/" exact={Home} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
