const box = document.getElementById("details-box");

const params = new URLSearchParams(location.search);

const nombre = params.get("name");

const nombreEncontrado = data.events.find((event) => event.name === nombre);
box.innerHTML = `<div class="card mb-3 bg-primary" style="max-width: 840px">
          <div class="row g-0">
            <div class="col-md-4">
              <img
                src="${nombreEncontrado.image}"
                class="detail img-fluid rounded-start"
                alt="..."
              />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">${nombreEncontrado.name}</h5>
                <p class="card-text">${nombreEncontrado.date}</p>
                <p class="card-text">
                  Enjoy your favorite dishes from different countries in a
                  unique event for the whole family.
                </p>
                <p class="card-text">Category: ${nombreEncontrado.category}</p>
                <p class="card-text">Place: ${nombreEncontrado.place}</p>
                <p class="card-text">Capacity: ${nombreEncontrado.capacity}</p>
                <p class="card-text">Price: ${nombreEncontrado.price}</p>
              </div>
            </div>
          </div>
        </div>`;
