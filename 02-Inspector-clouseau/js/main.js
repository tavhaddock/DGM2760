document.querySelector('header > h1').innerText = "Inspector Clouseau"
document.querySelector('header > h2').innerText = "This IZ Chief Inspector Clouseau speaking on the pheaun!"

function reDisplay() {
    let windowSizes = `Window size is ${window.innerWidth} pixels wide by ${window.innerHeight} pixels tall.`
    let offset = `Window offset is ${window.screenX} from the left edge and ${window.screenY} pixels from the top of the display.`

    let myWindow = document.querySelector('#myWindow').innerText = `${windowSizes} \n  \n  ${offset}`
}

reDisplay()

function getURL() {
    alert("The URL of this page is: " + window.location.href);
}

function myModify() {
    var x = new Date(document.lastModified);
    document.getElementById("demo").innerHTML = x;
  }
