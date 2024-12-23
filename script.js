const calculator = document.querySelector(".calculator");
const buttons = document.querySelector(".buttons");
const calculator_output = document.querySelector(".calculator_output");
const prev_output = document.querySelector(".prev_output");

let output_buffer = "";
let prev_buffer = "";
let operator = "";
let num1 = null;
let num2 = null;

function set_current_output(new_output){
    output_buffer = new_output;
    calculator_output.innerHTML = output_buffer;
}

function set_previous_output(new_previous){
    prev_buffer = new_previous;
    prev_output.innerHTML = prev_buffer;
}

function clear_all(){
    num1 = null;
    num2 = null;
    operator = "";
    
    set_current_output("");
    set_previous_output("");
}

function show_error(){
    clear_all();
    set_current_output("ERR");
}


function add_number(number){
    if(!(number === "." && output_buffer.includes('.')))
        set_current_output(output_buffer + number);
}

function isNumeric(n){
    return !isNaN(parseFloat(n)) && isFinite(n);
}
function set_operator(operator_param){
    switch(operator_param){
        case "+":
            set_operator_addition();
            break;
        case "-":
            set_operator_substraction();
            break;
        case "x":
            set_operator_multiplication();
            break;
        case "/":
            set_operator_division();
            break;
        case "+/-":
            set_operator_sign();
            break;
        case "%":
            set_operator_percentage();
            break;
        default:
            console.log("What?!"); break;
    }
}

function set_operator_addition(){
    if(num1 === null){
        if(isNumeric(output_buffer)){
            operator = "+";
            num1 = Number(output_buffer);
            set_previous_output(output_buffer + " +");
            set_current_output("");
        }
    }
    else{
        if(isNumeric(output_buffer)){
            operator = "+";
            num1 = Number(output_buffer);
            set_previous_output(output_buffer + " +");
            set_current_output("");
        }
    }
}

function set_operator_substraction(){
    if(num1 === null){
        if(output_buffer === ""){
            set_current_output("-");
        }
        else if(output_buffer === "-"){
            set_current_output("");
        }
        else{
            operator = "-";
            num1 = Number(output_buffer);
            set_previous_output(output_buffer + " -");
            set_current_output("");
        }
    }
    else{
        if(output_buffer === ""){
            set_current_output("-");
        }
        else if(output_buffer === "-"){
            set_current_output("");
        }
        else{
            show_error();
        }
    }
}

function set_operator_multiplication(){
    if(num1 === null){
        if(isNumeric(output_buffer)){
            operator = "x";
            num1 = Number(output_buffer);
            set_previous_output(output_buffer + " x");
            set_current_output("");
        }
        else{
            show_error();
        }
    }
    else{
        show_error();
    }
}

function set_operator_division(){
    if(num1 === null){
        if(isNumeric(output_buffer)){
            operator = "/";
            num1 = Number(output_buffer);
            set_previous_output(output_buffer + " /");
            set_current_output("");
        }
        else{
            show_error();
        }
    }
    else{
        show_error();
    }
}

function set_operator_sign(){
    if(isNumeric(output_buffer)){
        set_current_output((-1 * Number(output_buffer)).toString())
    }
}

function set_operator_percentage(){
    if(isNumeric(output_buffer)){
        set_current_output((Number(output_buffer) / 100).toString())
    }
}

function equal(){
    if(num1 != null && operator != ""){
        if(num2 === null){
            if(isNumeric(output_buffer)){
                num2 = Number(output_buffer);
            }
            else{
                show_error();
                return;
            }
        }
        set_previous_output(num1 + " " + operator + " " + num2 + " =");
        switch(operator){
            case "+":
                num1 = num1 + num2;
                break;
            case "-":
                num1 = num1 - num2;
                break;
            case "x":
                num1 = num1 * num2;
                break;
            case "/":
                num1 = num1 / num2;
                break;
            default:
                console.log("ERR: DEFAULT ON EQUAL FUNCTION");
                break;
        }
        set_current_output(num1.toString());
    }
}

function init_buttons(){
    for(const child of buttons.children){
        if(child.classList.contains("number")){
            child.onclick = () => add_number(child.innerHTML);
        }
        if(child.classList.contains("operator")){
            child.onclick = () => set_operator(child.innerHTML);
        }
        if(child.classList.contains("equal")){
            child.onclick = () => equal();
        }
        const clear_button = document.querySelector("#ac");
        clear_button.onclick = clear_all;
    }
}


window.onload = () => {
    init_buttons();
}