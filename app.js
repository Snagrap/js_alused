let val;

const today = new Date();

val = today.getMonth(); //0 on jaanuar
val = today.getDate();
val = today.getDay();
val = today.getFullYear();
val = today.getHours();
val = today.getMinutes();
val = today.getSeconds();
val = today.getMilliseconds();
val = today.getTime();

let birthday = new Date("4/10/2004 11:00:00");
birthday = new Date("September 27 2001");

birthday.setMonth(2); // jaanuar on 0 SAA ARU JUBA ISSANDJ UMALK
birthday.setDate(12);
birthday.setFullYear(2069);
birthday.setHours(11);
birthday.setMinutes(32);
birthday.setSeconds(45);


console.log(birthday);
console.log(val);