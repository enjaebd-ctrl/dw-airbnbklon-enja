fetch("data/destinations.json")
  .then(response => response.json())
  .then(data => {
    const container = document.querySelector("#destinations");

    data.destinations.forEach(destination => {
      const article = document.createElement("article");

      article.innerHTML = `
      <div class="dis__image-wrapper">
        <img src="img/${destination.image}" alt="${destination.title}">
</div>

        <a href="data.html?id=${destination.id}">
          MORE
        </a>
      `;

      container.appendChild(article);
    });
  })
  .catch(error => console.error(error));