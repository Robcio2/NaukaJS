let score
const add = (x, y) => {
	score = x + y

	if (score % 2 === 0) {
		evenMsg()
	} else {
		oddMsg()
	}
}

const evenMsg = () => {
	console.log(`liczba ${score} jest parzysta`)
}
const oddMsg = () => {
	console.log(`liczba ${score} jest nieparzysta`)
}

add(10, 11)
