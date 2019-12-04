document.querySelector('#titleName').innerText = "Fortune Teller"

document.querySelector('#slogan').innerText = "Switch Statements"

document.querySelector()

function randomNumber(top) {
	var x = Math.random();
	x = x * top;
	x = (Math.floor(x)) + 1;
	return x;
}

function getMonth(mon) {
	var msg;
	switch(mon) {
		case 1:
		msg = 'January';
		break;
		case 2:
		msg = 'February';
		break;
		case 3:
		msg = 'March';
		break;
		case 4:
		msg = 'April';
		break;
		case 5:
		msg = 'May';
		break;
		case 6:
		msg = 'June';
		break;
		case 7:
		msg = 'July';
		break;
		case 8:
		msg = 'August';
		break;
		case 9:
		msg = 'September';
		break;
		case 10:
		msg = 'October';
		break;
		case 11:
		msg = 'November';
		break;
		case 12:
		msg = 'December';
		break;
		default:
		msg = 'Your number is out of range.';
} //end of switch
	return msg;
} //end of function
function getDay(day) {
	var msg2;
	switch(day) {
		case 1:
		msg2 = '1st';
		break;
		case 2:
		msg2 = '2nd';
		break;
		case 3:
		msg2 = '3rd';
		break;
		case 4:
		msg2 = '4th';
		break;
		case 5:
		msg2 = '5th';
		break;
		case 6:
		msg2 = '6th';
		break;
		case 7:
		msg2 = '7th';
		break;
		case 8:
		msg2 = '8th';
		break;
		case 9:
		msg2 = '9th';
		break;
		case 10:
		msg2 = '10th';
		break;
		case 11:
		msg2 = '11th';
		break;
		case 12:
		msg2 = '12th';
		break;
		case 13:
		msg2 = '13th';
		break;
		case 14:
		msg2 = '14th';
		break;
		case 15:
		msg2 = '15th';
		break;
		case 16:
		msg2 = '16th';
		break;
		case 17:
		msg2 = '17th';
		break;
		case 18:
		msg2 = '18th';
		break;
		case 19:
		msg2 = '19th';
		break;
		case 20:
		msg2 = '20th';
		break;
		case 21:
		msg2 = '21st';
		break;
		case 22:
		msg2 = '22nd';
		break;
		case 23:
		msg2 = '23rd';
		break;
		case 24:
		msg2 = '24th';
		break;
		case 25:
		msg2 = '25th';
		break;
		case 26:
		msg2 = '26th';
		break;
		case 27:
		msg2 = '27th';
		break;
		case 28:
		msg2 = '28th';
		break;
		case 29:
		msg2 = '29th';
		break;
		case 30:
		msg2 = '30th';
		break;
		default:
		msg2 = 'Your number is out of range.';
} //end of switch
	return msg2;
} //end of function
function getFortune(frtn) {
	var msg3;
	switch(frtn) {
		case 1:
		msg3 = 'you will have a root canal.';
		break;
		case 2:
		msg3 = 'you will find $1,000.';
		break;
		case 3:
		msg3 = 'a piano will fall on your head.';
		break;
		case 4:
		msg3 = 'you will win a new car.';
		break;
		case 5:
		msg3 = 'a dog will bite you.';
		break;
		default:
		msg3 = 'Your number is out of range.';
} //end of switch
	return msg3;
} //end of function

var monthName = randomNumber(12);
var month = getMonth(monthName);
var dayNumber = randomNumber(30);
var day = getDay(dayNumber);
var fortuneName = randomNumber(5);
var fortune = getFortune(fortuneName);

var feedbackMessage = 'On '+month+' '+day+', '+fortune;
document.getElementById("fortune").innerHTML = feedbackMessage;
