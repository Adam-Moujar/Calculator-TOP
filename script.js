const calculator = document.querySelector(".calculator");
const buttons = document.querySelector(".buttons");
const calculator_output = document.querySelector(".calculator_output");
const prev_output = document.querySelector(".prev_output");
let output_buffer = "";
let prev_buffer = "";
let operator = "";
let num1 = null;
let num2 = null;

function add_number(number){
    if(!(number === "." && output_buffer.includes('.')))
        output_buffer += number;
    calculator_output.innerHTML = output_buffer;
}

function clear_all(){
    output_buffer = "";
    num1 = null;
    num2 = null;
    operator = "";
    prev_buffer = "";

    calculator_output.innerHTML = output_buffer;
    prev_output.innerHTML = prev_buffer;
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
            child.onclick = () => {
                equal();
                if(operator != "")
                    operations(operator);
            }
        }
        if(child.classList.contains("unary")){
            child.onclick = () => unary_operations(child.innerHTML);
        }
    }

    const clear_button = document.querySelector("#ac");
    clear_button.onclick = clear_all;
}

function equal(){

    if(num1 === null){
        num1 = output_buffer;
        prev_buffer = num1 + " " + operator;
    }
    else if(num2 === null){
        num2 = output_buffer;
        prev_buffer = num1 + " " + operator + " " + num2;
    }
    else{
        num1 = output_buffer;
        prev_buffer = num1 + " " + operator + " " + num2;
    }
    prev_output.innerHTML = prev_buffer;
    output_buffer = "";
    calculator_output.innerHTML = output_buffer;
}

function set_operator(inner_operator){
    if(num1 != null & num2 != null){
        num2 = null;
    }
    operator = inner_operator;
    equal();
}

function operations(operator){
    if(operator === '+'){
        output_buffer = (Number(num1) + Number(num2)).toString();
    }
    if(operator === '-'){
        output_buffer = (Number(num1) - Number(num2)).toString();
    }
    if(operator === '/'){
        output_buffer = (Number(num1) / Number(num2)).toString();
    }
    if(operator === '*'){
        output_buffer = (Number(num1) * Number(num2)).toString();
    }
    operator = "";
    calculator_output.innerHTML = output_buffer;
}

function unary_operations(operator){
    if(operator === '%'){
        output_buffer = output_buffer / 100;
    }
    if(operator === "+/-"){
        output_buffer = -output_buffer;
    }
    calculator_output.innerHTML = output_buffer;
}

function show_error(){
    clear_all();
    output_buffer = "ERR";
}

window.onload = () => {
    init_buttons();
}