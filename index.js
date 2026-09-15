fetch("data/destinations.json")
  .then(response => response.json())
  .then(data => {
    const container = document.querySelector("#destinations");

    data.destinations.forEach(destination => {
      const article = document.createElement("article");

      article.innerHTML = `
        <img src="img/${destination.image}" alt="${destination.title}">

        <h2>${destination.title}</h2>
        <p>${destination.destination}</p>

        <a href="destination.html?id=${destination.id}">
          MORE
        </a>
      `;

      container.appendChild(article);
    });
  })
  .catch(error => console.error(error));