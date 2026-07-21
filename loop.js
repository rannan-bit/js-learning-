let i=1
while(i<=10){
    console.log(i);
    i++
}

let z=1
while(z<=50){
    if(z%2==0){
        console.log(z);
        
    }
    z++
}


let j=5
while(j>=1){
    console.log(j);
    j--
    
}

let sum=0

let m=1
while(m<=10){
    sum+=m
    m++
}
console.log(sum);


const prompt = require('prompt-sync')({sigint:true})
let num=prompt("Enter a number")//523

let digit
let rev=0

while(num>0){
    digit=num%10//5
    rev=rev*10+digit//325
    num=Math.floor(num/10)//0

}
console.log(rev);




