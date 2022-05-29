const ulList = document.createElement('ul')
document.body.append(ulList)
const number = 10

for (let i = 1; i <= number; i++) {
	const liItem = document.createElement('li')
	liItem.textContent = i
	ulList.append(liItem)
}

const lastLi = ulList.querySelector('li:last-child')
lastLi.textContent = 'Jestem ostatnikm elementem'

lastLi.getElementsByClassName.backgroundColor = 'blue'
lastLi.getElementsByClassName.padding = '20px 30px'
