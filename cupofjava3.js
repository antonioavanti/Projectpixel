console.log("Arrays start here!");

var donuts = ["glazed","chocolate frosted","cinnamon","sprinkled","powdered","cinnamon sugar","glazed cruller","chocolate cruller"];

console.log(donuts[4]);

donuts[1] = "glazed cruller";
console.log(donuts[1]);

//quiz 6-1: UdaciFamily

var udaciFamily = ["Julia", "James", "Anthony"];
console.log(udaciFamily);

//quiz 6-2: Building the crew
var captain = "Mal";
var second = "Zoe";
var pilot = "Wash";
var companion = "Inara";
var mercenary = "Jayne";
var mechanic = "Kaylee";
var crew = ["captain", "second", "pilot", "companion", "mercenary", "mechanic"];
console.log(crew)

/*var donuts = ["glazed", "powdered", "sprinkled"];
console.log(donuts.length);*/

var donuts = ["glazed", "chocolate frosted", "Boston creme", "glazed cruller"];
donuts.splice(1, 1, "chocolate cruller", "creme de leche"); // removes "chocolate frosted" at index 1 and adds "chocolate cruller" and "creme de leche" starting at index 1

var rainbow = ["red", "orange", "blackberry", "blue"];
rainbow.splice(2,1, "yellow", "green",);
rainbow.push("purple");
console.log(rainbow);

//quiz 6-5: Quidditch cup

/*Create a function called hasEnoughPlayers() 
that takes the team array as an argument and returns 
true or false depending on if the array has at least seven players.*/

 function hasEnoughPlayers(arrayInstance) {
 	 		if (arrayInstance.length >= 7) {
 			return true;
 			} else{
 				return false;
 			}
 	} 
 var team = ["Oliver Wood", "Angelina Johnson", "Katie Bell", "Alicia Spinnet", "George Weasley", "Fred Weasley", "Harry Potter", "Petter"];
 console.log(hasEnoughPlayers(team));

//forEach loop

var donuts = ["jelly donut", "chocolate donut", "glazed donut"];

donuts.forEach(function(donut) {
  donut += " hole";
  donut = donut.toUpperCase();
  console.log(donut);
});

//parameters

words = ["cat", "in", "hat"];
words.forEach(function(word, num, all) {
  console.log("Word " + num + " in " + all.toString() + " is " + word);
});

//quiz 6-8:Another type of loop

var test = [12, 929, 11, 3, 199, 1000, 7, 1, 24, 37, 4,
    19, 300, 3775, 299, 36, 209, 148, 169, 299,
    6, 109, 20, 58, 139, 59, 3, 1, 139
];

test.forEach(function(item, index){
	if(item % 3===0){
		test[index]=[index]+100;
	} else{
		console.log("Element "+item+" is not divisble by 3");
	}
});

console.log(test);

//map function

var myArray = [1,2,3,4,5];
var newArray = myArray.map(function(elem){
  elem = elem + 100;
  return elem;
});

console.log(newArray);

//quiz 6-9: I got bills

var bills = [50.23, 19.12, 34.01, 100.11, 12.15, 9.90, 29.11, 12.99, 10.00, 99.22, 102.20, 100.10, 6.77, 2.22];
var totals = bills.map(function(amount){
  amount = amount + (amount * 0.15);

  return Number(amount.toFixed(2));

});

console.log(totals);

//Array of arrays

var AvantiPhoto = [
  ["Headshots", "Recital", "Portraits"],
  ["Architecture", "Interior", "Static"],
  ["Still-life", "Product", "Landscape"]
];

for (var row = 0; row < AvantiPhoto.length; row++) {
  for (var col = 0; col < AvantiPhoto[row].length; col++) {
    console.log(AvantiPhoto[row][col]);
  }
}