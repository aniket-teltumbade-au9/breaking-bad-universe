import React from "react";
import "./styles.css";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CharacterPage from "./pages/CharacterPage";
import Navbar from "./components/Navbar";
import CharacterSearch from "./components/CharacterSearch";
import CharacterSearchPage from "./pages/CharacterSearchPage";

export default function App() {
  return (
    <Router>
      <Navbar />
      <CharacterSearch />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/character/:characterId" component={CharacterPage} />
        <Route exact path="/search/:searchToken" component={CharacterSearchPage} />
        <Redirect to="/" /> 
      </Switch>
    </Router>
  );
}
