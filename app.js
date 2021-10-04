const form=document.querySelector("form");
const taskInput=document.querySelector("#task");
const heading=document.querySelector("h4");

taskInput.value = "";

//form.addEventListener("Submit", runEvent);
//taskInput.addEventListener("keydown", runEvent);
//taskInput.addEventListener("keyup", runEvent);
//taskInput.addEventListener("keypress", runEvent);
//taskInput.addEventListener("focus", runEvent);
//taskInput.addEventListener("blur", runEvent);
//taskInput.addEventListener("cut", runEvent);
//taskInput.addEventListener("paste", runEvent);
//taskInput.addEventListener("input", runEvent);

function runEvent(e){
	//body...
	console.log(`Event type: ${e.type}`);
	//console.log(e.target.value);
	heading.innerText=e.target.value;
	//e.preventDefault();
}
