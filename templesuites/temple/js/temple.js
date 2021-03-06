const requestURL = "./temple.json";

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const temples = jsonObject["temples"];
    temples.forEach(displayTemples);
  });

function displayTemples(temple) {
  let card = document.createElement("section");
  let templeName = document.createElement("h2");
  let address = document.createElement("p");
  let email = document.createElement("p");
  let phone = document.createElement("p");
  let serviceH2 = document.createElement("h2");
  let ordinanceSch = document.createElement("p");
  let sessionSch = document.createElement("p");
  let history = document.createElement("h2");
  let announced = document.createElement("p");
  let groundB = document.createElement("p");
  let dedicated = document.createElement("p");
  let rededicated = document.createElement("p");
  let closuresH2 = document.createElement("h2");
  let portrait = document.createElement("img");
  let heart = document.createElement("button");
  let services = listServ(temple.services);
  let closures = listServ(temple.closureSchedule);
  templeName.textContent = temple.templeName;
  email.textContent = temple.email;
  phone.textContent = temple.phone;
  address.textContent = temple.address;
  serviceH2.textContent = "Services";
  ordinanceSch.textContent = `Ordinance schedule: ${temple.ordinanceSchedule}`;
  sessionSch.textContent = `Session schedule: ${temple.sessionSchedule}`;
  history.textContent = "History";
  announced.textContent = `Announced: ${temple.history.announced}`;
  groundB.textContent = `Ground breaking: ${temple.history.groundbreaking}`;
  dedicated.textContent = `dedicated: ${temple.history.dedicated}`;
  rededicated.textContent = `rededicated: ${temple.history.rededicated}`;
  closuresH2.textContent = "Closures schedule";
  portrait.setAttribute("src", temple.photo);
  portrait.setAttribute("alt", `picture of ${temple.templeName}`);
  portrait.setAttribute("loading", "lazy");
  portrait.setAttribute("width", 400);
  portrait.setAttribute("height", 250);
  heart.style.padding = "20px";

  let state = true;
  let pastState = localStorage.getItem(`${temple.email} liked`);
  if (pastState != null) {
    heart.style.backgroundColor = localStorage.getItem(
      `${temple.email} backgroundColor`
    );
    heart.style.color = localStorage.getItem(`${temple.email} color`);
    heart.textContent = localStorage.getItem(`${temple.email} textContent`);
  } else {
    heart.style.backgroundColor = "red";
    heart.style.color = "black";
    heart.textContent = "unliked";
  }
  heart.addEventListener("click", () => {
    if (state) {
      heart.style.backgroundColor = "blue";
      heart.style.color = "white";
      heart.textContent = "Liked";
      localStorage.setItem(`${temple.email} liked`, "yes");
      localStorage.setItem(
        `${temple.email} backgroundColor`,
        heart.style.backgroundColor
      );
      localStorage.setItem(`${temple.email} color`, heart.style.color);
      localStorage.setItem(`${temple.email} textContent`, heart.textContent);
    } else {
      heart.style.backgroundColor = "red";
      heart.style.color = "black";
      heart.textContent = "unliked";
      localStorage.setItem(
        `${temple.email} backgroundColor`,
        heart.style.backgroundColor
      );
      localStorage.setItem(`${temple.email} color`, heart.style.color);
      localStorage.setItem(`${temple.email} textContent`, heart.textContent);
    }
    state = !state;
  });

  card.appendChild(heart);
  card.appendChild(templeName);
  card.appendChild(portrait);
  card.appendChild(address);
  card.appendChild(phone);
  card.appendChild(email);
  card.appendChild(serviceH2);
  card.appendChild(services);
  card.appendChild(ordinanceSch);
  card.appendChild(sessionSch);
  card.appendChild(closuresH2);
  card.appendChild(closures);
  card.appendChild(history);
  card.appendChild(announced);
  card.appendChild(groundB);
  card.appendChild(dedicated);
  card.appendChild(rededicated);

  document.querySelector("div.cards").appendChild(card);

  function listServ(item) {
    uList = document.createElement("ul");

    for (i of item) {
      listItem = document.createElement("li");
      listItem.textContent = i;
      uList.appendChild(listItem);
    }
    return uList;
  }
}
