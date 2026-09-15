const params = new URLSearchParams(window.location.search);
const id = params.get("id");

fetch(`data/${id}.json`)
  .then(response => response.json())
  .then(data => {
    console.log(data);

  });