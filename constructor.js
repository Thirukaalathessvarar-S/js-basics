// FACTORY FUNCTION
function person(){
    return{
        firstName : 'Elon',
        lastName  : 'musk',
        draw(){
            console.log('draw');
        }
    }
}

const person1 = person()
console.log(person1)
console.log(person1.draw())
const person2 = person()



// CONSTRUCTOR FUCNTION 1
function Circle(radius){
    this.radius = radius;
    this.draw = function(){
        console.log('draw');
    }
}
const circle = new Circle(3);
console.log(circle)



// CONSTRUCTOR FUNCTION 2
function Product(name,price,quantity){
    this.name = name,
    this.price = price,
    this.quantity = quantity
    this.printProduct = () =>  console.log(this.name + ' price = ' + this.price)
}

const product = new Product('Honda',19.99,10);
product.printProduct();


// CONSTRUCTOR FUNCTION 3
function Car(name,price){
    this.car_name = name,
    this.car_price = price,
    this.carPrint = () => console.log(this.car_name + ' Price = ' + this.car_price)
}
const car = new Car('Toyota',44000)
console.log(car.carPrint())