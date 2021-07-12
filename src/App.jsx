import { Route, Switch } from "react-router-dom";
import "./App.css";
import NavBarComp from "./Components/NavBar";
import Home from "./Pages/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Contact from "./Components/Contact";

const App = () => {
  return (
    <main>
      <NavBarComp />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/skills" component={Skills} />
        <Route path="/contact-me" component={Contact} />
      </Switch>
    </main>
  );
};

export default App;
