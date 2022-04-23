let score = document.querySelector('#score');
let savedScore = localStorage.getItem('savedScore');
localStorage.removeItem('savedScore');
let selected = false;
let clicked = [];
let answered = false;
let total = 0;

if (savedScore === null) {
	savedScore = 0;
} else {
	savedScore = Number(savedScore);
}

score.innerText = 'Your Score is!: $' + savedScore;
console.log(score);

async function readJeopardyData() {
	let rawJeopardyData = await fetch('jeopardy.json');
	let jeopardyData = await rawJeopardyData.json();
	console.log(jeopardyData);

	let groupedData = _.groupBy(jeopardyData, 'value');
	console.log(groupedData);
	console.log(groupedData.$100);

	let boxOne = document.querySelector('.one');
	let boxTwo = document.querySelector('.two');
	let boxThree = document.querySelector('.three');
	let boxFour = document.querySelector('.four');
	let boxFive = document.querySelector('.five');
	let boxSix = document.querySelector('.six');
	let boxSeven = document.querySelector('.seven');
	let boxEight = document.querySelector('.eight');
	let boxNine = document.querySelector('.nine');
	let boxTen = document.querySelector('.ten');
	let boxEleven = document.querySelector('.eleven');
	let boxTwelve = document.querySelector('.twelve');
	let boxThirteen = document.querySelector('.thirteen');
	let boxFourteen = document.querySelector('.fourteen');
	let boxFifteen = document.querySelector('.fifteen');
	let boxSixteen = document.querySelector('.sixteen');
	let boxSeventeen = document.querySelector('.seventeen');
	let boxEighteen = document.querySelector('.eighteen');
	let boxNineteen = document.querySelector('.nineteen');
	let boxTwenty = document.querySelector('.twenty');
	let boxTwentyOne = document.querySelector('.twentyOne');
	let boxTwentyTwo = document.querySelector('.twentyTwo');
	let boxTwentyThree = document.querySelector('.twentyThree');
	let boxTwentyFour = document.querySelector('.twentyFour');
	let boxTwentyFive = document.querySelector('.twentyFive');

	let question = document.querySelector('#displayQuestion');

	function randomNumber100() {
		let number = Math.floor(Math.random() * 2008);
		return number;
	}
	function randomNumber200() {
		let number = Math.floor(Math.random() * 6889);
		return number;
	}
	function randomNumber400() {
		let number = Math.floor(Math.random() * 9609);
		return number;
	}
	function randomNumber600() {
		let number = Math.floor(Math.random() * 4651);
		return number;
	}
	function randomNumber800() {
		let number = Math.floor(Math.random() * 7292);
		return number;
	}

	boxOne.addEventListener('click', function () {
		if (selected === true) {
			return false;
		}
		selected = true;
		let choice = groupedData.$100[randomNumber100()];
		question.innerHTML = choice.question;
		currentQuestion = choice.answer;
		value = 100;
		wrongRight.innerHTML = 'Your Answer?';
		disableClicking('one');
	});

	boxTwo.addEventListener('click', function (event) {
		if (selected === true) {
			return false;
		}
		selected = true;

		let choice = groupedData.$100[randomNumber100()];
		question.innerHTML = choice.question;
		currentQuestion = choice.answer;
		value = 100;
		wrongRight.innerHTML = 'Your Answer?';
		disableClicking('two');
	});

	boxThree.addEventListener('click', function () {
		if (selected === true) {
			return false;
		}
		selected = true;
		let choice = groupedData.$100[randomNumber100()];
		question.innerHTML = choice.question;
		currentQuestion = choice.answer;
		value = 100;
		wrongRight.innerHTML = 'Your Answer?';
		disableClicking('three');
	});

	boxFour.addEventListener('click', function () {
		if (selected === true) {
			return false;
		}
		selected = true;
		let choice = groupedData.$100[randomNumber100()];
		question.innerHTML = choice.question;
		currentQuestion = choice.answer;
		value = 100;
		wrongRight.innerHTML = 'Your Answer?';
		disableClicking('four');
	});
	boxFive.addEventListener('click', function () {
		if (selected === true) {
			return false;
		}
		selected = true;
		let choice = groupedData.$100[randomNumber100()];
		question.innerHTML = choice.question;
		currentQuestion = choice.answer;
		value = 100;
		wrongRight.innerHTML = 'Your Answer?';
		disableClicking('five');
	});
	boxSix.addEventListener('click', function () {
		if (selected === true) {
			return false;
		}
		selected = true;
		let choice = groupedData.$200[randomNumber200()];
		question.innerHTML = choice.question;
		currentQuestion = choice.answer;
		value = 200;
		wrongRight.innerHTML = 'Your Answer?';
		disableClicking('six');
	});
	boxSeven.addEventListener('click', function () {
		if (selected === true) {
			return false;
		}
		selected = true;
		let choice = groupedData.$200[randomNumber200()];
		question.innerHTML = choice.question;
		currentQuestion = choice.answer;
		value = 200;
		wrongRight.innerHTML = 'Your Answer?';
		disableClicking('seven');
	});
	boxEight.addEventListener('click', function () {
		if (selected === true) {
			return false;
		}
		selected = true;
		let choice = groupedData.$200[randomNumber200()];
		question.innerHTML = choice.question;
		currentQuestion = choice.answer;
		value = 200;
		wrongRight.innerHTML = 'Your Answer?';
		disableClicking('eight');
	});
	boxNine.addEventListener('click', function () {
		if (selected === true) {
			return false;
		}
		selected = true;
		let choice = groupedData.$200[randomNumber200()];
		question.innerHTML = choice.question;
		currentQuestion = choice.answer;
		value = 200;
		wrongRight.innerHTML = 'Your Answer?';
		disableClicking('nine');
	});
	boxTen.addEventListener('click', function () {
		if (selected === true) {
			return false;
		}
		selected = true;
		let choice = groupedData.$200[randomNumber200()];
		question.innerHTML = choice.question;
		currentQuestion = choice.answer;
		value = 200;
		wrongRight.innerHTML = 'Your Answer?';
		disableClicking('ten');
	});
	boxEleven.addEventListener('click', function () {
		if (selected === true) {
			return false;
		}
		selected = true;
		let choice = groupedData.$400[randomNumber400()];
		question.innerHTML = choice.question;
		currentQuestion = choice.answer;
		value = 400;
		wrongRight.innerHTML = 'Your Answer?';
		disableClicking('eleven');
	});
	boxTwelve.addEventListener('click', function () {
		if (selected === true) {
			return false;
		}
		selected = true;
		let choice = groupedData.$400[randomNumber400()];
		question.innerHTML = choice.question;
		currentQuestion = choice.answer;
		value = 400;
		wrongRight.innerHTML = 'Your Answer?';
		disableClicking('twelve');
	});
	boxThirteen.addEventListener('click', function () {
		if (selected === true) {
			return false;
		}
		selected = true;
		let choice = groupedData.$400[randomNumber400()];
		question.innerHTML = choice.question;
		currentQuestion = choice.answer;
		value = 400;
		wrongRight.innerHTML = 'Your Answer?';
		disableClicking('thirteen');
	});
	boxFourteen.addEventListener('click', function () {
		if (selected === true) {
			return false;
		}
		selected = true;
		let choice = groupedData.$400[randomNumber400()];
		question.innerHTML = choice.question;
		currentQuestion = choice.answer;
		value = 400;
		wrongRight.innerHTML = 'Your Answer?';
		disableClicking('fourteen');
	});
	boxFifteen.addEventListener('click', function () {
		if (selected === true) {
			return false;
		}
		selected = true;
		let choice = groupedData.$400[randomNumber400()];
		question.innerHTML = choice.question;
		currentQuestion = choice.answer;
		value = 400;
		wrongRight.innerHTML = 'Your Answer?';
		disableClicking('fifteen');
	});
	boxSixteen.addEventListener('click', function () {
		if (selected === true) {
			return false;
		}
		selected = true;
		let choice = groupedData.$600[randomNumber600()];
		question.innerHTML = choice.question;
		currentQuestion = choice.answer;
		value = 600;
		wrongRight.innerHTML = 'Your Answer?';
		disableClicking('sixteen');
	});
	boxSeventeen.addEventListener('click', function () {
		if (selected === true) {
			return false;
		}
		selected = true;
		let choice = groupedData.$600[randomNumber600()];
		question.innerHTML = choice.question;
		currentQuestion = choice.answer;
		value = 600;
		wrongRight.innerHTML = 'Your Answer?';
		disableClicking('seventeen');
	});
	boxEighteen.addEventListener('click', function () {
		if (selected === true) {
			return false;
		}
		selected = true;
		let choice = groupedData.$600[randomNumber600()];
		question.innerHTML = choice.question;
		currentQuestion = choice.answer;
		value = 600;
		wrongRight.innerHTML = 'Your Answer?';
		disableClicking('eighteen');
	});
	boxNineteen.addEventListener('click', function () {
		if (selected === true) {
			return false;
		}
		selected = true;
		let choice = groupedData.$600[randomNumber600()];
		question.innerHTML = choice.question;
		currentQuestion = choice.answer;
		value = 600;
		wrongRight.innerHTML = 'Your Answer?';
		disableClicking('nineteen');
	});
	boxTwenty.addEventListener('click', function () {
		if (selected === true) {
			return false;
		}
		selected = true;
		let choice = groupedData.$600[randomNumber600()];
		question.innerHTML = choice.question;
		currentQuestion = choice.answer;
		value = 600;
		wrongRight.innerHTML = 'Your Answer?';
		disableClicking('twenty');
	});
	boxTwentyOne.addEventListener('click', function () {
		if (selected === true) {
			return false;
		}
		selected = true;
		let choice = groupedData.$800[randomNumber800()];
		question.innerHTML = choice.question;
		currentQuestion = choice.answer;
		value = 800;
		wrongRight.innerHTML = 'Your Answer?';
		disableClicking('twentyOne');
	});
	boxTwentyTwo.addEventListener('click', function () {
		if (selected === true) {
			return false;
		}
		selected = true;
		let choice = groupedData.$800[randomNumber800()];
		question.innerHTML = choice.question;
		currentQuestion = choice.answer;
		value = 800;
		wrongRight.innerHTML = 'Your Answer?';
		disableClicking('twentyTwo');
	});
	boxTwentyThree.addEventListener('click', function () {
		if (selected === true) {
			return false;
		}
		selected = true;
		let choice = groupedData.$800[randomNumber800()];
		question.innerHTML = choice.question;
		currentQuestion = choice.answer;
		value = 800;
		wrongRight.innerHTML = 'Your Answer?';
		disableClicking('twentyThree');
	});
	boxTwentyFour.addEventListener('click', function () {
		if (selected === true) {
			return false;
		}
		selected = true;
		let choice = groupedData.$800[randomNumber800()];
		question.innerHTML = choice.question;
		currentQuestion = choice.answer;
		value = 800;
		wrongRight.innerHTML = 'Your Answer?';
		disableClicking('twentyFour');
	});
	boxTwentyFive.addEventListener('click', function () {
		if (selected === true) {
			return false;
		}
		selected = true;
		let choice = groupedData.$800[randomNumber800()];
		question.innerHTML = choice.question;
		currentQuestion = choice.answer;
		value = 800;
		wrongRight.innerHTML = 'Your Answer?';
		disableClicking('twentyFive');
	});

	let form = document.querySelector('form');
	let answer = document.querySelector('#answerText');
	let wrongRight = document.querySelector('#wrongRight');
	let value = 0;
	let currentQuestion = 0;

	form.addEventListener('submit', function (event) {
		if (answered === true) {
			event.preventDefault();
			return false;
		}
		event.preventDefault();

		console.log(answer.value);
		console.log(currentQuestion);

		if (answer.value === currentQuestion) {
			total = savedScore + value;
			savedScore = total;
			console.log(savedScore);
			console.log(value);
			console.log(total);
			score.innerText = 'Your Score is!: $' + total;
			localStorage.setItem('savedScore', total);
			wrongRight.innerHTML = 'Correct!';
			selected = false;
		} else {
			wrongRight.innerHTML = 'Incorrect!';
			selected = false;
		}
		answered = true;
	});
}

function reset() {
	let selected = false;
	let clicked = [];
	let answered = false;
	score.innerText = 'Your Score is!: $' + 0;
	localStorage.removeItem('savedScore');
	localStorage.clear();

	total = 0;
	const allBoxes = document.querySelectorAll('.box');
	allBoxes.forEach((box) => {
		box.classList.remove('disable');
	});
}

function disableClicking(activeClass) {
	answered = false;
	clicked.push(activeClass);

	clicked.forEach((clickedBox) => {
		document.querySelector('.' + clickedBox).classList.add('disable');
	});

	// const allBoxes = document.querySelectorAll('.box');
	// allBoxes.forEach((box) => {
	// 	box.classList.remove('disable');
	// });
}
readJeopardyData();
