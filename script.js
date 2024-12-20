const calculator = document.querySelector(".calculator");
const buttons = document.querySelector(".buttons");
const calculator_output = document.querySelector(".calculator_output")
const button_list = [];
let output_buffer = "";
for(const child of buttons.children){
    if(child.id != "ac" && child.id != "c"){
        child.onclick = () => add_number(Number(child.innerHTML));
        button_list.push(child);
    }
}

const clearall_button = document.querySelector("#ac");
clearall_button.onclick = clear_all;

const clearlast_button = document.querySelector("#c");
clearlast_button.onclick = clear_last;

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
console.log(button_list);