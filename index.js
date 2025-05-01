/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
const inputEl = document.getElementById("input-el")
const lengthUnitEl = document.getElementById("length-unit-el")
const volumeUnitEl = document.getElementById("volume-unit-el")
const massUnitEl = document.getElementById("mass-unit-el")
const btnEl = document.getElementById("btn-el")
const errorMessageEl = document.getElementById("error-message")

btnEl.addEventListener("click", function(){
    const meterFeet = 3.281
    const literGallon = 0.264
    const kiloPound = 2.204
    const meterVal = (Number(inputEl.value) / meterFeet).toFixed(3)
    const footVal = (Number(inputEl.value) * meterFeet).toFixed(3)
    const literVal = (Number(inputEl.value) / literGallon).toFixed(3)
    const gallonVal = (Number(inputEl.value) * literGallon).toFixed(3)
    const kiloVal = (Number(inputEl.value) / kiloPound).toFixed(3)
    const poundVal = (Number(inputEl.value) * kiloPound).toFixed(3)
   
    
    if (Number.isNaN(Number(inputEl.value))){
        errorMessageEl.textContent = "Please enter a number"
       
    } else {
        lengthUnitEl.innerHTML = `${inputEl.value} ${(Number(inputEl.value) > 1 ? "meters" : "meter")} = ${footVal} ${footVal > 1 ? "feet" : "foot"} | ${inputEl.value} ${(Number(inputEl.value) > 1 ? "feet" : "foot" )} = ${meterVal} ${(meterVal > 1 ? "meters" : "meter")}`
        
        volumeUnitEl.innerHTML = `${inputEl.value} ${(Number(inputEl.value) > 1 ? "liters" : "liter")} = ${gallonVal} ${(gallonVal > 1 ? "gallons" : "gallon")} | ${inputEl.value} ${(Number(inputEl.value) > 1 ? "gallons" : "gallon" )} = ${literVal} ${(literVal > 1 ? "liters" : "liter")}`

        massUnitEl.innerHTML = `${inputEl.value} ${(Number(inputEl.value) > 1 ? "kilograms" : "kilogram")} = ${poundVal} ${(poundVal > 1 ? "pounds" : "pound")} | ${inputEl.value} ${(Number(inputEl.value) > 1 ? "pounds" : "pound" )} = ${kiloVal} ${(kiloVal > 1 ? "kilograms" : "kilogram")}`
       errorMessageEl.textContent =  ""
    }
})