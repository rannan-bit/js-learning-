const prompt=require('prompt-sync')({sigint:true})

let num=prompt('Enter the number')
let input=num
let digit
let armstrong=0

while(num>0){
    digit=num%10
    armstrong=armstrong+digit**3
    num=Math.floor(num/10)
}
console.log(input==armstrong?`${input} is a armstrong`:`${input} is not a armstrong`);

