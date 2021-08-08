var first = 7;
var second = 5;
console.log(first, second);

// var temp = first;
// var first = second;
// second = temp;
// console.log(first, second);

[first, second] = [second, first];
console.log(first, second);