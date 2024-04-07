console.log("helloworld");
var a=1;
var b=2;
if(a+b>4)
{
    console.log(a+b);

}
else if(a+b<1)
{
    console.log(a+b);
}
else{
    console.log("hi");
}

for(var i=0;i<5;i++)
console.log("current value of i:"+i);

for(var num=0;num<10;num=num+2)
console.log(num);
let fruits=['apple','peach','orange']
fruits.forEach(item=>console.log(item));
for(item of fruits)
{
    console.log(item);
}
for(items in fruits)
{console.log(items);

}
var i=0;
while(i<5)
{
    console.log("");
}

var num=0;
while(num>0)
{
   console.log(num);
   num++;
}
var a=2;
console.log(a);
console.log(a==2)?console.log("ok"):console.log("notok")
