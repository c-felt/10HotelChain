const hb = document.querySelector("#hamburgerBtn");
const pw = document.querySelector("#pageWrapper");

hb.addEventListener("click", () => {
    pw.classList.toggle('moveover');
})

//grab the hotel location data
import { hotels } from '../data/hotels.js';
//console.log
const hotelCards = document.querySelector('#cards')

hotels.forEach(hotel => {
        const mySection = document.createElement('section')

        const theImage = document.createElement("img")
        theImage.src = `images/${hotel.photo}`
        theImage.alt = hotel.name

        const theName = document.createElement('h2')
        theName.textContent = hotel.city

        const theAddress = document.createElement('address');
        theAddress.innerHTML = `${hotel.address[0]}<br>${hotel.address[1]}`;

        const thePhone = document.createElement('a');
        thePhone.textContent = hotel.phone
        thePhone.href = `tel:${hotel.phone}`

        mySection.appendChild(theImage)
        mySection.appendChild(theName)
        mySection.appendChild(theAddress)
        mySection.appendChild(thePhone)
        hotelCards.appendChild(mySection)
    }
)

//Put current year in footer
const theYear = new Date();
console.log(theYear.getFullYear());
document.querySelector('#year').textContent = theYear.getFullYear()