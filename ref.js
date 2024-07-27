// function declaration - has hoisting
const c = [1, 2];
console.log(c);
add(c, 3);
console.log(c);
function add(arr, element) {
    arr.push(element);
}


// function expression - has no hoisting
const s = [1, 2];
console.log(s);
let sum = function(arr, element) {
    arr.push(element);
};
sum(s, 3);
console.log(s);