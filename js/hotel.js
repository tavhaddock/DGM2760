// Document SetUp DOM
document.querySelector('#header').innerText = "Hotel Booking"

document.querySelector('#topic').innerText = "Get Away from your Kids "

async function getHotelData() {
    try {
        const response = await fetch('hotel.json')
        return await response.json() // Return the JSON object
    } catch (error) {
        console.error()
    }
}

let hotelData = {}
getHotelData().then(data => hotelData = data)

document.querySelector("#marriott").addEventListener('click', hotelInfo)
document.querySelector("#sharaton").addEventListener('click', hotelInfo)
document.querySelector("#hilton").addEventListener('click', hotelInfo)

function hotelInfo(event) {
    let hotelChoice = hotelData.hotels.find(hotel => {
        return event.target.id === hotel.name.toLowerCase()
    })
    console.log(hotelChoice)

    document.querySelector("#hotelName").textContent = `${hotelChoice.name} Hotel`

    document.querySelector("#address").textContent = `${hotelChoice.address}`

    document.querySelector("#rooms").textContent = `${hotelChoice.rooms}`

    document.querySelector("#gym").textContent = `${hotelChoice.gym}`

    document.querySelector("#type").textContent = `${hotelChoice.roomTypes}`

    let imagePath = `${hotelChoice.picture}`

    document.querySelector("#picture").setAttribute('src', imagePath)

}
