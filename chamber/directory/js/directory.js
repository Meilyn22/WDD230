const card = document.querySelector("#card");
const list = document.querySelector("#list");

list.onclick = () => {
    document.querySelector("main").classList.remove("card")
    document.querySelector("main").classList.toggle("list");
};

card.onclick = () => {
    document.querySelector("main").classList.remove("list")
    document.querySelector("main").classList.toggle("card");
}

const requestURL = "./data.json"

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing

    const businesses = jsonObject['businesses'];

    businesses.forEach(displayBusinesses);
  });



function displayBusinesses(business) {
    let switchCards = document.createElement("div");
    let switchList = document.createElement("div");
    let address = document.createElement("p")
    let laddress = document.createElement("p");
    let name = document.createElement("h2");
    let phone = document.createElement("p");
    let iphone = document.createElement("p");
    let website = document.createElement("a");
    let iwebsite = document.createElement("a");
    let pic = document.createElement("img");

    address.textContent = business.address
    laddress.textContent = business.address
    name.textContent = business.name
    phone.textContent = business.phone
    iphone.textContent = business.phone
    website.textContent = business.website
    iwebsite.textContent = business.website

    pic.setAttribute('src', business.image);
    pic.setAttribute('alt', `logo of ${business.name}`);
    pic.setAttribute('loading', 'lazy');

    website.setAttribute("href", business.website)
    iwebsite.setAttribute("href", business.website)
    
    switchList.appendChild(name)
    switchList.appendChild(laddress)
    switchList.appendChild(iphone)
    switchList.appendChild(iwebsite)

    switchCards.appendChild(pic)
    switchCards.appendChild(address)
    switchCards.appendChild(phone)
    switchCards.appendChild(website)

    document.querySelector(".card-section").appendChild(switchCards);
    document.querySelector(".list-section").appendChild(switchList);
}