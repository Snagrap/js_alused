/*
if(tingimus) {
	//tegevus if puhul

} else {
	// tegevused else puhul
}
*/

const id = 100;

// == - võrdub
// != - ei võrdu
// === - võrdub ja tüübikontroll
// !== - EI VÕRDU ja tüübikontroll

/*
let testID;

console.log(testID);


if(typeof testID !== 'undefined'){
	console.log(`ID on ${testID}`);
} else {
	console.log("ID puudub");
}



if(id > 100) {
	console.log(`ID on ${id} - suurem kui 100`);
} else {
	console.log(`ID on ${id} - väiksem või võrdne kui 100`);
}

*/

// if - else if - else

/*
const color = "green";

if(color === "red") {
	console.log("stop");
} else if(color === "yellow") {
	console.log("valmis");
} else if(color === "green") {
	console.log("minek");
} else {
	console.log("kuse täis end");
}
*/
// and - &&
const name = "mati";
const age = "73";

if(age > 8 && age <= 16) {
	console.log(`${name} ei ole veel vangis`);
} else if(age > 16 && age < 18){
	console.log(`${name} on valmis kohtusse minekuks`);
} else {
	console.log(`${name} on vangis`);
}

// or - ||

if(age < 18 || age > 65) {
	console.log(`${name} saab vangis tööd`);
} else {
	console.log(`${name} ei saa vangis tööd`);
}

// ? - ternary operator
console.log(id === 100 ? "Õige!" : "Vale!");

// ilma {}
if(id === 100) console.log("Korras :)");
else console.log("Ei ole koraas !!!! :netural:face:");