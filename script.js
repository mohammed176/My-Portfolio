
const theameSwitch = document.getElementById("theameSwitch");
const body = document.body;


window.addEventListener("DOMContentLoaded", () => {
    if(localStorage.getItem("theme") === "light") {
        body.classList.add("lightmode");
        theameSwitch.innerHTML = '<i class="fa-solid fa-sun"></i>';
    } else {
        body.classList.remove("lightmode");
        theameSwitch.innerHTML = '<i class="fa-solid fa-moon"></i>';
    }
});


theameSwitch.addEventListener("click", () => {
    body.classList.toggle("lightmode");

    if(body.classList.contains("lightmode")) {
        theameSwitch.innerHTML = '<i class="fa-solid fa-sun"></i>';
        localStorage.setItem("theme", "light");
    } else {
        theameSwitch.innerHTML = '<i class="fa-solid fa-moon"></i>';
        localStorage.setItem("theme", "dark");
    }
});
