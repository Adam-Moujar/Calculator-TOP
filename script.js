const calculator = document.querySelector(".calculator");
const buttons = document.querySelector(".buttons");
const calculator_output = document.querySelector(".calculator_output")
const button_list = [];
let output_buffer = "";
for(const child of buttons.children){
    child.onclick = () => add_number(Number(child.innerHTML));
    button_list.push(child);
}

function add_number(number){
    if(output_buffer === ""){
        output_buffer = number;
    }
    else{
        output_buffer = output_buffer * 10 + number;
    }
    calculator_output.innerHTML = output_buffer;
}
console.log(button_list);