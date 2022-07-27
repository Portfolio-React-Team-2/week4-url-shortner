import UrlStyles from "./AllUrls";

const AllUrls = ({ urls }) => {
  console.log(urls);
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
              <li>{(url.created)}</li>
            </li>
          ))}
        </ul>
      </div>
    </UrlStyles>
  );
};

export default AllUrls;
