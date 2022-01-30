function toggleMenu() {
    document.querySelector("#nav-bar").classList.toggle("open")
    document.querySelector("#hamburger").classList.toggle("open")
}

const x =  document.querySelector("#hamburger");
x.onclick = toggleMenu;