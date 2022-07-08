
/*var celsius = 12;
	var farenheit = celsius* 1.8 + 32;
	console.log(celsius * 1.8 +32 );

	var name = "James";
	name[0];
	console.log(name[0]);

	var quote = "Stay awhile and listen!";
	console.log(quote[6]);

	console.log("The man whispered,\"please speak to me.\"");

	var str = "this string\
	is broken\
	across multiple\
	lines.";
	console.log(str);

	var file = "The file located at \"C:\\\\Desktop\\My Documents\\Roster\\names\" contains the names on the roster";
	console.log(file)

	console.log("yes"=="Yes")
	console.log("Y"!="y")

	var my_string = "a";
	var ASCII_value = my_string.charCodeAt(0);
	console.log(ASCII_value)

	console.log("green"=="blue");
	console.log("green"=="green");
	console.log("green"=="Green");
	console.log("Green"=="green");
	console.log("green">"blue");
	console.log("green">"green");
	console.log("green">"Green");
	console.log("Green">"green");

	var studentName = "John,";
	var haveEnrolledInCourse = "true";
	var haveCompletedTheCourse = "false";

	if (haveEnrolledInCourse){
		console.log("Welcome "+studentName+" to Udacity");
	}

	console.log("Hello" % 10)
	console.log(true>=0)

	var thingOne = "red ";
	var thingTwo = "blue";
	console.log(thingOne + thingTwo);

	var bill = 10.25+3.99+7.15;
	var tip = bill*0.15;
	var total = bill + tip;
	console.log(total);

	var adjective1 = "amazing";
	var adjective2 = "fun";
	var adjective3 = "entertaining";
	var madlib = "The Intro to JavaScript course is "+adjective1 +". James and Julia are so "+adjective2+". I cannot wait to work through the rest of this "+adjective3+" content!"
	console.log(madlib);

	var firstName = "Julia";
	var interest = "cats";
	var hobby = "play video games";
	var awesomeMessage = "Hi, my name is "+firstName+ ". I love "+interest+ ". In my spare time, I like to "+hobby+".";
	console.log(awesomeMessage)

	var price = 15.00; //price of the hammer
	var money = 20.00; // money I have
	//run comparison to determine whether I can make a purchase
	if(money >= price){
		console.log("buy the hammer");
	} else {
		console.log("don't buy the hammer");
	}

	//Else if statements
	var weather = "rain";

	if (weather === "snow") {
		console.log("Bring a coat");
	} else if (weather === "rain") {
		console.log("Bring a rain jacket");
	} else {
		console.log("Wear what you have on");
	}

	//Practice question
	var money = 100.50;
	var price = 100.50;

	if (money > price) {
		console.log("You paid extra, here's your change.");
	} else if (money === price) {
		console.log("You paid exact amout, have a nice day!");
	} else {
		console.log("That's not enough, you still owe me money");
	}

	//Practice question
	var runner = "Kendyll";
	var position = 2;
	var medal;

	if (position === 1) {
		medal = "gold";
	} else if (position === 2) {
		medal = "silver";
	} else if (position === 3) {
		medal = "bronze"
	} else {
		medal = "pat on the back";
	}

	console.log (runner + " received a "+medal+ " medal.")

// quiz question 3-2: Even or Odd

// Write an if...else statement that prints "even" if the number is even and prints "odd" if the number is odd.

 var number = 16;

 if (0 === number % 3) {
 	console.log("even");
 } else {
 	console.log("odd");
 }

 // quiz question 3-3: Musical groups

var musicians = 3;

if ( musicians <= 0){
	console.log ("not a group");
} else if (musicians === 1){
	console.log("solo");
} else if (musicians === 2){
	console.log("duet");
} else if (musicians === 3){
	console.log("trio");
} else if ( musicians === 4){
	console.log("quartet")
} else if (musicians >= 5){
	console.log ("this is a large group")
}

// Logical operators

var colt = "not busy";
var weather = "nice";

if (colt === "busy" && weather === "nice"){
	console.log("got to the park");
} else {
	console.log("do not go to the park");
}

console.log(!(4 === 4) && "STRing" === "STRing")
console.log (true || false)
console.log (false && false)
console.log (!true)
console.log ((13 > -7) || (false == 0))
console.log ((3 != 6 % 3) && !(24 > 45) && (!false))

// quiz question 3-4: Murder Mystery

 var room = "gallery";
 var suspect = "Ms. Van Cleve";
 var weapon = "";
 var solved = false;

 if (room === "billiards room"){
 	weapon = "pool stick"
 	if(suspect === "Mrs. Sparr")
 		solved = true;
 } else if (room === "dining room"){
 	weapon = "knife"
 	if(suspect === "Mr. Parkes")
 	solved = true;
 } else if (room === "gallery"){
 	weapon = "trophy"
 	if(suspect === "Ms. Van Cleve")
 	solved = true;
 } else if (room === "ballroom"){
 	weapon = "poison"
 	if(suspect==="Mr. Kalehoff")
 		solved = true;
 }

 if (solved){
 	console.log(suspect+" did it in the "+room+" with the "+weapon+"!");
 }

// quiz question 3-5: check your balance

 var checkBalance = "no";
 var isActive = "yes";
 var balance = 0;

   if (checkBalance === "yes"){
	if(isActive === "yes" && balance > 0)
		console.log("Your balance is $"+balance.toFixed(2) +".");
}
else if (isActive === "yes" && balance === 0){
        console.log("Your account is empty.");
}
else if (isActive === "yes" && balance < 0){
	console.log("Your balance is negative. Please contact bank.");
}
else if (isActive === "no"){
	console.log("Your account is no longer active.")
}
else {
	console.log("Thank you. Have a nice day!");

}

// quiz question 3-6: ice-cream

var flavor = "chocolate";
var vessel = "cone";
var toppings = "sprinkles";

if ((flavor === "vanilla" || flavor === "chocolate") && (vessel === "cone" || vessel === "bowl") && (toppings === "sprinkles" || toppings === "peanuts")){
		console.log("I'd like two scoops of "+flavor+" ice cream in a "+vessel+" with "+toppings+".")
}

//quiz question 3-7: what do i wear?

var shirtWidth = 18;
var shirtLength = 29;
var shirtSleeve = 8.47;

if ((shirtWidth >= 18 && shirtWidth < 20) && (shirtLength >= 28 && shirtLength <= 29) && (shirtSleeve >= 8.13 && shirtSleeve <= 8.38)){
	console.log("S");

} else if ((shirtWidth >= 20 && shirtWidth < 22) && (shirtLength >= 29 && shirtLength <= 30) && (shirtSleeve >= 8.38 && shirtSleeve <= 8.63)){
	console.log("M");

} else if ((shirtWidth >= 22 && shirtWidth < 24) && (shirtLength >= 30 && shirtLength < 31) && (shirtSleeve >= 8.63 && shirtSleeve <= 8.88)){
	console.log("L");

} else if ((shirtWidth >= 24 && shirtWidth < 26) && (shirtLength >= 31 && shirtLength <= 32) && (shirtSleeve >= 8.88 && shirtSleeve <= 9.63)){
	console.log("XL");

} else if ((shirtWidth >= 26 && shirtWidth < 28) && (shirtLength >= 33 && shirtLength <= 34) && (shirtSleeve >= 9.63 && shirtSleeve <= 10.13)){
	console.log("2XL");

} else if ((shirtWidth >= 28)  && (shirtLength >= 34)  && (shirtSleeve >= 10.13)){
	console.log("3XL");

} else {
	console.log("Not a valid size");
}

// truthy and falsy

//falsy
if (""){
	console.log("the value is truthy");

} else {
	console.log("the value is falsy")
}

//truthy
if (1){
	console.log("the value is truthy");

} else {
	console.log("the value is falsy")
}

if ("undefined"){
	console.log("This text will be printed if the condition above evaluates to true");
}

//Ternary Operator

var isGoing = true;
var color;

if (isGoing){
	color = "green";

} else {
	color = "red";
}

console.log(color);

//TIP: Using if(isGoing) is the same as using if(isGoing === true). Alternatively, using if(!isGoing) is the same as using if(isGoing === false).

var isGoing = false;
var color = isGoing ? "green" : "red";
console.log(color);

//quiz question

var adult= true;
var preorder = true;

console.log("It costs $"+(adult ? "40.00" : "20.00")+ " to attend the concert. Pick up your tickets at the "+ (preorder ? "will call" : "gate")+ ".")

//quiz 3-8: Navigating the food chain

var eatsPlants = true;
var eatsAnimals = true;
var category = eatsPlants ? (eatsAnimals ?"omnivore" : "herbivore") : (eatsAnimals ? "carnivore" : "herbivore");

console.log(category)

//switch statement
var option = 3;

switch (option){
	case 1: console.log("You have selected option 1");
	break;

	case 2: console.log("You have selected option 2");
	break;

	case 3: console.log("You have selected option 3");
	break;

	case 4: console.log("You have selected option 4");
	break;

	case 5: console.log("You have selected option 5");
	break;

	case 6: console.log("You have selected option 6");

}

// quiz question

var month = 2

switch (month){

	case 1:
	case 3:
	case 5:
	case 7:
	case 8:
	case 10:
	case 12:
		days = 31;
	break;

	case 4:
	case 6:
	case 9:
	case 11:
		days = 30
	break;

	case 2:
	days = 28;
}

console.log("There are "+days+ " days in this month.")

//Falling through
// hierarchical-type structure.

var tier = "deck of legends";
var output = "You'll receive ";

switch (tier){

	case "deck of legends":
		output += "a custon card,";

	case "collector's deck":
		output += "a signed version of the Exploding Kittens deck,";

	case "nsfw deck":
		output += "one copy of the NSFW (Not Safe for Work) Exploding Kittens card game and ";

	case "default":
		output += "one copy of the Exploding Kittens card game."
}

console.log(output);

var education = "no high school diploma";
var salary = 25636

switch (education){

	case "no high school diploma":
		salary = 25636;
			break;

	case "a high school diploma":
		salary = 35256;
			break;

	case "an Associate's degree":
		salary = 41496;
			break;

	case "a Bachelor's degree":
		salary = 59124;
			break;

	case "a Master's degree":
		salary = 69732;
			break;

	case "a Professional degree":
		salary = 89960;
			break;

	case "a Doctoral degree":
		salary = 84396;

}
console.log('In 2015, a person with '+education+ " earned an average of $"+salary.toLocaleString("en-US")+"/year")

//LOOPS

var start = 0 // when to start

while (start < 10){ //when to stop
		console.log(start);
		start = start + 2; // how to get to the next item
}

//quiz 4-1: JuliaJames

var x = 1;

while (x <= 20){

	if (x % 3 === 0 && x % 5 === 0){
		console.log("JuliaJames");

	} else if ( x % 5 === 0){
		console.log("James");


	} else if (x % 3 === 0){
		console.log("Julia");

	} else{
		console.log(x);
	}

	x = x + 1;
}

//quiz 4-2 bottles of juice

/*var num = 99;

while (num >= 1){

	if(num === 1){
		console.log(num + " bottle of juice on the wall! " +num+ " bottle of juice! Take one down, pass it around..."+ (num-1) + " bottles of juice on the wall");

	} else if (num === 2){
		console.log(num + " bottles of juice on the wall! " +num+ " bottles of juice! Take one down, pass it around..." +(num-1)+ " bottle of juice on the wall");

	} else {
		console.log(num + " bottles of juice on the wall! "+num+ " bottles of juice! Take one down, pass it around..."+ (num-1)+ " bottles of juice on the wall");
	}

		num = num - 1;

}


//quiz 4-3 countdown, liftoff!

var time = 60;

while (time >= 0){

	if(time === 0){
		console.log("Solid rocket booster ignition and liftoff!");

	} else if (time === 6){
		console.log("Main engine start");

	} else if (time === 10){
		console.log("Activate main engine hydrogen burnoff system");

	} else if (time === 16){
		console.log("Activate launch pad sound suppression system");

	} else if (time === 31){
		console.log("Ground launch sequencer is go for auto sequence start");

	} else if (time === 50){
		console.log("Orbiter transfers from ground to internal power");

	} else {
		console.log("T-"+time+ " seconds");
	}

	time = time - 1;
}


//for loops

for (var i = 0; i < 6; i = i + 1) {
	console.log("The value of i in this step is "+ i);
}

// nested loops

for (var x = 0; x < 5; x = x + 1) {
  for (var y = 0; y < 3; y = y + 1) {
    console.log(x + "," + y);
  }
}

//Increment and decrement

for (var i = 4; i >= 0; i--) {
	console.log(i +" is more than the next line" );
	}

	//quiz 4-4: Changing the loop

	 for(var x = 9; x >= 1; x = x-1){
	 	console.log("hello "+ x);
	 }

	 //quiz 4-7: Factorials!

	 let solution = 1;

	 for(let a = 1; a <= 12; a++){
	 	solution *= a;
	 }
	 console.log(solution)

	 //quiz 4-8: Find my seat

	/* for(var row = 0; row <= 26; row = row + 1){
	 		for(var seat = 0; seat <= 99; seat = seat + 1){
	 			console.log("Row " +row+", Seat "+seat)
	 		}
	 }
	 */