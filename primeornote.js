const prompt = require ('prompt-sync')({sigint:true})
let num = prompt("Enter a number")

prime=true
for(let i=2;i<num;i++){
    if(num%i==0){
        prime=false
        break
    }
}
console.log(prime?`${num} is prime`:`${num} is not a prime`);
