/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const convertInput = document.getElementById('convert-input')
const convertBtn = document.getElementById('convert-btn')
// convertInput.defaultValue = 20
let convertValue = convertInput.value

const lengthP = document.getElementById('length-p')
const volumeP = document.getElementById('volume-p')
const massP = document.getElementById('mass-p')

//  Listen for text field changes and set convertValue to whatever the textbox says

convertInput.addEventListener('change', function() {
    convertValue = convertInput.value 
    console.log(convertValue)
})

convertInput.addEventListener('keypress', function(event){
    if (event.key === "Enter") {
        event.preventDefault()
        convertFunction()
    }
})

// Set the values of all of the div paragraphs to reflect 

convertBtn.addEventListener('click', function() {
    convertFunction()
})

function convertFunction() {

    convertValue = convertInput.value
    
    lengthP.textContent = `${convertValue} meters = ${(convertValue * 3.281).toFixed(3)} feet | ${convertValue} feet = ${(convertValue / 3.281).toFixed(3)} meters`

    volumeP.textContent = `${convertValue} liters = ${(convertValue * .264).toFixed(3)} gallons | ${convertValue} gallons = ${(convertValue / .264).toFixed(3)} liters`

    massP.textContent = ` ${convertValue} kilograms = ${(convertValue * 2.204).toFixed(3)} pounds | ${convertValue} pounds = ${(convertValue / 2.204).toFixed(3)} kilos`

}