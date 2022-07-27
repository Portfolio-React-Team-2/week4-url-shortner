import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Navbar from "./components/navbar/Navbar";
import Sidedrawer from "./components/navbarmobile/SideDrawer";
import AllUrls from "./components/allUrls";
import { fetchUrls } from "./fetch";

class App extends Component {
  state = {
    sideDrawerOpen: false,
    urls: [],
  };

  sideDrawerHandler = () => {
    this.setState((prevState) => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };

  componentDidMount(state) {
    // let resp = fetchUrls();
    // resp.then((data) => console.log(data));
    // console.log(resp);
    // this.setState((prevState) => {
    //   return { urls: "data" };
    // });

    fetch("http://127.0.0.1:8000/api/shortner/")
      .then((response) => response.json())
      // .then((data) => console.log(data))
      .then((data) =>
        this.setState((prevState) => {
          return { urls: data };
        })
      );
  }

  render() {
    let sideDrawer;
    console.log(this.state.urls);

    if (this.state.sideDrawerOpen) {
      sideDrawer = <Sidedrawer />;
    }

    return (
      <Router>
        <Navbar drawerClickHandler={this.sideDrawerHandler} />
        {sideDrawer}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="urls" element={<AllUrls urls={this.state.urls} />} />
        </Routes>
        {/* <Poplink /> */}
        {/* <Backdrop /> */}
      </Router>
    );
  }
}

export default App;
