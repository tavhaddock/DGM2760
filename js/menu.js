function duplicateMenu() {
    //getting anchor elements from top menu
    let topList = document.querySelectorAll('ul#primaryNav li a')

    //creates new list items for bottom of page
    let newList = document.createElement('ul')

    topList.forEach(menuItem => {
        let newLI = document.createElement('li')
        let newLink = document.createElement('a')

        //makes new tag for new list
        newLink.setAttribute('href', menuItem.getAttribute('href'))
        newLink.textContent = menuItem.textContent

        //appends children for the DOM
        document.querySelector('#smallNavSpace').appendChild(newList)
        newList.appendChild(newLI)
        newLI.appendChild(newLink)
    })
}
duplicateMenu()
