function add (a,b){
    return a+b;
};
function subtract(a,b){
    return a-b;
};
function multiply(a,b){
    return a*b;
};
function divide(a,b){
    if(b===0){
        return "Error: Division by zero";
    };
    return a/b;
};

let num1=null;
let num2=null;
let operator=null;

function operate(a,b,operator){
    a=Number(a);
    b=Number(b);

    switch(operator){
        case '+':
            return add(a,b);
        case '-':
            return subtract(a,b);
        case '*':
            return multiply(a,b);
        case '/':
            return divide(a,b);
        default:
            return "Error: Invalid operator";
    };
};

const display=document.querySelector(".display");
const buttons=document.querySelectorAll("button");

let currentDisplay="";
let resetDisplay=false;

buttons.forEach(button=>{

    const value=button.textContent;

    if(!isNaN(value) || value === "."){
        button.addEventListener("click",()=>{
            if(resetDisplay){
                currentDisplay="";
                resetDisplay=false;
            };

            if(value === '.' && currentDisplay.includes('.')) return;
            currentDisplay+=value;
            display.textContent=currentDisplay;
        });
    };
});

const operators=document.querySelectorAll(".operator");

operators.forEach(button=>{
    button.addEventListener("click",()=>{
        if(operator!==null)evaluate();

        num1=currentDisplay;
        operator=button.textContent;
        resetDisplay=true;
    });
});

const equalsBtn=document.querySelector(".equal");
equalsBtn.addEventListener("click",()=>{
    if(operator===null||resetDisplay)return;

    num2=currentDisplay;
    evaluate();
});

function evaluate(){
    const result=operate(num1,num2,operator);

    display.textContent=result;
    currentDisplay=result;
    num1=result;
    operator=null;
    resetDisplay=true;
};

const clearBtn=document.querySelector(".clear");
clearBtn.addEventListener("click",()=>{
    currentDisplay="";
    num1=null;
    num2=null;
    operator=null;
    display.textContent="";
});

const deleteBtn=document.querySelector(".delete");
deleteBtn.addEventListener("click",()=>{
    currentDisplay=currentDisplay.slice(0,-1);
    display.textContent=currentDisplay;
});