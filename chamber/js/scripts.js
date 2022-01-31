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