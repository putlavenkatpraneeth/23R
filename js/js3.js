
var car={brand:'toyoto',
    model:'corolla',
    year:2020
};
for(i in car)
    {
        // console.log(`${i}:${car[i]}`.toUpperCase());
    
}
//BRAND:TOYOTO
//MODEL:COROLLA
//YEAR:2020


var numbers=[1,2,3,4,5];
for(i in numbers){
    
    // console.log(`${parseInt(i)+1}-${"HI"}`);
}


var fruits=['apple','banana','cherry','date'];
for(i in fruits){
    // console.log(`${i}-${fruits[i]}`.toUpperCase())
}


var obj={name:'John',
    age:30,
    address:{
        city:'Los Angeles',
        state:'CA'}
};
obj.address.city="San Francisco"

console.log(obj.age);//{ name: 'John', age: 30,address: { city: 'San Francisco', state: 'CA' } }
  

var car={brand:'Toyoto',model:'Camry',year:2020};

car.model="Corolla"
car.year=2022
// console.log(car)



var recipe={name:'pasta',servings:2,ingredients:['noodles','sauce']};

recipe.ingredients.push('cheese');

// console.log(recipe)



