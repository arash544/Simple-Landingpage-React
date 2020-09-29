import React, { useContext } from "react";
import "./App.css";
import Nav from "./component/Nav/Nav";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import Card from "./component/Body/Card/Card";
import { Maincontext } from "./component/ThemeContext/ThemeContext";
import Modal from "./component/Modal/Modal";
import About from "./component/About/About";
import Contact from "./component/Contact/Contact";
import Footer from "./component/Footer/Footer/Footer";

function App() {
  const [theme, setTheme] = useContext(Maincontext);
  return (
    <div className={theme ? "dark" : "day"}>
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/" component={Card} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </Switch>
        <Footer/>
      </Router>
      </div>
  );
}

export default App;
