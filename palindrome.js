const prompt=require('prompt-sync')({sigint:true})
let num=prompt('Enter the number')

let input=num
let digit
let palindrome=0
while(num>0){
    digit=num%10
    palindrome=palindrome*10+digit
    num=Math.floor(num/10)
}
if(input==palindrome){
    console.log(input , "is a palindrome");
    
}
else{
    console.log(input , "is not a palindrome");
    
}