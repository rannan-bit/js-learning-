const prompt=require('prompt-sync')({sigint:true})

let day=prompt("Enter a weekday")
console.log(day);


switch(day){
    case 'monday': console.log("This is a weekday");
    break
    case 'tuesday': console.log("This is a weekday");
    break
    case 'wednesday': console.log("This is a weekday");
    break
    case 'thursday': console.log("This is a weekday");
    break
    case 'friday': console.log("This is a weekday");
    break
    case 'saturday': console.log("This is a weekday");
    break
    case 'sunday': console.log("This is a Holiday!");
    break
    default      : console.log("enter a valid weekday");
    
}