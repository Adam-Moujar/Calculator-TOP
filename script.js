const calculator = document.querySelector(".calculator");
const buttons = document.querySelector(".buttons");
const calculator_output = document.querySelector(".calculator_output")
let output_buffer = "";
let operator = "";
let num1 = null;
let num2 = null;

function add_number(number){
    if(output_buffer === ""){
        output_buffer = number;
    }
    else{
        output_buffer = output_buffer * 10 + number;
    }
    calculator_output.innerHTML = output_buffer;
}

function clear_all(){
    if(output_buffer != ""){
        output_buffer = "";
    }
    calculator_output.innerHTML = output_buffer;
}

function clear_last(){
    if(output_buffer === "" || output_buffer < 10){
        output_buffer = "";
    }
    else{
        output_buffer = (output_buffer - (output_buffer % 10)) / 10
    }
    calculator_output.innerHTML = output_buffer;
}

function init_buttons(){
    for(const child of buttons.children){
        if(child.classList.contains("number")){
            child.onclick = () => add_number(Number(child.innerHTML));
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
    }

    const clear_button = document.querySelector("#ac");
    clear_button.onclick = clear_all;
}

function equal(){
    if(num1 === null){
        num1 = output_buffer;
    }
    else{
        num2 = output_buffer;
    }
    output_buffer = "";
    calculator_output.innerHTML = output_buffer;
}

function set_operator(inner_operator){
    operator = inner_operator;
    equal();
}

function operations(operator){
    if(operator === '+'){
        output_buffer = num1 + num2;
    }
    if(operator === '-'){
        output_buffer = num1 - num2;
    }
    if(operator === '/'){
        output_buffer = num1 / num2;
    }
    if(operator === '*'){
        output_buffer = num1 * num2;
    }
    operator = "";
    calculator_output.innerHTML = output_buffer;
}


window.onload = () => {
    init_buttons();
}