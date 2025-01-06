// function sum(){
// console.log(2+2);
// return "hello"
// }
// console.log(sum())

// function sum() {
//   var a = 5;
//   var b = 4;
//   return a + b;
// }
// console.log(sum());

// function demo(a, b) {
//   console.log(a + b, "add");
//   console.log(a * b, "mul");
// }
// demo(3, 5);
// demo(4, 5);
// demo(6, 5);
// demo(5, 5);

// var x=function (a,b){
//     console.log("hello");
//     console.log(a+b);
// }
// x(5,5);

// function arr(x) {
//   // console.log(x[0]+x[x.length-1])
//   if (x > 0 && x % 2 == 0) {
//     console.log("even number");
//   } else if (x > 0 && x % 2 != 0) {
//     console.log("odd number");
//   } else {
//     console.log("invalid number");
//   }
// }

// arr(-6);

// ~~

// var ip="hello";
// var op=""
// for(i=0;i<ip.length;i++){
//     op=op+ip[i]

//     console.log(op);
// }

// function input(x) {
//   input1 = "";
//   for (i = x.length - 1; i >= 0; i--) {
//     input1 = input1 + x[i];
//   }
//   if (x == input1) {
//     console.log("palindrome");
//   } else {
//     console.log("not palindrome");
//   }
// }

// input("dade");
// input("dad");
// input("mom");
// input("pop");

// var a=20;
// var b=30;
// var c=35;

// if(a>b&&a>c){
//     console.log("a is greater");

// }
// else if(b>a&&b>c){
//     console.log("b is greater");

// }
// else{
//     console.log("c is greater");

// }

// function input(a, b, c) {
//   if (a > b && a > c) {
//     console.log(`${a}is greater`);
//   } else if (b > a && b > c) {
//     console.log(`${b}is greater`);
//   } else {
//     console.log(`${c}is greater`);
//   }
// }
// input(4, 2, 3);
// input(30,20,10);

// function ip(x) {
//   op = "";
//   for (i = x.length - 1; i >= 0; i--) {
//     op = op + x[i];
//   }

//   if (x == op) {
//     console.log("pal");
//   } else {
//     console.log("not pal");
//   }
// }
// ip("dade");

// function sum(){

// var a=5
// var b=5
// return a+b
// }
// console.log(sum());
// function ip(s_name,s_age=25){

//   console.log(`${s_name} at age${s_age}`)

// }
// ip("venkat")

// function arr(x){

// console.log(x.length);

// }

// var ip = [1, 2, 3, 4, 5, 8, 9];
// var op = "";
// for (i = ip.length - 1; i >= 0; i--) {
//   op = op + ip[i];
// }
// console.log(`[${op}]`);

// function arr(x) {
//   op = "";
//   for (i = x.length - 1; i >= 0; i--) {
//     op = op + x[i];
//   }
//   console.log(op);
// }
// arr([1, 2, 3, 4, 5, 6, 7, 8]);
// arr([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
var ip=[1,2,-3,-4,5];
for(i=0;i<=ip.length-1;i++){
op=op+ip[i]
}
if(ip.length%2==0){
    console.log(op);
    
}
