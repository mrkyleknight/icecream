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


document.write("Yum! " + icecreamFlavor + "!     Great Choice!");

if (icecreamFlavor == "strawberry"){
    alert("Number #1 Flavor");
} else {
  alert("Yummy!");
}









function addTwoNumbers(){
  let num1 = 4;
  let num2 = 4;
  let sum = num1 = num2;
  console.log(sum);
  return sum;


}

