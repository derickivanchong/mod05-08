let daysList = ['First Day','Second Day','Third Day','Fourth Day','Fifth Day','Sixth Day','Seventh Day','Eight Day','Ninth Day','Tenth Day','Eleventh Day','Twelth Day'];

let giftsList = ['A Partridge in a Pear Tree.','Two Turtle Doves','Three French Hens','Four Calling Birds','Five Golden Rings','Six Geese a Laying','Seven Swans a Swimming','Eight Maids a Milking','Nine Ladies Dancing','Ten Lords a Leaping','Eleven Pipers Piping','12 Drummers Drumming'];

let currentDay = 0;
console.log(currentDay)

// console.log(daysList[0]);
// console.log(giftsList[0]);

document.querySelector('#day'+currentDay).textContent = daysList[0];
document.querySelector('#gift'+currentDay).textContent = giftsList[0];

function showNextDay() {
	currentDay = currentDay + 1;
	// console.log(currentDay);
	document.querySelector('#stanza'+currentDay).style.display = 'block';
	// console.log('#stanza'+currentDay);
	document.querySelector('#day'+currentDay).textContent = daysList[currentDay];

	let gifts = '';
	for (let i = currentDay; i >= 0; i--) {
		if (i === 1)
			gifts = gifts + giftsList[i] + ', and ';
		else
			gifts = gifts + giftsList[i] + ', ';
	}
	document.querySelector('#gift'+currentDay).textContent = gifts;

	if (currentDay === 11) document.querySelector('#nextButton').disabled = true
}