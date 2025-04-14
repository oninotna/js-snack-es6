// Snack 1
// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
const bikeList = [
    {
        name: "Pinarello Dogma",
        weight: 6.9 
    },
    {
         name: "Giant Propel",
        weight: 7.4
    },
    {
        name: "Specialized Tarmac",
        weight: 8
    },
    {
        name: "Bianchi Oltre",
        weight: 7.6
    },
    {
        name: "Colnago V4rs",
        weight: 7.3
    },
    {
        name: "Cannondale SuperSix",
        weight: 6.8
    },
    {
        name: "Canyon Aeroad",
        weight: 7
    }
];

console.table(bikeList);

let ligtherBike = bikeList[0];
// Stampare a schermo la bici con peso minore.

for (i = 0; i < bikeList.length; i++) {
    const currentBike = bikeList[i];
    if(currentBike.weight < ligtherBike.weight) {
        ligtherBike = currentBike;
    }
};

console.log(ligtherBike); 

// *##########################################################################################

// Snack2
// Creare un array di oggetti di squadre di calcio.
// Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l'unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà "punti" fatti e "falli subiti".
// Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.