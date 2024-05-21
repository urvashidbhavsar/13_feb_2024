// perform element = button
// target class = nav 

function showMenubar() {
    let mynav = document.querySelector(".nav");
    mynav.classList.toggle("new-nav")
}

let myheader = document.querySelector("header")
window.addEventListener("scroll", () => {
    var current = window.scrollY;
    if (current > 0) {
        myheader.classList.add("headerFix")
    } else {
        myheader.classList.remove("headerFix")
    }
})