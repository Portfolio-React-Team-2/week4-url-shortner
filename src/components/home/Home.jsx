import React from "react";
import "./home.css";
import pic1 from "../images/FETEAME2.jpeg";
import pic2 from "../images/FETAEME21.jpeg";

const Home = () => {
  return (
    <div className="home">
      <div className="form-container">
        <div className="sideimg1">
          <img src={pic2} alt="" />
        </div>

        <form action="" method="get" id="form">
          <label htmlFor="url" id="label">
            Enter your long URL here
          </label>
          <input type="url" name="url" id="url" required />

          <label htmlFor="link" id="label">
            Customize your link
          </label>
          <div id="custom">
            <input
              type="url"
              name="url"
              id="url"
              placeholder="fe-team2shorturl.me"
            />
            <input type="submit" value="alias" id="alias" disabled />
          </div>
          <div className="btns">
            <a href="/" id="myurl">
              My URL
            </a>
            <button className="fet2-it">FET2 It</button>
          </div>
        </form>
        <div className="sideimg">
          <img src={pic1} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
