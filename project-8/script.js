"use strict"; 
//https://www.w3schools.com/js/js_strict.asp

var images = ["puppy1.jpg", "puppy2.jpg", "puppy3.jpg", "puppy4.jpg"];
// add an array for title
var titles = ["Puppy at the beach", "Shy little Puppy", "Puppy in towel", "Puppy is hungery"];
// add an array for figure caption
var fig = ["Fun times at the beach!", "I'm Sorry.", "Im Cold!", "Water please."];
const ONE = document.querySelector("#one");
const TWO = document.querySelector("#two");
const THREE = document.querySelector("#three");
const FOUR = document.querySelector("#four");

function swap(num){
    document.querySelector("#large").src = images[num];
    document.querySelector("#title").innerHTML = titles[num];
    document.querySelector("figcaption").innerHTML = fig[num];
}

ONE.addEventListener("click", function(){swap(0)}, false);
TWO.addEventListener("click", function(){swap(1)}, false);
THREE.addEventListener("click", function(){swap(2)}, false);
FOUR.addEventListener("click", function(){swap(3)}, false);



//https://www.w3schools.com/js/js_htmldom_eventlistener.asp
