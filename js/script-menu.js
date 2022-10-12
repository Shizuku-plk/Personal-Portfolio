"use strict";

let hamburgerButton = document.getElementsByClassName("hamburger-btn")[0]
let navBar = document.getElementsByClassName("nav-bar")[0]

hamburgerButton.addEventListener('click', () => {
    navBar.classList.toggle('active')
})

function removeDefault(e) {
    e.preventDefault();
}

hamburgerButton.onclick = removeDefault;