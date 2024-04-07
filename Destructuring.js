const vehicles=['mustange','f-150','expedition'];
/* const car=vehicles[0];
const truck=vehicles[1];
const suv=vehicles[2]; */
const[car,truck,suv]=vehicles

console.log(car)
function calculate(a,b)
{
    const add=a+b;
    const substract=a-b;
    const multiply=a*b;
    const divide=a/b;
    return[add,substract,multiply,divide];
}
const[add,substract,multiply,divide]=calculate(4,7);
console.log(add)


const vehicleOne={
    brand:"Ford",
    model:"Mustang",
    type:'car',
    year:2021,
    color:'red'
}
function myVehicle({type,color,brand,model})
{
    const message=type+color+brand
    console.log(message)
}
myVehicle(vehicleOne);
const numberone=[1,2,3];
const numbertwo=[4,5,6];
const numberscombined=[numberone,numbertwo]
console.log(numberscombined)
const numbers=[1,2,3,4,5,6]
const[one,two,...rest]=numbers
console.log(one)
console.log(two)
console.log(rest)