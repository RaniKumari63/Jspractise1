let values=[1,2,3,4,5,6];
values.push(7);
values.push(8);
console.log(values.length);
let data=['Navin',5,{tech:'JS'},
function(){console.log("HelloWorld");}];

console.log(data);
data[3]();
let nums=[42,51,24,98,65,12];
console.log(nums);
nums.forEach((n)=>{
console.log(n);
})
nums.filter(n=>n>30).map(n=>n*2).forEach(num=>console.log("num"+num));
let result=nums.filter(n=>n>30).map(n=>n*2).reduce((a,b)=>a+b);
console.log(result)
let nums1=new Set("hhhhhhhhhh");
console.log(nums1)