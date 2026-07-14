const prompt = require ('prompt-sync')({sigint:true})

let num = prompt ("Enter a number")
let pattern=0
let i=1
while(i<=num){
    pattern=pattern*10+i
    i++
}
console.log(pattern);

console.log(pattern*num);

