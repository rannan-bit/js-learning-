const prompt=require('prompt-sync')({sigint:true})
let num=prompt("Enter the number")
function factorial(num){
    if(num==1 || num==0){
        return 1
    }
    return num*factorial(num-1)
}
console.log(factorial(num));
