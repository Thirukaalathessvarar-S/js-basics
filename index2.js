// very convenient function method which uses MAP

const radii = [3,1,2,4]
const area = function (radii){
    return Math.PI*radii*radii;
};

const circumference = function (radii){
    return 2*Math.PI*radii;
};

console.log(radii.map(area));
console.log(radii.map(circumference));
