const calculator = document.querySelector(".calculator");
const buttons = document.querySelector(".buttons");
const calculator_output = document.querySelector(".calculator_output")
let output_buffer = "";

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
    }

    const clear_button = document.querySelector("#ac");
    clear_button.onclick = clear_all;
}


window.onload = () => {
    init_buttons();
}