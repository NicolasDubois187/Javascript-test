// types de données JS
let chaine = "Ma chaine de caractères";
let number = 42;
let booléen = true;

// typeof pour connaitre type d'une donnée
// console.log(typeof number);

let tableau = ["je", "suis", "un", "tableau"];

// console.log(tableau[1][1]);
// console.log(tableau);
// tableau commence toujours à 0

// console.log(tableau[1]);
// console.log(tableau.length);

let complexArray = ["Bordeaux", 23, true, [23, false, "Paris"]];
// console.log(complexArray[3][2][2]);

// let index = 0;
// setInterval(() => {
//     document.body.textContent = complexArray[index];
//     index++
// }, 1000);

let objet = {
    nom: "Denis",
    age: 32,
    technos: ["React", "Nodejs"],
};
// objet.taille = 187;

// console.log(objet.nom[3]);
// console.log(objet.technos[1]);

let maVariable = null;
let autreVar = undefined;

let arrayOfObject = [
    {
        nom: "Denis",
        age: 32,
        admin: false,
    },
    {
        nom: "Julien",
        age: 33,
        admin: true,
    },
    {
        nom: "David",
        age: 23,
        admin: false,
    }
];

// console.log(arrayOfObject[2].nom[4]);

// BOUCLE FOR*********************************

// for (i = 0; i < complexArray.length; i++) {
//     // console.log("je suis le tour n° : " + i);
//     console.log(complexArray[i]);
// }

for (i = 0; i < arrayOfObject.length; i++) {
    console.log(arrayOfObject[i]);
    // document.body.innerHTML += "<li>Prénom : " + arrayOfObject[i].nom + "</li>";
}

// MAP***********************************

document.body.innerHTML = arrayOfObject.map((user) => 

`
<div class="card">
    <h2>${user.nom}</h2>
    <span>Age : ${user.age}</span>
    <p>${user.admin ? "Administrateur" : "Membre"}</p>
</div>    
`
).join("");

// Fonction ternaire***********************

// c'est un if/else sur une seule ligne
nombre < 50 ? "valeur si vrai" : "valeur si faux";