let arr1 = [4, 5, 6];
let arr2 = [...arr1];

// arr1.push(7);
// console.log(arr1);
// console.log(arr2);


let obj1 = {a: 1, b: 2, c: 3}
let obj2 = {...obj1, d: 4}
let obj3 = {...obj1, b: 71};


console.log(obj1);
console.log(obj2);
console.log(obj3);

let arr5 = [...arr1, { ...obj1 }, ...arr2, "x", "y", "z"]
console.log(arr5);