// for tsükkel

console.log("For tsükkel");
for(let i = 0; i < 10; i++) {
	if(i==5) {
		//break;
		continue;
	}
	console.log(i);
}

//while tsükkel :D

console.log("While tsükkel");
let i=0;
while(i<10){
	console.log(i);
	i++;
}

//do while tsükkel :(

console.log("Do while tsükkel");
let j=0;
do{
	console.log(j);
	j++;
} while(j<10);

//tsüklid ja massiivid
console.log("Massivid ja tsüklid");
//for tsükliga
const cars=["Mersu","Bmw","Honda"];
for(let i=0; i<cars.length; i++){
	console.log(cars[i]);
}
//forEach
console.log("ForEach function");
cars.forEach(function(element, index){
	console.log(`cars[${index}] = ${element}`);
});

//forEach (sus editon)
console.log("ForEach function, but sus.");
cars.forEach((element, index) => {
	console.log(`cars[${index}] = ${element}`);
});
console.log();
//tsüklid ja objektid
const crewmate={ 
	color:"Blue",
	impostor: false,
	susMeter: 44
};
for(let key in crewmate){
	console.log(`${key}=${crewmate[key]}`);
}