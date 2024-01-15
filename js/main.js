/* --- LIST ITEMS TITLE --- */

const listItems = document.querySelectorAll(".tariff-item__advantages-item");

for (let listItem of listItems) {
	listItem.setAttribute("title", listItem.textContent);
}



/* --- BUTTONS --- */

const buttons = document.querySelectorAll(".tariff-item-inner-desktop .tariff-item__price-button");

for (let button of buttons) {
	button.addEventListener("click", function getTariffName() {
		let targetSibling = this.closest(".tariff-item__price-wrapper").parentNode.querySelector(".tariff-item__title");
		
		let tariffName = targetSibling.textContent.trim();
		
		console.log(tariffName);
	})
}



/* --- TIMER --- */

const targetButtons = document.querySelectorAll(".target-button");

// Установка конечной даты
const deadline = new Date(2024, 00, 16, 06, 00);

for (let targetButton of targetButtons) {
	document.addEventListener("DOMContentLoaded", function timer() {
		// ID таймера
		let timerId = null;

		// Получение элементов, содержащих компоненты даты
	//	const $days = document.querySelector(".timer__days");
		const $hours = document.querySelector(".timer__hours");
		const $minutes = document.querySelector(".timer__minutes");
		const $seconds = document.querySelector(".timer__seconds");

		// Вычисление разницы дат и установка оставшегося времени
		function countdownTimer() {
			const diff = deadline - new Date();

			if (diff <= 0) {
				clearInterval(timerId);
				targetButton.setAttribute("disabled", "");
				targetButton.classList.add("disabled");
			}

	//		const days = diff > 0 ? Math.floor(diff / 1000 / 60 / 60 / 24) : 0;
			const hours = diff > 0 ? Math.floor(diff / 1000 / 60 / 60) % 24 : 0;
			const minutes = diff > 0 ? Math.floor(diff / 1000 / 60) % 60 : 0;
			const seconds = diff > 0 ? Math.floor(diff / 1000) % 60 : 0;

	//		$days.textContent = days < 10 ? "0" + days : days;
			$hours.textContent = hours < 10 ? "0" + hours : hours;
			$minutes.textContent = minutes < 10 ? "0" + minutes : minutes;
			$seconds.textContent = seconds < 10 ? "0" + seconds : seconds;
		}

		// Вызов функции
		countdownTimer();

		// Вызов функции countdownTimer каждую секунду
		timerId = setInterval(countdownTimer, 1000);
	});
}



/* --- TIMER -- TABLET VERTICAL --- */

const targetButtonTablet = document.querySelector(".tariff-item-inner-tablet .target-button");

document.addEventListener("DOMContentLoaded", function timerTablet() {
	// ID таймера
	let timerId = null;
	
	// Получение элементов, содержащих компоненты даты
//	const $days = document.querySelector(".timer__days");
	const $hours = document.querySelector(".tariff-item-inner-tablet .timer__hours");
	const $minutes = document.querySelector(".tariff-item-inner-tablet .timer__minutes");
	const $seconds = document.querySelector(".tariff-item-inner-tablet .timer__seconds");

	// Вычисление разницы дат и установка оставшегося времени
	function countdownTimer() {
		const diff = deadline - new Date();
		
		if (diff <= 0) {
			clearInterval(timerId);
			targetButtonTablet.setAttribute("disabled", "");
			targetButtonTablet.classList.add("disabled");
		}
		
//		const days = diff > 0 ? Math.floor(diff / 1000 / 60 / 60 / 24) : 0;
		const hours = diff > 0 ? Math.floor(diff / 1000 / 60 / 60) % 24 : 0;
		const minutes = diff > 0 ? Math.floor(diff / 1000 / 60) % 60 : 0;
		const seconds = diff > 0 ? Math.floor(diff / 1000) % 60 : 0;
		
//		$days.textContent = days < 10 ? "0" + days : days;
		$hours.textContent = hours < 10 ? "0" + hours : hours;
		$minutes.textContent = minutes < 10 ? "0" + minutes : minutes;
		$seconds.textContent = seconds < 10 ? "0" + seconds : seconds;
	}

	// Вызов функции
	countdownTimer();
	
	// Вызов функции countdownTimer каждую секунду
	timerId = setInterval(countdownTimer, 1000);
});



/* --- BUTTONS -- TABLET VERTICAL --- */

const buttonsTablet = document.querySelectorAll(".tariff-item-inner-tablet .tariff-item__price-button");

for (let button of buttonsTablet) {
	button.addEventListener("click", function getTariffName() {
		let tariffName = this.closest(".tariff-item-inner-tablet__part").previousElementSibling.children[1].textContent.trim();;
		
		
//		childNodes.querySelector(".tariff-item__title");
//		console.log(newElem)
//		.childNodes.querySelector(".tariff-item__title");
		
//		let tariffName = targetSibling.textContent.trim();
//		
		console.log(tariffName);
	})
}