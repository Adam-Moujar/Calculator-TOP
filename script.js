const calculator = document.querySelector(".calculator");
const buttons = document.querySelector(".buttons");
const button_list = []; 
for(const child of buttons.children){
    button_list.push(child);
}
console.log(button_list);