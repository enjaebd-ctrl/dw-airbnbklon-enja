fetch("data/destinations.json")
  .then(response => response.json())
  .then(data => {
    console.log(data);

    const container = document.querySelector("#destinations");

    data.forEach(destination => {
      const article = document.createElement("article");

      article.innerHTML = `
        <img src="img/${destination.image}" alt="${destination.title}">

        <div class="card-info">
          <h2>${destination.title}</h2>
          <p>${destination.location}</p>

          <a href="destination.html?id=${destination.id}">
            MORE
          </a>
        </div>
      `;

      container.appendChild(article);
    });
  })
  .catch(error => {
    console.error("Der skete en fejl:", error);
  });

  