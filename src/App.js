import React from "react";
import "./App.css";
import Home from "./components/Home";
import Rooms from "./components/Rooms";
import SingleRoom from "./components/SingleRoom";
import Error from "./components/Error";
import { Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/rooms" exact component={Rooms} />
        <Route path="/rooms/:slug" exact component={SingleRoom} />
        <Route component={Error} />
      </Switch>
    </>
  );
}

export default App;
