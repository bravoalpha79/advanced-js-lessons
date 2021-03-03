const nums = [5, 1, 2, 3, 4];

let sum = nums.reduce((acc, curr) => {
console.log(
    "Accumulator:", acc, 
    "Current Value", curr, 
    "Total", acc + curr
);     
    return acc + curr;
}, 0);

console.log(sum);