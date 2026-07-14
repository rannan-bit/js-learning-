const prompt = require ('prompt-sync')({sigint:true})
let num = prompt ("Enter the number")

factorial=1
for(let i=num;i>=1;i--){
    factorial=factorial*i
}
console.log(factorial);
