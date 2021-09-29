//elemendi loomine
const li=document.createElement("li");
const list=document.querySelector("ul");
//klassi määramine
li.className="collection-item";
//teksti lisamine
li.appendChild(document.createTextNode("Study Element creation"));
const link=document.createElement("a");
link.className="secondary-content";
link.appendChild(document.createTextNode("x"));
//lisa ateibuut vaartusega
link.setAttribute("href", "#");
li.appendChild(link);
//elemedni lisamine teise leemendi sisse
list.appendChild(li);
console.log(li);

