// Tavian Haddock DGM 2760

document.querySelector('#header').innerText = "Fortune Teller"

document.querySelector('#slogan').innerText = "Switch Statements"

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
  }

  function getMonthName(month) {
    let name
    switch (month) {
        case 1:
            name = "January"
            break;
        case 2:
            name = "February"
            break;
        case 3:
            name = "March"
            break;
        case 4:
            name = "April"
            break;
        case 5:
            name = "May"
            break;
        case 6:
            name = "June"
            break;
        case 7:
            name = "July"
            break;
        case 8:
            name = "August"
            break;
        case 9:
            name = "September"
            break;
        case 10:
            name = "October"
            break;
        case 11:
            name = "November"
            break;
        case 12:
            name = "December"
            break;
        default:
            name = "Not a month"
            break;
    }
    return name
  }

  function getFortune(fate) {
    let message
    switch (fate) {
        case 1:
            message = 'a secret admirer will soon send you a sign of affection.'
        break;
        case 2:
            message = 'your heart is in a place to draw true happiness.'
        break;
        case 3:
            message = 'a thrilling time is in your near future.'
        break;
        case 4:
            message = 'you may receive an important call.'
        break;
        case 5:
            message = 'plan for many riches ahead.'
        break;
        default:
            message = 'something you lost will turn up soon.'
        break;
    }
    return message
  }

let month = getRandomIntInclusive(1, 12)
const monthName = getMonthName(month)

let fate = getRandomIntInclusive(1,5)
const fateMessage = getFortune(fate)

let day = getRandomIntInclusive (1, 30)

const fortuneRevealed = `On ${monthName} ${day},  ${fateMessage}`

document.querySelector('#fortune').innerText = fortuneRevealed
