"use strict"

//Random Day Trip Generator

function generateADestination(){

let listOfDestinations = ["the beach", "the mountains", "a lake"];
let randomDestination = Math.floor(Math.random() * listOfDestinations.length);

console.log(listOfDestinations[randomDestination]);

}

function generateARestaurantType(){

let listOfRestaurantTypes = ["Italian", "American", "Mexican"];
let randomRestuarantType = Math.floor(Math.random() * listOfRestaurantTypes.length);

console.log(listOfRestaurantTypes[randomRestuarantType]);

}

function generateATransportationType(){

let listOfTransportationTypes = ["A car", "A train", "A plane"];
let randomTransportationType = Math.floor(Math.random() * listOfTransportationTypes.length);

console.log(listOfTransportationTypes[randomTransportationType]);

}

function generateEntertainment(){

let listOfEntertainment = ["Live music", "Movie theater", "A museum"];
let randomFormOfEntertainment = Math.floor(Math.random() * listOfEntertainment.length);

console.log(listOfEntertainment[randomFormOfEntertainment]);

}
// let userReadyToStart = prompt("Are you ready to generate your trip?");
// if(userReadyToStart === "yes"){
//     console.log("Let's begin!");
// }

generateADestination();

// let userInputDestination = "Yes"
// userInputDestination = prompt("Are you happy with this destination? Please enter 'Yes' or 'No'");
// while(userInputDestination !== "Yes" ||  userInputDestination === "No" || userInputDestination === "no"){
//     console.clear();
//     generateADestination();
// }
// if(userInputDestination === "Yes" || userInputDestination === "yes"){
//     console.log("Awesome!");
// }


let userInputDestination = prompt("Are you happy with this destination? Please enter 'Yes' or 'No'");
if(userInputDestination === "Yes" || userInputDestination === "yes"){
    console.log("Awesome!")
}
else if(userInputDestination !== "Yes" ||  userInputDestination === "No" || userInputDestination === "no"){
    console.clear();
    generateADestination();
    let userWantsFirstNewDestination = prompt("Do you like this destination? Please enter 'Yes' or 'No'");
    if(userWantsFirstNewDestination === "Yes" || userInputDestination === "yes"){
        console.log("Perfect!")
    }
    else if(userWantsFirstNewDestination !== "Yes" || userWantsFirstNewDestination === "No" || userWantsFirstNewDestination === "no")
    console.clear();
    generateADestination();
    }


//     }
//     let userWantsSecondNewDestination = prompt("Do you like this destination? Please enter 'Yes' or 'No'");
//     else if(userWantsSecondNewDestination)

generateARestaurantType();

generateATransportationType();

generateEntertainment();

