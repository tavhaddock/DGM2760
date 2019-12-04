// Tavian Haddock DGM 2760

// Document SetUp DOM
document.querySelector('#header').innerText = "Nonsense Story"

document.querySelector('#slogan').innerText = "String Manipulation"

// Fuction
function tellStory(){

    //spaces and tabs deletion in array
    const res = (/\s+/)

    //array and variables
    var nounArray = document.getElementById("noun").value //getting each value
    var nounlow = nounArray.toLowerCase(); // lowercase values
    var noun = nounlow.split(res); // splitting into array
    console.log(noun)

    var adjectiveArray = document.getElementById("adjective").value //getting each value
    var adjectivelow = adjectiveArray.toLowerCase(); // lowercase values
    var adjective = adjectivelow.split(res); // splitting into array
    console.log(adjective)

    var verbArray = document.getElementById("verb").value //getting each value
    var verblow = verbArray.toLowerCase(); // lowercase values
    var verb = verblow.split(res); // splitting into array
    console.log(verb)

    //setting up story
    const myStory = `You have a magic ${noun[2]}, a ${adjective[1]} and ${adjective[0]} ability for sure. It has lots of abilities such as ${verb[1]}ing and ${verb[2]}ing, You can use it to fight evil on ${noun[0]} and  defeat the ${adjective[2]} enemy by ${verb[0]}ing a ${noun[1]} at them, The End.`

    //sending story back to html
    document.querySelector('#story').innerHTML = myStory
}
