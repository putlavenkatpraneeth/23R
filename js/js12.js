var arr=["*","**","***","****","*****","******","*******"];


for(i in arr){

    if(arr[i].length%2==0){
    // console.log(arr[i])
    }
}
// var arr=["a","A","b","B","c","C"];
// for(i in arr){
//     if(arr[i]==arr[i].toUpperCase()){
//     console.log(arr[i])}
// else{console.log(arr)}


// }
var str="helloWORLD";
op=""
for(i in str){
    if(i%2!=0)
   // console.log(str[i])
op=op+str[i]
}
//console.log(op)
var str="JavaSCRipt"
op=""
for(i in str){
    if(str[i]==str[i].toLowerCase())
        op=op+str[i]
}
// console.log(op)
var arr=["good","hi","Hello","Welcome","students","Bye"];

for(i in arr){
   if(arr[i]!=arr[i].toLowerCase()){
 op.push(arr[i])
   }
   // op=op+arr[i]
   // console.log(arr[i]);
}
// console.log(op);
var arr=[1,2,3,5,10,15,34,20];
arr1=[]
for(i in arr){
    if(arr[i]%5==0)
       // console.log(arr[i]);
    arr1[arr1.length]=arr[i]
}
// console.log(arr1);