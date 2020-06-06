let num = 266219;

let result = num.toString().split("").reduce(function(prev, current){
    return parseInt(prev) * parseInt(current)
});
console.log(result);


total = result ** 3;
console.log(total.toString().substr(0, 2));