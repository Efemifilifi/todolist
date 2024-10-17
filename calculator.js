const display = document.getElementById("display")
const historial = document.getElementById("historial");
let operaciones = ""
let text = ""
function appendToDisplay(input){
    display.value += input;
}
function clearDisplay(){
    display.value = "";
}
function calculate(){
    
    try{
        addHistorial();
        display.value = eval(display.value);
        
    }
    catch(error){
        display.value = "Error";
    }
    
}
function addHistorial(){
    operaciones += display.value +":"+ "<br>"+ eval(display.value)
    let p = document.createElement("p");
    text = operaciones.toString()
    p.innerHTML = text;
    historial.appendChild(p)
    operaciones= ""
    
}