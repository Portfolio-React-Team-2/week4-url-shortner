import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from "./components/home/Home";
import Navbar from "./components/navbar/Navbar";
import Sidedrawer from "./components/navbarmobile/SideDrawer";


class App extends Component {
  state = {
    sideDrawerOpen: false
  };

  sideDrawerHandler = () => {
    this.setState((prevState) => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };

  render() {
    let sideDrawer;

    if (this.state.sideDrawerOpen) {
      sideDrawer = <Sidedrawer />
    }

    return (
      <Router>
        <Navbar drawerClickHandler={this.sideDrawerHandler} />
        {sideDrawer}
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </Router>
    );
  }
}

export default App;
