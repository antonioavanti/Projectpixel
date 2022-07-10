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

var donuts = ["glazed", "powdered", "sprinkled"];
console.log(donuts.length);

var donuts = ["glazed", "chocolate frosted", "Boston creme", "glazed cruller"];
donuts.splice(1, 1, "chocolate cruller", "creme de leche"); // removes "chocolate frosted" at index 1 and adds "chocolate cruller" and "creme de leche" starting at index 1