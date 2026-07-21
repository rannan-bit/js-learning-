const prompt = require ('prompt-sync')({sigint:true})
let num = prompt ("Enter the number")//7

factorial=1
for(let i=num;i>=1;i--){//0
    factorial=factorial*i//5040
}
console.log(factorial);
