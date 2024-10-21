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
        saveData();
        
    }
    catch(error){
        display.value = "Error";
    }
    
}
function addHistorial(){
    operaciones += display.value +":"+ "<br>"+ eval(display.value)
    let li = document.createElement("li");
    text = operaciones.toString()
    li.innerHTML = text;
    historial.appendChild(li)
    operaciones= ""
    saveData()
    
}
function saveData(){
    localStorage.setItem("data",historial.innerHTML)
}
function borrarTodo(){
    while(historial.lastElementChild && historial.lastElementChild != "<h1>Este es tu historial de operaciones:</h1>"){
        console.log(historial.lastElementChild)
    historial.removeChild(historial.lastElementChild)}
    saveData()
}