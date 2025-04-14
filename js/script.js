// Snack 1
// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
const bikeListPrint = document.getElementById("bike-list");
const lighterBikeButton = document.getElementById("lighter-bike");
const listContainer = document.getElementById("list-container");
const mainContainer = document.querySelector(".container");

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

// Stampare a schermo la bici con peso minore.
let ligtherBike = bikeList[0];

for (i = 0; i < bikeList.length; i++) {
    const currentBike = bikeList[i];
    if(currentBike.weight < ligtherBike.weight) {
        ligtherBike = currentBike;
    }
};

console.log(ligtherBike); 

for (bike of bikeList) {
    bikeListPrint.innerHTML += `
    <li class="list-group-item">
    Modello: ${bike.name}, 
    Peso: ${bike.weight}Kg
    </li>
    `;
}

lighterBikeButton.addEventListener("click", () => {
    listContainer.classList.add("d-none");

    mainContainer.innerHTML = `
    <div class="col-12 text-center">
        <h2>The lighter bike is:</h2>
        <h3>${ligtherBike.name}</h3>
    </div>`
});
// *##########################################################################################

// Snack2
// Creare un array di oggetti di squadre di calcio.
// Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l'unica proprietà da compilare, le altre saranno tutte settate a 0.
const teamList = [
    {
        name: "Italia",
        points: 0,
        foulsTaken: 0
    },
    {
        name: "Germania",
        points: 0,
        foulsTaken: 0
    },
    {
        name: "Francia",
        points: 0,
        foulsTaken: 0
    },
    {
        name: "Brasile",
        points: 0,
        foulsTaken: 0
    },
    {
        name: "Argentina",
        points: 0,
        foulsTaken: 0
    },
    {
        name: "Olanda",
        points: 0,
        foulsTaken: 0
    },
    {
        name: "Inghilterra",
        points: 0,
        foulsTaken: 0
    }
];

// Generare numeri random al posto degli 0 nelle proprietà "punti" fatti e "falli subiti".
function randomNumber (max, min) {
    const number = Math.floor(Math.random() * (max - min + 1) + min);

    return number;
};

for(team of teamList) {
    team.points = randomNumber(100, 0);
    team.foulsTaken = randomNumber(50, 0);
};

console.table(teamList);

// Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.
let newTeamList = [];

for(team of teamList) {
    newTeamList.push({
        name: team.name,
        foulsTaken: team.foulsTaken
    });
};

console.table(newTeamList);