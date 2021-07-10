import { Route, Switch } from "react-router-dom";
import "./App.css";
import NavBar from "./Components/NavBar";
import Home from "./Pages/Home";

const App = () => {
  return (
    <main>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </main>
  );
};

export default App;
