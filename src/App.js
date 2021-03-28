
import './App.css';

import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from "./components/NavTabs";
import Home from "./components/pages/Home/Home";
import Discover from "./components/pages/Discover/Discover";
import Search from "./components/pages/Search/Search";
import Contact from "./components/pages/Contact/Contact";


function App() {


  return (
    <Router>
      <div>
        <NavTabs />
        <Route exact path="/" component={Home} />
        <Route exact path="/discover" component={Discover} />
        <Route path="/search" component={Search} />
        <Route path="/contact" component={Contact} />
      </div>
    </Router>
  );
}

export default App;
