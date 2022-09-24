"user strict";

const hamburgerButton = document.getElementsByClassName("hamburger-btn")[0]
const navBar = document.getElementsByClassName("nav-bar")[0]

hamburgerButton.addEventListener('click', () => {
    navBar.classList.toggle('active')
})