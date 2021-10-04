const taskList=document.querySelector("ul")
console.log(a.parentElement);
taskList.addEventListener("click", runEvent);
function runEvent(e){
	console.log(`Event is ${e.type}`);
}