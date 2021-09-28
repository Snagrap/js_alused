//funktsioonid defineerimine (deklareerimine)
function greeting(firstname="nimetu", lastname="härrasmees"){
	/*if(typeof firstname==="undefined"){
		firstname="Saksasus"
	}
	if(typeof lastname==="undefined"){
		lastname="Lembirt"
	} */
	return "tere "+firstname+" "+lastname;
}
//funktsioonid kutsumine tööle
let greet=greeting("sussy", "baka");
console.log(greet);
const square=function(number=3){
	return number*number;
}
console.log(square());
(function(){
	console.log("Function is runningi nginginginin!!!!!")
})();
(function(name){
	console.log("Function is running! "+"Tere "+name);
})("Albert");
const todo={
	add:function(){
		console.log("See on cringe fucntion mida ma ei hakka kuangi oma eluis kasutama))))");
	},
	edit:function(id){
		console.log(`èdit todo nr ${id} ...`);
	},
	delete:function(){
		console.log("delete todo...");
	}
}
todo.add();
todo.edit("karl karilaid");
todo.delete();