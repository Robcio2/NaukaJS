let celsius
let temp
const fahrenheit = c => {
	celsius = c
	temp = celsius * 1.8 + 32
    console.log(`${c} C = ${temp} F`)
}

fahrenheit(20)