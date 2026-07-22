const prompt=require('prompt-sync')({sigint:true})
let numArray=[12,6,18,4,2,23]

// find smallest number
//find largest number
//find total sum of array elements

//sum
let sum=0
for(let i=0;i<numArray.length;i++){
    sum=sum+numArray[i]
}
console.log(sum);

//smallest
let smallest=numArray[0]
for(let num of numArray){
    if(num<smallest){
        smallest=num
    }
}
console.log(`smallest number is ${smallest}`);

//largest
let largest=numArray[0]
for(let num of numArray){
    if(num>largest){
        largest=num
    }
}
console.log(`largest number is ${largest}`);

console.log("--------------------------");


let num=prompt("Enter the number")
let found=false
for(let i of numArray){
    if(num==i){
        found=true      
        break  
    }
}if(found){
    console.log(`${num} is found`);
    
}else{
    console.log(`${num} is not found`);
    
}


