'use strict';

console.log("I am in the HTML");
alert("Welcome Ice Cream Lovers!");

const usersName = prompt("What is your favorite Ice Cream Flavor?");
console.log(usersName);

document.write("Yum! " + usersName + "!     Great Choice!" );

if (usersName == "strawberry"){
    alert("Number #1 Flavor");
} else {
  alert("Yummy!");
}