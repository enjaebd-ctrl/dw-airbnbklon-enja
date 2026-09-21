const params = new URLSearchParams(window.location.search);
const id = params.get("id");

fetch(`data/${id}.json`)
    .then(response => response.json())
    .then(data => {

        const destination = document.querySelector("#destination");

        // Hent eksisterende favoritter
        const favorites = JSON.parse(localStorage.getItem("favorites")) || [];

        // Tjek om denne destination allerede er favorit
        const isFavorite = favorites.includes(id);

        destination.innerHTML = `

            <div class="destination-page">

                <div class="destination-image-container">

                    <img
                        class="destination-image"
                        src="img/${data.image}"
                        alt="${data.title}"
                    >

                    <button class="detail-favorite ${isFavorite ? "active" : ""}">
                        <span class="heart">♥</span>
                        <span>FAVORIT</span>
                    </button>

                </div>


                <div class="destination-info">

                    <p class="destination-country">
                        ${data.destination}
                    </p>

                    <h1>${data.title}</h1>

                    <h2>${data.subtitle}</h2>

                    <p class="description">
                        ${data.text}
                    </p>

                    <h3>Faciliteter</h3>

                    <ul>
                        ${data.facilities.map(facility => `
                            <li>${facility}</li>
                        `).join("")}
                    </ul>

                </div>

            </div>
        `;

        // Find favorit-knappen
        const favoriteButton = document.querySelector(".detail-favorite");

        favoriteButton.addEventListener("click", () => {

            let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

            if (favorites.includes(id)) {
                // Fjern destinationen fra favoritter
                favorites = favorites.filter(favoriteId => favoriteId !== id);

                favoriteButton.classList.remove("active");
            } else {
                // Tilføj destinationen til favoritter
                favorites.push(id);

                favoriteButton.classList.add("active");
            }

            // Gem ændringen
            localStorage.setItem("favorites", JSON.stringify(favorites));
        });

    })
    .catch(error => {
        console.error("Der skete en fejl:", error);
    });