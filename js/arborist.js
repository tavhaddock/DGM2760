// Tavian Haddock DGM 2760

document.querySelector('#header').innerText = "The Arborist"

document.querySelector('#slogan').innerText = "Events and Arrays"

// Create an array with 4 trees listed
var trees = ['Aspen', 'Elm', 'Pine', 'Palm', 'Spruce', 'Oak', 'Birch', 'Palm']
const errorElement = document.querySelector('#error')
const displayResults = document.querySelector('#displayResults')

let x = trees.toString();
let stringtree = `${x.toLowerCase()}`;

var indexToRemove = 1;
var numberToRemove = 1;

// Display the list of trees inside the displayResults div
const listTrees = () => {
    let treeList = ''
    trees.forEach(tree => {
        treeList += `${tree} <br>`
    })
    displayResults.innerHTML = `${treeList} <span> ${trees.length} elements total</span>`
}

listTrees()

//Add a Redwood Tree to end
document.querySelector('#add_pine').onclick = () => {
    trees.push('Pine')
    listTrees()
}

//Add a pear to the start
document.querySelector('#add_elm').onclick = () => {
    trees.unshift('Elm')
    listTrees()
}

//Remove the first tree
document.querySelector('#remove_tree1').onclick = () => {
if (trees.length > 0) {
    trees.shift('')
    listTrees()
}   else {
    errorElement.textContent = 'Sorry, no trees here!'
}
}

//Remove the second tree down
document.querySelector('#remove_tree2').onclick = () => {
if (trees.length > 0) {
    trees.splice(indexToRemove, numberToRemove);
    listTrees()
}   else {
    errorElement.textContent = 'Sorry, no trees here!'
}
}

//Remove the last tree
document.querySelector('#remove_treeLast').onclick = () => {
if (trees.length > 0) {
    trees.pop('')
    listTrees()
}   else {
    errorElement.textContent = 'Sorry, no trees here!'
}
}

//Sort Treelist to A > Z
document.querySelector('#sortTrees').onclick = () => {
    trees.sort()
    listTrees()
}

//Make all trees lower case
document.querySelector('#lowerTrees').onclick = () => {
    document.getElementById("displayResults").innerHTML = stringtree;
}

//Show Name 3 in List
document.querySelector('#showName3').onclick = () => {
if (trees.length > 2){
    var numberthree = trees.slice(2,3)
    listTrees()
    document.getElementById("displayResults").innerHTML = numberthree;
} else {
    errorElement.textContent = 'There is no 3rd tree in your list.'
}
}

//Show Name 4 in List
document.querySelector('#showName6').onclick = () => {
if (trees.length > 5){
    var numbersix = trees.slice(5,6)
    listTrees()
    document.getElementById("displayResults").innerHTML = numbersix;
} else {
    errorElement.textContent = 'There is no 6th tree in your list.'
}
}
