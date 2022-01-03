// CLICK EVENT******************
const title = document.querySelector('.title');
const circle1 = document.querySelector('.circle1');
const circle2 = document.querySelector('.circle2');
const circle3 = document.querySelector('.circle3');
const popUp = document.querySelector('.popUp');



title.addEventListener("click", () => {
    title.classList.toggle("h1-js");
    
});

btn1.addEventListener("click", () => {
    title.style.fontFamily = "Segoe UI";
})

btn2.addEventListener("click", () => {
    img.style.height = "150px";
})

btn3.addEventListener("click", () => {
    popUp.style.right = "20px";

})

closebtn.addEventListener("click", () => {
    popUp.style.right = "-500px";
});

// MouseMove Event************************************

// window.addEventListener("mousemove", (e) => {
//     console.log(e.x, e.y);
//     circle1.style.left = e.x + "px";
//     circle1.style.top = e.y + "px";
//     circle2.style.left = e.x + "px";
//     circle2.style.top = e.y + "px";
//     circle3.style.left = e.x + "px";
//     circle3.style.top = e.y + "px";
// });


// FOREACH & SWITCH***********************************

const themeBtn = document.querySelectorAll(".theme");

themeBtn.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        console.log(e.target.id);

        document.body.classList.remove("dark-theme", "red-theme", "orchid-theme");

        switch (e.target.id) {
            case "dark":
                document.body.classList.add("dark-theme");
                
                break;
            case "red":
                document.body.classList.add("red-theme");
                
                break;
            case "orchid":
                    document.body.classList.add("orchid-theme");

                break;
                default:
                    null;
                       
        }
    });
});

// SCROLL EVENT***********************************

window.addEventListener("scroll", () => {
    if (34 > 33) {
        console.log("yes");
    } else {
        
    }
    console.log(window.scrollY);
})