rad = [4,6,2,9]

Array.prototype.calculate = function(logic){
    const output = [];
    for(let i=0;i<this.length;i++){
        output.push(logic(this[i]));
    }
    return output;
};

const Findarea = function (rad){
    return Math.PI*rad*rad;
};

console.log(rad.calculate(Findarea))