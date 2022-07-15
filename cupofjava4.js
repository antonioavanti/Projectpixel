console.log("Objects start here");

var umbrella ={
	color: "pink",
	isOpen: false,

	open: function(action) {
		if(umbrella.isOpen === true){
			return "The umbrella is already open";
		} else{
			umbrella.isOpen = true;
			return "Julia opens the umbrella";
		}
	},
	close: function(action) {
			if(umbrella.isOpen === false){
			return "The umbrella is already closed";
		} else{
			umbrella.isOpen = false;
				return "Julia closes the umbrella";
		}
	}
};

//object literal notation

var sister = {
  name: "Sarah",
  age: 23,
  parents: [ "alice", "andy" ],
  siblings: ["julia"],
  favoriteColor: "purple",
  pets: true,
  paintPicture: function() { return "Sarah paints!"; }
};

console.log(sister.paintPicture());

//quiz 7-2: Menu items

var breakfast = {
	name: "The Lumberjack",
	price: 9.95,
	ingredients: ["eggs", "sausage", "toast", "hashbrowns", "pancakes"]
};
console.log(breakfast);

//quiz 7-3: Bank accounts

var savingsAccount = {
  balance: 1000,
  interestRatePercent: 1,
  deposit: function addMoney(amount) {
    if (amount > 0) {
      savingsAccount.balance += amount;
    }
  },
  withdraw: function removeMoney(amount) {
    var verifyBalance = savingsAccount.balance - amount;
    if (amount > 0 && verifyBalance >= 0) {
      savingsAccount.balance -= amount;
    }
  },
  printAccountSummary(){ return "Welcome! \nYour balance is currently $"+savingsAccount.balance+" and your interest rate is "+savingsAccount.interestRatePercent+"%."}
};
console.log(savingsAccount.printAccountSummary());

//quiz 7-5: Facebook friends

var facebookProfile = {
	name: "Antonio Avanti",
	friends: 200,
	messages: [
		"I like riding bikes",
		"I love photography",
		"I am a plant-based vegan",
		"I am going to be a dad"
	],
	postMessage: function addMessage(comment) {
		facebookProfile.messages.push("My daughter is called Katie Hannah Gathogo");
	},
	deleteMessage: function removeMessage(index) {
		facebookProfile.messages.splice(index,1);
	},
	addFriend: function accept(invite) {
		facebookProfile.friends = facebookProfile.friends + 1;
	},
	removeFriend: function unfriend(block) {
		facebookProfile.friends = facebookProfile.friends - 1;
	}
};
console.log(facebookProfile.addMessage);

//quiz 7-6: Donuts revisited

var donuts = [
    { type: "Jelly", cost: 1.22 },
    { type: "Chocolate", cost: 2.45 },
    { type: "Cider", cost: 1.59 },
    { type: "Boston Cream", cost: 5.99 }
];

donuts.forEach(function(donut) {

  console.log(donut.type+ " donuts cost $"+donut.cost+" each");
});