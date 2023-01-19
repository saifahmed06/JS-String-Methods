/*
The localeCompare() method compares two strings in the current locale.

IMP: The localeCompare() method returns sort order -1, 1, or 0 (for before, after, or equal).

*/
// let MyName = "c"
// let MiddleName= MyName.localeCompare("d")
// console.log(MiddleName)
////////////////////////////////////////
/*
let name1 = "Mohammed Saif Ahmed"
let name2 = "Mohammed Saif Ahmed"
let compare = name2.localeCompare(name1)
console.log(compare)//0
*/
///////////////////////////////////////
/*
let name1 = "Mohammed Saif Ahmed"
let name2 = "Mohammed Arshad Ahmed"
let compare = name2.localeCompare(name1)
console.log(compare)//-1
*/
///////////////////////////////////////
let name1 = "Mohammed Saif Ahmed"
let name2 = "Mohammed Arshad Ahmed"
let compare = name1.localeCompare(name2)
console.log(compare)//1