const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    if (window.scrollY > 150 ) {
        header.style.top = 0 + "px";
        header.style.position = "fixed";
    } else {
        header.style.top = -100 + "px";
        header.style.position = "absolute";
    }
    console.log(window.scrollY);
})