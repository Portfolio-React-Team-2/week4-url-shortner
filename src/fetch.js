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
