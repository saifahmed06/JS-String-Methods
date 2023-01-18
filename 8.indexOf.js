//The string indexOf() method returns the index of the first occurence of the substring in a string
let info = "Saif is an Engineering student at LIET"
let index = info.indexOf("dent")
console.log(index)

//incase of presence of same search element more than once in a same string,then we have to give the strarting index to search the given element from
//str.indexOf(searchValue, fromIndex)

let info1 = "Saif is an Engineering student at LIET also student at 100daysOfCooding"
//here student is present 2 times so if we want to find the 2nd one then we have to give the starting index or else by default it search from the index 0(starting)
let index1 = info.indexOf("dent",29)
console.log(index)