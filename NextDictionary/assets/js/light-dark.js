const lightDark = document.querySelector(".light-dark")
const originalCSS = document.querySelector("#original-css")
const ndLogo = document.querySelector("#next-dictionary-logo")

function lightMode() {
    originalCSS.href = "./assets/css/light-style.css"
    lightDark.innerHTML = 
    `<img src="./assets/images/moon.png" id="dark-mode" alt="dark-mode" width="50px" onclick="darkMode()">`
    ndLogo.src = "./assets/images/next-dictionary-logo-3.png"
}

function darkMode() {
    originalCSS.href = "./assets/css/style.css"
    lightDark.innerHTML = 
    `<img src="./assets/images/sun.png" id="light-mode" alt="light-mode" width="50px" onclick="lightMode()">`
    ndLogo.src = "./assets/images/next-dictionary-logo-2.png"
}