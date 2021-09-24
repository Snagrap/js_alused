const person = {
	firstName: "Tarmo",
	lastName: "Kruusimäe",
	age: 56,
	email: "tarmo.kruusimae.amogus@gmail.com",
	hobbies: ["vaping", "vangis istumine", "poliitika"],
	aadress: {
		city: "Kehra",
		county: "Anija vald",
	},
	getBirthYear: function() {
		return 2021 - this.age;
	}		
};

let val;

val = person;
val = person.firstName;
val = person["lastName"];
val = person.hobbies[0];
val = person.aadress['city'];
val = person.getBirthYear();

const people = [
	{name: "Mati", age: 35},
	{name: "Kadi", age: 32},
	{name: "Amogus", age: 13}
 ];

for(let i = 0; i < people.length; i++){
	console.log(people[i].name);
}

console.log(val);