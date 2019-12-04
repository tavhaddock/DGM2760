//DGM 2760 Tavian Haddock

//Document SetUp DOM
document.querySelector('#header').innerText = "Pizza Emporium"

document.querySelector('#slogan').innerText = "Literal Objects"

let message

const pizza = {
    crust: 'thin',
    size: 'small',
    topping: 'pepperoni',
    buildPizza: function () {
        console.log('buildPizza method has been called')
        message = `Preparing the custom ${pizza.size} pizza with a ${pizza.crust} crust and topped with ${pizza.topping} and cheese.`
        document.querySelector('#feedback').textContent = message
    },
    shoppingList: () => {
        let flour = 1
        if (pizza.crust === 'thick' || pizza.size === 'large') flour *= 2

        message = `You will need to purchase ${flour} cup(s) of flour and 1 lb of ${pizza.topping}`
        document.querySelector('#feedback').textContent = message
    }
}

document.querySelector('#thin').addEventListener('click', () => pizza.crust = 'thin')
document.querySelector('#thick').addEventListener('click', () => pizza.crust = 'thick')

document.querySelector('#sausage').addEventListener('click', () => pizza.topping = 'sausage')
document.querySelector('#pepperoni').addEventListener('click', () => pizza.topping = 'pepperoni')
document.querySelector('#hawaiian').addEventListener('click', () => pizza.topping = 'hawaiian')
document.querySelector('#olives').addEventListener('click', () => pizza.topping = 'olives')

document.querySelector('#small').addEventListener('click', () => pizza.size = 'small')
document.querySelector('#medium').addEventListener('click', () => pizza.size = 'medium')
document.querySelector('#large').addEventListener('click', () => pizza.size = 'large')

document.querySelector('#build').addEventListener('click', pizza.buildPizza)

document.querySelector('#shopping').addEventListener('click', pizza.shoppingList)
