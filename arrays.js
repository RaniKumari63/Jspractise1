let arr=new Array(23,'cat',new Object());
console.log(arr);
console.log(typeof(arr));
arr.push(3);
arr.pop();
console.log(arr);
arr.push(2);
console.log(arr);
let arr1=[1,2,3,4,5];
arr1.splice(1,3,"hello");
console.log(arr1);
arr1.splice(1,3);
console.log(arr1);
var a=10;
console.log(typeof(typeof(a)));