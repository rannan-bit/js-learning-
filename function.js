// greet()
function greet(){
    console.log("Hello! , welcome");
    
}

//parameter and argument
function add(a,b){
    console.log(`${a}+${b}=${a+b}`);
    
}
add(30,40)

//return
function multiply(a,b){
    return a*b
}
console.log(multiply(4,5));

//Function Expression
let greet=function(){
    console.log("hello");
    
}
greet()

//Arrow Function
const greet=()=>{
    console.log("Hello! , welcome");
    
}
greet()


//callback function
function greet(name){
    console.log("Hello!"+name);
    
}
function proccesUser(callback){
    callback("Nivin")
}
proccesUser(greet)

function display(){
    console.log("javascript basics");
    
}

//setTimeout()
setTimeout(function(){
    console.log("Hi....Helloooooo");
    
},3000)//output show on the terminal only after 3sec

//Nested function 
function parent(){
    let parentData = "parenDdata"
    console.log(`parent data:${parentData}`);
    
    function child(){
    let childData = "childDdata"
    console.log(`parent data:${parentData}`);
    console.log(`child data:${childData}`);
    
    
    }
    child()
}

//closure
function outer(){
    let x="midhun"
    function inner(){
        console.log(x);
        
    }
    return inner
}
let output=outer()
output()