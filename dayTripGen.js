"use strict"

//Random Day Trip Generator

let listOfDestinations = ["The beach", "The mountains", "A lake"];
let randomDestination = Math.floor(Math.random() * listOfDestinations.length);

console.log(listOfDestinations[randomDestination]);

let listOfRestaurantTypes = ["Italian", "American", "Mexican"];
let randomRestuarantType = Math.floor(Math.random() * listOfRestaurantTypes.length);

console.log(listOfRestaurantTypes[randomRestuarantType]);

let listOfTransportationTypes = ["A car", "A train", "A plane"];
let randomTransportationType = Math.floor(Math.random() * listOfTransportationTypes.length);

console.log(listOfTransportationTypes[randomTransportationType]);

let listOfEntertainment = ["Live music", "Movie theater", "A museum"];
let randomFormOfEntertainment = Math.floor(Math.random() * listOfEntertainment.length);

console.log(listOfEntertainment[randomFormOfEntertainment]);
