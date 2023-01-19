//============= Show Mobile Menu==========
const navMenu = document.querySelector("#nav-menu");
const toggleBar = document.querySelector("#toggle-bar");
const toggleClose = document.querySelector("#toggle-close");

if (toggleBar) {
    toggleBar.addEventListener("click", () => {
        navMenu.classList.add("show_menu");

    });
}
if (toggleClose) {
    toggleClose.addEventListener("click", () => {
        navMenu.classList.remove("show_menu");

    });
};

// =======================For downarrow================
const features = document.getElementById("features");
const featuresMenu = document.getElementById("features-menu");
const downarrow1 = document.querySelector(".downarrow1")

features.addEventListener("click", () => {
    featuresMenu.classList.toggle("close");
    if(!featuresMenu.classList.contains("close")){
        downarrow1.classList.add("rotate")

    }else{
        downarrow1.classList.remove("rotate")
    }
});

const company = document.getElementById("company");
const companyMenu = document.getElementById("company-menu");
const downarrow2 = document.querySelector(".downarrow2")

company.addEventListener("click", () => {
    companyMenu.classList.toggle("close");
    if(!companyMenu.classList.contains("close")){
        downarrow2.classList.add("rotate")

    }else{
        downarrow2.classList.remove("rotate")
    }
});




// ======================For Remove Mobile Menu===================
const dropdownNavitems = document.querySelectorAll("#drop-remove_menu");
dropdownNavitems.forEach(n => {
    n.addEventListener("click", () => {
        navMenu.classList.remove("show_menu")
        featuresMenu.classList.add("close");
        companyMenu.classList.add("close");
        downarrow2.classList.remove("rotate");
        downarrow1.classList.remove("rotate")
    })
})

const navItem = document.querySelectorAll("#nav-item");
navItem.forEach(n => {
    n.addEventListener("click", () => {
        navMenu.classList.remove("show_menu");
    })
})









