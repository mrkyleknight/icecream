'use strict';

console.log("I am in the HTML");
alert("Welcome Ice Cream Lovers!");

function getName(){ 
  const usersName = prompt("What is your favorite Ice Cream Flavor?");
  return usersName;

}
let icecreamFlavor = getName ()



function specialMessage(flavor){
  // console.log (usersName)
  if (flavor == ""){
    icecreamFlavor = prompt ("Everyone has a favorite ice cream flavor?");


    // document.write("Yum! " + usersName + "!   Great Choice");

  }
}
specialMessage (icecreamFlavor)


document.write("laughs evilly! " + icecreamFlavor + "      , Great Choice!");

if (icecreamFlavor == "strawberry"){
    alert("Number #1 Flavor");
} else {
  alert("Isn't it great to get the things you desire?");
}









// function addTwoNumbers(){
//   let num1 = 4;
//   let num2 = 4;
//   let sum = num1 = num2;
//   console.log(sum);
//   return sum;






function rateMyPage() {
 let rating = prompt("You can have anything you want with a little training. Between numbers 1-10? How bad do you want icecream?");
 while (rating < 1 || rating > 11 || isNaN(rating)) {
  rating = prompt("You just have to learn to be more assertive. And I can show you how. Pick a number between 1 to 10.");
 }

  for (let i = 0; i < rating; i++){
    document.write("<img class=loop-img' src='giphy.gif' alt='Icecream' />");
  }


}
