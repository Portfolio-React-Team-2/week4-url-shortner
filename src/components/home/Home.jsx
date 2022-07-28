import { Link } from "react-router-dom";
import { useState, useRef } from "react";
import pic1 from "../images/FETEAME2.jpeg";
import pic2 from "../images/FETAEME21.jpeg";
import { HomeStyles } from "./homeStyles";
import { AiOutlineLink } from "react-icons/ai";

const Home = () => {
  const [link, setLink] = useState("");
  const [popUp, setPopUp] = useState("");
  const [toolKit, settoolKit] = useState("");
  const urlRef = useRef();
  // let url = "http://127.0.0.1:8000/api/shortner/";
  let url = "https://portfolio-shortner.herokuapp.com/api/shortner/";

  const handleSubmit = async (e) => {
    e.preventDefault();
    var formdata = new FormData();
    formdata.append("link", link);

    var requestOptions = {
      method: "POST",
      body: formdata,
      redirect: "follow",
    };

    await fetch(url, requestOptions)
      .then(async (response) => await response.text())
      .then(async (result) => await JSON.parse(result))
      .then(async (data) => await setPopUp((prev) => data.short_link))
      // .then((data) => setPopUp((prev) => data.short_link))
      // .then((result) => console.log())
      .catch((error) => console.log("error", error));
  };

  const copyText = (e) => {
    // var copyText = document.getElementById("new_link");
    // copyText.select();
    // copyText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(popUp);
    let text = navigator.clipboard.readText().then((data) => {
      settoolKit(data);
    });
    console.log(toolKit);

    // tooltip.innerHTML = "Copied: " + copyText.value;
  };

  // useEffect(() => {
  //   settoolKit("copy");
  // }, [popUp, link]);

  return (
    <HomeStyles>
      <div className="form-container">
        <div className="sideimg1">
          <img src={pic2} alt="" />
        </div>

        <form action="" method="get" id="form" onSubmit={handleSubmit}>
          <label htmlFor="link" id="label">
            <AiOutlineLink /> <AiOutlineLink /> Enter your long URL here
          </label>
          <input
            type="url"
            name="url"
            id="url"
            required={true}
            value={link}
            onChange={(e) => setLink(e.target.value)}
          />

          <label htmlFor="link" id="label">
            <AiOutlineLink /> Customize your link
          </label>
          <div id="custom">
            <input
              type="url"
              name="new_link"
              id="url"
              disabled={true}
              value={popUp}
              placeholder="fe-team2shorturl.me"
            />
            {/* </div> */}
            <div className="rename" onClick={copyText}>
              <p>copy</p>
            </div>
            {/* <input type="submit" value="alias" id="alias" disabled /> */}
          </div>
          <div className="btns">
            <p>
              <Link to="/urls" id="myurl">
                My URLS
              </Link>
            </p>
            <button type="submit" className="fet2-it">
              <b> Shorten</b>
            </button>
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
