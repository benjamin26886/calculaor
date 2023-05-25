/**
 * Author: Nicholas Benjamin
 * Date: Thursday May 23rd 2023
 * Aim: The aim of this project is to build a simple calculator
 */
let display_value = ""; //global variable to store value entered by the button, remember display value and display_bottom are not the same thing 
let current_operator = "";
let number1 = ""; //when any of the operations are pressed the first number is saved here 
let number2 = ""; // when the opertaion is pressed again or the evulate button is pressed the second value is saved here 
 
//Functions 
const add =function(num1, num2){
    const number1 = num1;
    const number2 = num2;
    const sum = number1 + number2 ;
    return sum;
}
const subtract =function(num1, num2){
    const number1 = num1;
    const number2 = num2;
    const difference = number1 - number2;
    return difference;
}
const divide =function (num1, num2){
    const number1 = num1;
    const number2 = num2;
    const quotient = number1 / number2;
    return quotient;
}
const multiply= function (num1, num2){
    const number1 = num1;
    const number2 = num2;
    const product = number1 * number2;
    return product;
}
const operate = function(num1,num2,operator){
    let value2 = num2;
    if(operator == "+"){
        add(num1,num2)
        return add;
    }
    if(operator == "-"){
        subtract(num1,num2)
        return subtract;
    }
    if(operator == "÷"){
        divide(num1,num2)
        return divide;
    }
    if(operator == "*"){
        multiply(num1,num2)
        return multiply;
    }
}

// eventListners 
const one = document.querySelector(".one");
one.addEventListener("click",function(){
    display_value += "1"; //concatane 
    display_bottom.textContent =  display_value;
    current_value = display_value;
});

const two = document.querySelector(".two");
two.addEventListener("click",function(){
    display_value += "2";
    display_bottom.textContent =  display_value;
});

const three = document.querySelector(".three");
three.addEventListener("click",function(){
    display_value += "3";
    display_bottom.textContent =  display_value;
});

const four = document.querySelector(".four");
four.addEventListener("click",function(){
    display_value += "4";
    display_bottom.textContent =  display_value;
});

const five = document.querySelector(".five");
five.addEventListener("click",function(){
    display_value += "5";
    display_bottom.textContent =  display_value;
});

const six = document.querySelector(".six");
six.addEventListener("click",function(){
    display_value += "6";
    display_bottom.textContent =  display_value;
});

const seven = document.querySelector(".seven");
seven.addEventListener("click",function(){
    display_value += "7";
    display_bottom.textContent =  display_value;
});

const eight = document.querySelector(".eight");
eight.addEventListener("click",function(){
    display_value += "8";
    display_bottom.textContent =  display_value;
});

const nine = document.querySelector(".nine");
nine.addEventListener("click",function(){
    display_value += "9";
    display_bottom.textContent =  display_value;
});

const zero = document.querySelector(".zero");
zero.addEventListener("click",function(){
    display_value += "0";
    display_bottom.textContent =  display_value;
});

const addition = document.querySelector(".addition");
addition.addEventListener("click",function(){
    //let value1 = current_value; // store the current value into value 1 
    number1 = display_value;
    current_operator = "+"
    display_value+= "+";
    display_bottom.textContent = display_value; // This updates the display on the browser
    display_value = "" ; //clear the display value;

    //let display_value = ""; // clear display value 
    //let operator = "+" // create operator symbol
    
    //current_operator = operator;
    //console.log(value1);
})

//Display
const display_bottom = document.querySelector(".display-bottom");

//Evaluate the values
const equals = document.querySelector(".equals");
equals.addEventListener("click",function(){
    //convert number1 and number2 to integers 
    number2 = display_value;  // here this time number2 will use the display value as its value instead of number1 being used 
    let num1 = parseInt(number1); // here the first value is converted into an integer,before being passed into the operate function
    let num2 = parseInt(number2); // here the second value is converted into an integer,before being passed into the operate function
    /*
    console.log(num1);
    console.log(num2);
    console.log(current_operator);
    */
    operate(num1,num2,current_operator); //This is not complete
    
})
/*
Problem
    1. store the first number that is input into the calculator when a user presses an operator,
        substep -> add eventListner to the addition operator,
        create function that saves the first number of the operation, once plus is hit, the function will save whatever is inside of the display value at the time
        clear the display_value variable 
        save input after display variable is cleared and updated 
        write operate function to take the second value and evaluate operation
    2. save which operation has been chosen
    3. operate() on them when the user presses the “=” key.
*/
    /**
     * 1.user click 1, display value is set to 1 
     * 2.user clicks on addition symbol 
     * 3.display value is stored in value1 
     * 4.clear display 
     * 
     */


    /**
     * 1 is pressed 
     * the plus button is pressed
     * the variable nuber1 is set to display_value
     * current operator is set to +
     * 
     */