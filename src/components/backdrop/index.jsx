import UrlStyles from "../allUrls/AllUrls";
import { useEffect, useState } from "react";

const AllUrls = () => {
  const [urls, setUrls] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/shortner/")
      .then((response) => response.json())
      .then((data) => setUrls([...data]));
  });

  return (
    <UrlStyles>
      <h1> My Urls </h1>
      <div>
        <ul>
          <li className="head">
            <li>S/N</li>
            <li>Short Url</li>
            <li>Long Url</li>
            <li>Date</li>
          </li>
          {urls.map((url, index) => (
            <li key={url.id} className="body">
              <li>{index + 1}</li>
              <li>{url.new_link}</li>
              <li>{url.link}</li>
              <li>{url.created}</li>
            </li>
          ))}
        </ul>
      </div>
    </UrlStyles>
  );
};

export default AllUrls;
