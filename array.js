let weekDay=["monday","tuesday","wednesday"]
//type of array
console.log(typeof weekDay);
// to access specific element
console.log(weekDay[1]);
//to find length of an array
console.log(weekDay.length);
//to find tha last element of array
console.log(weekDay[weekDay.length-1]);
console.log(weekDay);

console.log("--------------");


//access array using for loop
for(let i=0;i<weekDay.length;i++){
    console.log(weekDay[i]);
    
}
console.log("--------------");

//using for - of loop
for(let day of weekDay){
    console.log(day);
    
}

console.log("--------------");

//using for - in loop
for(let i in weekDay){
    console.log(i);
    console.log(weekDay[i]);
    
    
}
