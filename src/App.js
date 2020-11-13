import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Home from "./components/pages/Home";
//import About from "./components/pages/About";
//import Cards from "./components/Cards";
import Contact from "./components/pages/Contact";
import About from "./components/pages/About";
import ScrollIntoView from "./components/ScrollIntoView";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <ScrollIntoView>
          <Switch>
            <Route path="/" exact component={Home} />

            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
          </Switch>
        </ScrollIntoView>
      </Router>
    </>
  );
}

export default App;
