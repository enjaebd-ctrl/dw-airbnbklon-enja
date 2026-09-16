const params = new URLSearchParams(window.location.search);
const id = params.get("id");

fetch(`data/${id}.json`)
    .then(response => response.json())
    .then(data => {

        const destination = document.querySelector("#destination");

        destination.innerHTML = `
            
            <div class="destination-page">

                <img 
                    class="destination-image"
                    src="img/${data.image}" 
                    alt="${data.title}"
                >

                  <button class="detail-favorite">
                        ♥ <span>FAVORIT</span>
                    </button>
                    
                <div class="destination-info">

                    <p class="destination-country">
                        ${data.destination}
                    </p>

                    <h1>${data.title}</h1>

                    <h2>${data.subtitle}</h2>

                    <p class="description">
                        ${data.text}
                    </p>

                    <h3>Facilities</h3>

                    <ul>
                        ${data.facilities.map(facility => `
                            <li>${facility}</li>
                        `).join("")}
                    </ul>

                

                </div>

            </div>
        `;
    })
    .catch(error => {
        console.error("Der skete en fejl:", error);
    });