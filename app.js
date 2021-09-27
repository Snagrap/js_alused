/*
const color = "red";

switch(color) {
	case "red":
		console.log("vented");
		break;
	case "yellow":
		console.log("problem? *troll*");
		break;
	case "green":
		console.log(`:"i am not sus"`);
		break;
	case "blue":
		console.log("kuse");
		break;
	case "purple":
		console.log("said amogus");
		break;
	default:
		console.log("Ummmm see ei ole värv :)");
		break;
}

*/
const today = new Date();

nädalapäev = today.getDay();

switch(nädalapäev) {
	case 1:
		console.log("Esmaspäev");
		break;
	case 2:
		console.log("Teisipäev");
		break;
	case 3:
		console.log("Kolmapäev");
		break;
	case 4:
		console.log("Neljapäev");
		break;
	case 5:
		console.log("Reede");
		break;
	case 6:
		console.log("Laupäev");
		break;
	case 0:
		console.log("Pühapäev");
		break;
}
