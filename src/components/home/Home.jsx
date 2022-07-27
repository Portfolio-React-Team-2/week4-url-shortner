import { Link } from "react-router-dom";
// import "./home.css";
import pic1 from "../images/FETEAME2.jpeg";
import pic2 from "../images/FETAEME21.jpeg";
import { HomeStyles } from "./homeStyles";
import { AiOutlineLink } from "react-icons/ai";

const Home = () => {
  return (
    <HomeStyles>
      <div className="form-container">
        <div className="sideimg1">
          <img src={pic2} alt="" />
        </div>

        <form action="" method="get" id="form">
          <label htmlFor="link" id="label">
            <AiOutlineLink /> <AiOutlineLink /> Enter your long URL here
          </label>
          <input type="url" name="url" id="url" required />

          <label htmlFor="link" id="label">
            <AiOutlineLink /> Customize your link
          </label>
          <div id="custom">
            {/* <div> */}
            <input
              type="url"
              name="url"
              id="url"
              placeholder="fe-team2shorturl.me"
            />
            {/* </div> */}
            <div className="rename">
              <p>rename</p>
            </div>
            {/* <input type="submit" value="alias" id="alias" disabled /> */}
          </div>
          <div className="btns">
            <Link to="/urls" id="myurl">
              My URLS
            </Link>
            <button className="fet2-it">FET2 It</button>
          </div>
        </form>
        <div className="sideimg">
          <img src={pic1} alt="" />
        </div>
      </div>
    </HomeStyles>
  );
};

export default Home;
