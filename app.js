const numbers1 = [2, 6, 7, 5128591028509182095, 9, 5, 124, 561, 7231, 76553, 71, 2, 1];
const numbers2 = new Array(741, 425, 45666, 54, 6);
const dailydiet = ["koeratoit", "ahvliha", "punane hiinlane"];
const mixed = [895, true, "kuulilennuteetunneliluuk", undefined, null, {a:1,b:2}, new Date()];
const fruits = ["õun", "banaan", "mango", "apelsin"];

let val

val = numbers1.length;
val = Array.isArray(numbers1);
val = numbers1[3];
numbers1[2] = 100;
val = numbers1.indexOf(124);
val = numbers1.push(12);
val = numbers1.unshift(2603);
val = numbers1.pop(125);
//val = numbers1.splice(1,3);
//numbers1.reverse();
val = numbers1.concat(numbers2);
val = fruits.sort();
val = numbers1.sort(function(x, y){
	return y-x;
});

console.log(val);
console.log(numbers1);