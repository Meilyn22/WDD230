function toggleMenu() {
    document.querySelector("#nav-bar").classList.toggle("open")
    document.querySelector("#hamburger").classList.toggle("open")
}

const x =  document.querySelector("#hamburger");
x.onclick = toggleMenu;

let modifiedDate = document.querySelector('#date')
let copy = document.querySelector('#copyright')

modifiedDate.innerHTML = (document.lastModified)
copy.textContent = new Date().getFullYear()

let options = {
    day: "2-digit",
    month: "long",
    year: "numeric"
};

today = new Date()
let day = document.querySelector("#day")
let dateYear = document.querySelector("#date_year")


day.textContent = today.toLocaleDateString(today, {weekday: "long"})
dateYear.textContent = today.toLocaleString(today, options);

if(today.getDay() == 1 | today.getDay() == 2) {
   document.getElementById("banner").style.display = "block";
};

//let hidentime = new Date;

//document.querySelector("#time").value = hidentime.getTime();