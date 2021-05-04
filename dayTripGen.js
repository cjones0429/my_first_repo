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


// if(userInput == "destination" || userInput == "entertainment"){
//     console.log("We will change the destination for you")
//     return 
// }
// else if(userInput == "transportation"){
//     console.log("We will change the transportation for you")
// }

// askUserInput()

// function askUserInput(){
    
//     let validInput = false;

//     while(validInput == false){
//         var userInput = prompt("What option would you like changed? (Destination, resturant, transportation, entertainment)")





// let userInputDestination = "Yes"
// userInputDestination = prompt("Are you happy with this destination? Please enter 'Yes' or 'No'");
// while(userInputDestination !== "Yes" ||  userInputDestination === "No" || userInputDestination === "no"){
//     console.clear();
//     generateADestination();
// }
// if(userInputDestination === "Yes" || userInputDestination === "yes"){
//     console.log("Awesome!");
// }




// let userInputDestination = prompt("Are you happy with this destination? Please enter 'Yes' or 'No'");
// if(userInputDestination === "Yes" || userInputDestination === "yes"){
//     console.log("Awesome!")
// }
// else if(userInputDestination !== "Yes" ||  userInputDestination === "No" || userInputDestination === "no"){
//     console.clear();
//     generateADestination();
//     let userWantsFirstNewDestination = prompt("Do you like this destination? Please enter 'Yes' or 'No'");
//     if(userWantsFirstNewDestination === "Yes" || userInputDestination === "yes"){
//         console.log("Perfect!")
//     }
//     else if(userWantsFirstNewDestination !== "Yes" || userWantsFirstNewDestination === "No" || userWantsFirstNewDestination === "no")
//     console.clear();
//     generateADestination();
//     }

//     }
//     let userWantsSecondNewDestination = prompt("Do you like this destination? Please enter 'Yes' or 'No'");
//     else if(userWantsSecondNewDestination)



