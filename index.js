fetch("data/destinations.json")
  .then(response => response.json())
  .then(data => {
    const container = document.querySelector("#destinations");

    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];

    data.destinations.forEach(destination => {
      const article = document.createElement("article");

      const isFavorite = favorites.includes(destination.id);

      article.innerHTML = `
            <div class="dis__image-wrapper">
                    <img src="img/${destination.image}" alt="${destination.title}">
                </div>

                <div class="card-bottom">
                    <button class="favorite ${isFavorite ? "active" : ""}" 
                            data-id="${destination.id}">
                        ♥
                    </button>

                    <a href="data.html?id=${destination.id}">
                        MORE
                    </a>
                </div>
            `;

      container.appendChild(article);
    });

    // Gør hjerterne klikbare
    document.querySelectorAll(".favorite").forEach(button => {
      button.addEventListener("click", () => {
        const id = button.dataset.id;
        let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

        if (favorites.includes(id)) {
          // Fjern fra favoritter
          favorites = favorites.filter(favoriteId => favoriteId !== id);
          button.classList.remove("active");
        } else {
          // Tilføj til favoritter
          favorites.push(id);
          button.classList.add("active");
        }

        localStorage.setItem("favorites", JSON.stringify(favorites));
      });
    });
  })
  .catch(error => console.error(error));