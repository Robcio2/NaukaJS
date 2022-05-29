const num = 10
const numbers = []

for (let i = 0; i < num; i++) {
	numbers.push(i)
}

const checkNumbers = number => {
	if (number % 3 === 0 && number !== 0) {
		console.log(`${number} jest podzielny przez 3`)
	} else {
		console.log(`${number} jest niepodzielny przez 3`)
	}
}

numbers.forEach(checkNumbers)
