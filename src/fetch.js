let url = "http://127.0.0.1:8000/api/shortner/";

export const fetchUrls = async () => {
  let response = await fetch(url);
  let data;

  if (response.status == 200) {
    let data = await response.json();
    // console.log(data);
  } else {
    console.log(response.error);
    alert("Something went wrong!");
  }

  return data;
};

export const SendData = (e, url, dict) => {
  e.preventDefault();
  var formdata = new FormData();
  formdata.append(`${dict.key}`, dict.value);

  var requestOptions = {
    method: "POST",
    body: formdata,
    redirect: "follow",
  };

  fetch(
    url,
    requestOptions
  )
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.log("error", error));
};
