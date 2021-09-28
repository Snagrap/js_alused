let val;
val=document.getElementById("task-title");
const taskTitle=document.getElementById("task-title");
taskTitle.style.background = "#fffff";
taskTitle.style.color = "#000000";
taskTitle.style.padding = "5px";
taskTitle.style.display = "1";
//taskTitle.textContent = "MINU ÜLESANDED :)"
//taskTitle.innerText = "tglt ei ole"
taskTitle.innerHTML = '<span style="color:red";">Kusen</span>'
val=document.querySelector("#task-title");
val=document.querySelector(".card-title");
val=document.querySelector("h2");
document.querySelector('li').style.color="red";
document.querySelector("ul li").style.color="yellow";
document.querySelector("li:nth-child(even)").style.background="#ccc";
console.log(val);