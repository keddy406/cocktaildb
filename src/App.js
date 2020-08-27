import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//import pages
import Home from "./pages/Home";
import About from "./pages/About";
import SingleCocktail from "./pages/SingleCocktail";
import Error from "./pages/Error";
//import Navbar
import NavBar from "./components/Navbar";

export default function App() {
  return (
    <Router>
      <NavBar />
      {/* Switch render first child match url */}
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/cocktail/:id">
          <SingleCocktail />
        </Route>
        {/* all path match as * */}
        <Route path="*">
          <Error />
        </Route>
      </Switch>
    </Router>
  );
}
