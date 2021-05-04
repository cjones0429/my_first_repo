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

generateADestination();

generateARestaurantType();

generateATransportationType();

generateEntertainment();

function askIfTripIsComplete(){
let isYourTripComplete = "yes"
let userWantsToChange
isYourTripComplete = prompt("Is your day trip complete? Please enter 'Yes' or 'No'");
    if(isYourTripComplete == "Yes" || isYourTripComplete == "yes"){
    console.log("Awesome! Enjoy your trip!");
    }
    else if(isYourTripComplete !== "Yes" || isYourTripComplete == "no" || isYourTripComplete == "No"){
        userWantsToChange = prompt("What option would you like to change? (Destination, restaurant, transportation, or entertainment)");
    }
        if(userWantsToChange == "destination"){
            console.log("Let's change the destination!")
            generateADestination()
            askIfTripIsComplete();
    }
        else if(userWantsToChange == "restaurant"){
            console.log("Let's change the restaurant type!")
            generateARestaurantType()
            askIfTripIsComplete();
    }
        else if(userWantsToChange == "transportation"){
            console.log("Let's change the transportation type!")
            generateATransportationType()
            askIfTripIsComplete();
    }
        else if(userWantsToChange == "entertainment"){
            console.log("Let's change the entertainment!")
            generateEntertainment()
            askIfTripIsComplete();
    }
}

askIfTripIsComplete();






