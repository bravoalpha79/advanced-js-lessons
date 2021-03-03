const sumRest = (a, b, c, ...rest) => {
    let sum = a + b + c;
    for (let i of rest){
        sum += i;
    }
    return sum;
}

let sum = sumRest(1, 2, 3, 4, 5, 6);
console.log(sum);