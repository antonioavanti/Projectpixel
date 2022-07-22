console.log("Functions start here")

//I'll comeback and fix this
function doubleGreeting(salutationMale ,salutationFemale, name){
	var salutationMale = "Mr.Crown, how are you today "
	return salutationMale;
}
console.log(doubleGreeting());


function sayHello(){
	var message = "Hello!"
	return message;
}
console.log(sayHello());


//quiz 5-1: Laugh it off

function laugh(){
	var message = "hahahahahahahahahaha!"
	return message;
}
console.log(laugh());

//quiz 5-2:Laugh it off
var audio = "";
function laugh(num){
	for(var ha = 0; ha < num; ha = ha + 1){
		audio = audio + "ha";
	}
	audio = audio + "!";
	return audio;
}
console.log(laugh(3))


function isPrime(integer){
	for(var x = 2; x < integer; x = x+1){
		if (integer % x === 0){
			console.log(integer + " is divisible by "+ x);
			return false;
		}
	}

	return true;
}
/*
//difference between logging (printing) and returning

function isThisWorking(input) {
  console.log("Printing: isThisWorking was called and " + input + " was passed in as an argument.");
  return "Returning: I am returning this string!";
}
*/
function add(x , y) {
	// body...
	return x + y;
}

function divideByTwo(num) {
	// body...
	return num / 2;
}

var sum = add(5, 7);
var average = divideByTwo(sum);


function addTen(x) {
	return x + 10;
}

function didiveByThree(y) {
	return y / 3;
}
var result = addTen(2);
console.log(didiveByThree(result));

//quiz 5-3: Build Triangle


function makeLine(pass){
	var row = "";
	for (var a = 1; a <= pass; a++) {
		row += "*";
	}
	return row + "\n";
}
function buildTriangle(pass){

	var triangle = "";
	var rownumber = 1;

	for (rownumber = 1; rownumber <= pass; rownumber++) {
		triangle = triangle + makeLine(rownumber);
	}
	return triangle;
}
console.log(buildTriangle(10));


//functions as expressions

var mikeSays = function(max){
	var mikeMessage = "";
	for (var i = 0; i < max; i++){
		mikeMessage += "Sema ";
	}
	return mikeMessage;
};

//function declaration bwanaMike accepting a callback
function bwanaMike(callbackFunc){
	return "Ata "+ callbackFunc(1);
}

//inline functions...before and after exapmple
//.........................................................................................
//before inline
var favoriteMovie = function displayFavorite(movieName) {
  console.log("My favorite movie is " + movieName);
};
function movies(messageFunction, name) {
  messageFunction(name);
}
movies(favoriteMovie, "Finding Nemo");
//..........................................................................................
//converted to inline
function movies(messageFunction, name) {
  messageFunction(name);
}
movies(function displayFavorite(movieName) {
  console.log("My favorite movie is " + movieName);
});
//..........................................................................................

//quiz 5-4 Laugh...anonymous function expression

var laugh = function(num){
	var sound = "";
	for(var x = 0; x < num; x++){
		sound += "ha"
	}
	return sound;
}
console.log(laugh(10));

//quiz 5-5 Cry...named function expression

var cry = function tantrum(boo){
	return "Boohoo";
}
console.log(cry())

//quiz 5-6: inline
function emotions(myString, myFunc) {
    console.log("I am " + myString + ", " + myFunc(2));
}
emotions("happy", function(num){
	var audio = "";
	for(var ha = 0; ha < num; ha = ha + 1){
		audio = audio + "ha";
	}
	audio = audio + "!" ;
	return audio;

});