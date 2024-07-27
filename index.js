// convenient function program

let radius = [3,7,1,10];
const calculateArea = function (radius){
    const output = [];
    for(let i=0;i<radius.length;i++){
        output.push(Math.PI*radius[i]*radius[i]);
    }
    return output;
}

console.log(calculateArea(radius))


const calculateCircumference = function (radius){
    const output = [];
    for(let i=0;i<radius.length;i++){
        output.push(Math.PI*2*radius[i]);
    }
    return output;
}
console.log(calculateCircumference(radius))

