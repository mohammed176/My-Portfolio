const theameSwitch = document.getElementById("theameSwitch");
const body = document.body;
let logoPng = document.getElementById("logoPng");
const langBtn = document.querySelector("#sun-lang button:first-child");
const translatableElements = document.querySelectorAll("[data-ar]");

// --- Theme ---
window.addEventListener("DOMContentLoaded", () => {
    // Theme
    if(localStorage.getItem("theme") === "light") {
        body.classList.add("lightmode");
        if(theameSwitch) theameSwitch.innerHTML = '<i class="fa-solid fa-sun"></i>';
    } else {
        body.classList.remove("lightmode");
        if(theameSwitch) theameSwitch.innerHTML = '<i class="fa-solid fa-moon"></i>';
    }

    // Language
    if(localStorage.getItem("lang") === "ar") {
        translateToArabic(false);
        if(langBtn) langBtn.innerHTML="EN";
    } else {
        translateToEnglish(false);
        if(langBtn) langBtn.innerHTML="عربي";
    }
});

if(theameSwitch){
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
}

// --- Language Functions ---
function translateToArabic(save = true) {
    translatableElements.forEach(el => {
        el.dataset.en = el.textContent; // حفظ الإنجليزي
        el.textContent = el.dataset.ar; // عرض العربي
    });
    document.body.setAttribute("dir", "rtl");
    if(save) localStorage.setItem("lang", "ar");
}

function translateToEnglish(save = true) {
    translatableElements.forEach(el => {
        if(el.dataset.en) el.textContent = el.dataset.en;
    });
    document.body.setAttribute("dir", "ltr");
    if(save) localStorage.setItem("lang", "en");
}

if(langBtn){
    langBtn.addEventListener("click", () => {
        if(localStorage.getItem("lang") === "ar") {
            translateToEnglish();
            langBtn.innerHTML="عربي";
        } else {
            translateToArabic();
            langBtn.innerHTML="EN";
        }
    });
}
