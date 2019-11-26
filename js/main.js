document.querySelector('#company').innerText = "Guess My Number"

document.querySelector('#slogan').innerText = "Loops Project"

document.querySelector('#instructions').innerText = "In this game, try to guess a number between 1 and 15 in as few tries as possible. \n You will then be awarded a ribbon for your effort. \n If you want to play again, just simply refresh the page."

// Pick a random number between 0 and 16

let correctNumber = Math.floor(Math.random() * 15)

let guessed = false
let totalGuesses = 0
let gamerGuess = 0
correctNumber += 1

console.log(`The correct number is ${correctNumber}`)

function evalGuess(){
    totalGuesses += 1 // totalGuesses = totalGuesses +1
    gamerGuess = document.querySelector('#guess').value
    console.log(totalGuesses, gamerGuess)
    const feedback = document.querySelector('#feedback')

    if (gamerGuess == correctNumber) {
        console.log(`gamerGuess is equal to correctNumber`)
        feedback.innerText = 'You Win!'
        giveAward()
        document.getElementById("myBtn").disabled = true;
    } else if (gamerGuess > correctNumber && gamerGuess < 16) {
        feedback.innerText = 'Too high! Try again.'
    } else if (gamerGuess < correctNumber && gamerGuess > 0) {
        feedback.innerText = 'Too low! Try again.'
    } else {
        feedback.innerText = 'Woops! Please choose a number between 1 and 15.'
        totalGuesses -= 1
    }

    document.querySelector('#attempts').innerText = totalGuesses

}

function giveAward() {
    console.log('Congratulations!')
    let imagePath = '#'
    switch(totalGuesses) {
        case 1:
        case 2:
        case 3:
            imagePath = 'images/ribbon1.png'
        break
        case 4:
        case 5:
        case 6:
            imagePath = 'images/ribbon2.png '
        break
        default:
            imagePath = 'images/ribbon3.png'
        break
    }

    const awardImage = document.createElement('img') // Creates a <img> element
    awardImage.setAttribute('src', imagePath)

    const ribbon = document.querySelector('#ribbon')

    ribbon.appendChild(awardImage)
}
