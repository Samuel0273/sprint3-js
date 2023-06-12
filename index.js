let card = document.getElementById("cards-box");

function datos(event) {
  return `<div class="card bg-primary" style="width: 18rem">
          <img src="${event.image}" class="card-img-top" alt="${event.name}" />
          <div class="card-body">
            <h5 class="card-title">${event.name}</h5>
            <p class="card-text">${event.description}
            </p>
            <p>Price: ${event.price}</p>
            <a href="./assets/html/Details.html?name=${event.name}" class="btn btn-primary">More Info</a>
          </div>
        </div>`;
}
function cargarDatos(events) {
  let template = "";
  for (let event of events) {
    template += datos(event);
  }
  //console.log(template);
  card.innerHTML = template;
}
cargarDatos(data.events);
//check-box
let check = document.getElementById("check-box");

let categoryRepeat = [];

function category(event) {
  if (categoryRepeat.includes(event.category)) {
    return "";
  }
  categoryRepeat.push(event.category);
  return `<label for="${event.category}">${event.category}</label>
  <input type="checkbox" name="category" id="${event.category}" value="${event.category}" />`;
}
function cargarCategory(events) {
  let template2 = "";
  for (let event of events) {
    template2 += category(event);
  }
  //console.log(template2);
  check.innerHTML += template2;
}
cargarCategory(data.events);
//checked-event
check.addEventListener("change", () => {
  const filteredEvents = filterForCheck(data.events);
  cargarDatos(filteredEvents, card);
  applyFilters();
});

function filterForCheck(events) {
  const checkedCheckboxes = Array.from(
    document.querySelectorAll("input[type=checkbox]:checked")
  ).map((checked) => checked.value);

  if (checkedCheckboxes.length === 0) {
    return events;
  } else {
    const categoryFilter = events.filter((event) =>
      checkedCheckboxes.includes(event.category)
    );
    return categoryFilter;
  }
}

//search-event
let searchInput = document.getElementById("searchInput");

searchInput.addEventListener("input", () => {
  const filteredEvents = filterSearch(data.events);
  cargarDatos(filteredEvents, card);
  applyFilters();
});

function filterSearch(events) {
  const searchString = searchInput.value.toLowerCase();
  return events.filter((event) => {
    const eventName = event.name.toLowerCase();
    return eventName.includes(searchString);
  });
}

function applyFilters() {
  const filteredEvents = filterForCheck(data.events);
  const searchFilteredEvents = filterSearch(filteredEvents);
  cargarDatos(searchFilteredEvents, card);
}
