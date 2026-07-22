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
console.log(smallest);

//largest
let largest=numArray[0]
for(let num of numArray){
    if(num>largest){
        largest=num
    }
}
console.log(largest);

