let val;
val=document.querySelectorAll(`li`);
const oddLi=document.querySelectorAll(`li:nth-child(odd)`);
const evenLi=document.querySelectorAll(`li:nth-child(even)`);
//document.querySelector(`li:nth-child(even)`).style.color="white";
//document.querySelector(`li:nth-child(even)`).style.background="black";

oddLi.forEach(function(li){
	li.style.background = "#ff2222";
});

for(let i = 0; i < evenLi.length; i++){
	evenLi[i].style.background = "#f22222";
}

console.log(val);

