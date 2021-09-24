const name = "Karl Karilaid";
const age = 17;
const job = "McDonald's klienditeenindaja";
const city = "Tartu";

let html;

html = "<ul>" +
			"<li>" + name + "</li>" +
			"<li>" + age + "</li>" +
			"<li>" + job + "</li>" +
			"<li>" + city + "</li>" +
		"</ul>"

console.log(html);

document.body.innerHTML = html