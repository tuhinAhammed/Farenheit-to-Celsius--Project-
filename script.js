
function farenheitToCelsius(){
    var farenheit = document.getElementById("farenheit") 
    var celsius = document.getElementById("celsius")
    var farenheitValue = farenheit.value
    var celsiusConvert = (farenheitValue-32) * (5/9)
    celsius.innerHTML = celsiusConvert

    if (!farenheitValue){
        celsius.innerHTML = "Enter Farenheit Value"
    }
    
}

