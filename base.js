// Afficher les données
// alert("test");
document.body.textContent = "<h1>Hello Javascript</h1>";
document.body.innerHTML += "<h1>Hello Js</h1>";
console.log(document.body);

// Les variables*********************

var maVieilleVariable = "Coucou je suis une vieille variable";

console.log(maVieilleVariable);

// Const = valeur immuable
const prenom = "Julien";

// Let = peut évoluer au fil du code
let cours = "Cours JS - Blablablabla";

console.log(cours);

cours = "Cours JS - 2.0 jfkdzpe";
console.log(cours);

// Les Fonctions classiques*******************************

function faireQuelqueChose() {
    console.log("Je fais un truc");
    console.log("Je fais autre chose");
    document.body.style.color = "pink";
}

// Appel de la fonction
faireQuelqueChose();

function addition(a, b) {
    console.log(a + b);
}

addition(3, 23);
addition(4, 26);

const faireUnTruc = (tache) => {
    console.log("Je fais " + tache);
}

faireUnTruc("le ménage");
faireUnTruc(cours);

// Structure des fonctions de base***********************

function nomFonction() {
    // Algo des choses à exécuter
}

const nomDeLaFonction = () => {
    // Algo des choses à exécuter 
};