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

// KEYDOWN EVENT**********************

function ring() {
    const audio = new Audio();
    audio.src = "../sounds/e.mp3";
    audio.play();
}
function ahh() {
    const audio = new Audio();
    audio.src = "../sounds/a.mp3";
    audio.play();
}
function drum() {
    const audio = new Audio();
    audio.src = "../sounds/z.mp3";
    audio.play();
}
window.addEventListener("keydown", (e) => {
    console.log(e.key);

    if (e.key === "a") {
        ahh();
    } else if (e.key === "e") {
        ring();
    } else if (e.key === "z") {
        drum();
    }
});
let haut = 0;
let gauche = 0;

// window.addEventListener("keydown", (e) => {
//     console.log(e.key);

//     if (e.key === "ArrowUp") {
//         haut = haut + 20;
//         carre.style.top = haut + "px";
//     } else if (e.key === "ArrowLeft") {
//         gauche = gauche + 20;
//         carre.style.left = gauche + "px";
//     } 
// })

window.addEventListener("keydown", (e) => {
        console.log(e.key);

        switch (e.key) {
            case "ArrowDown":
                haut = haut + 20;
                carre.style.top = haut + "px";
                break;
            case "ArrowUp":
                haut = haut - 20;
                carre.style.top = haut + "px";
                break;
            case "ArrowLeft":
                gauche = gauche - 20;
                carre.style.left = gauche + "px";
                break;    
             case "ArrowRight":
                gauche = gauche + 20;
                carre.style.left = gauche + "px";
                break; 
                default:
                null;


        }
});

// INPUT EVENTS**********************************

const inputName = document.querySelector(".input-name");

inputName.addEventListener("input", () => {
    console.log(inputName.value);
});

function addition(a, b) {
    resultat.textContent = (parseInt(a) + parseInt(b));
  }
function soustraction(a, b) {
    resultat.textContent = (a - b);
  }
function multiplication(a, b) {
    resultat.textContent = (a * b);
  }
function division(a, b) {
    resultat.textContent = (a / b);
  }
  
chiffre1.addEventListener("input", () => {
    console.log(typeof parseInt(chiffre1.value));
})  
chiffre2.addEventListener("input", () => {
    console.log(typeof parseInt(chiffre2.value));
})  
resultat.addEventListener("input", () => {
    console.log(typeof parseInt(resultat.value));
})  

add.addEventListener("click", () => {
addition((chiffre1.value), (chiffre2.value));
 })
sou.addEventListener("click", () => {
soustraction((chiffre1.value), (chiffre2.value));
})
mul.addEventListener("click", () => {
multiplication((chiffre1.value), (chiffre2.value));
})
div.addEventListener("click", () => {
division((chiffre1.value), (chiffre2.value));
})


  

