// event elements
const taskList = document.querySelector('ul');
const deleteAllButton = document.getElementById('delete-all');

// click elemendi kustutamiseks
taskList.addEventListener("click", deleteTask);
deleteAllButton.addEventListener("click", deleteAll);

function deleteTask(e) {
if(e.target.textContent === "X") {
if(confirm("Are you sure you want to delete this task?")){
e.target.parentElement.remove();
		}
	}
}


function deleteAll(e) {
if(e.target.id === "delete-all"){
if(confirm("Are you sure you want to delete all tasks?")){
taskList.innerHTML = "";
		}
	}
}

const form = document.querySelector('form');
const taskInput = document.querySelector('#task');

// submit
form.addEventListener('submit', addTask);

function addTask(e) {
	const li = document.createElement('li');
	const list = document.querySelector('ul');
	
	li.className = 'collection-item';
	li.appendChild(document.createTextNode(taskInput.value));

	const link = document.createElement('a');
	link.className = 'secondary-content';
	link.appendChild(document.createTextNode('X'));
	link.setAttribute('href', '#');

	li.appendChild(link);
	list.appendChild(li);

	taskInput.value = '';

	e.preventDefault();
}