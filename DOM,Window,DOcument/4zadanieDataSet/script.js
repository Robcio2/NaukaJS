const list = document.querySelectorAll('li')
let Number = 1

for (const liItem of list) {
	liItem.textContent = Number
	liItem.dataset.id = Number
	Number++
}

// for (let i = 0; i < list.length; i++) {
// 	list[i].textContent = number
// 	list[i].dataset.id = number
// 	number++
// }

const thirdLi = document.querySelector('[data-id="3"]')
console.log(thirdLi.closest('.wrapper'))
