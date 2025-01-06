// // console.log(7%3);
// var x=25;
// x--;
// // console.log(x++);
// // console.log(x);
// // console.log(x++);
// // console.log(++x);
// // console.log(x--);
// // console.log(--x);
// // console.log(++x);
// var x=20;
// x-=20
// // console.log(x)
// var x=20;
// x%=20;
// // console.log(x);
// // console.log(6!=6);
// // var x=5;
// // if(x%2==0){
// //     console.log("even");
// // }
// // else(console.log("odd"))
// var x1=10;
// var x2=5;
// if(x1==x2){
//     console.log("equal");
// }
// else if(x1>x2){
//     console.log("greater")
// }
// else if(x1<x2){
//     console.log("smaller")
// }
var obj={name:'John',
    age:30,
    address:{
        city:'Los Angeles',
        state:'CA'}
};
obj.address.city="San Francisco"

console.log(obj.age);//{ name: 'John', age: 30,address: { city: 'San Francisco', state: 'CA' } }
  

var car={brand:'Toyoto',model:'Camry',year:2020};