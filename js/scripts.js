const hb = document.querySelector("#hamburgerBtn");
const pw = document.querySelector("#pageWrapper");

hb.addEventListener("click", () => {
    pw.classList.toggle('moveover');
})

//Put current year in footer
const theYear = new Date();
console.log(theYear.getFullYear());
document.querySelector('#year').textContent = theYear.getFullYear()

//new
import { hotels } from '../data/hotels.js';

const hotelCards = document.querySelector('#cards');

hotels.forEach(hotel => {
    const mySection = document.createElement('section'); // Section for the hotel

    // Create a div to group img, h2, address, and a
    const groupDiv = document.createElement('div');
    groupDiv.classList.add('hotel-card'); // Add a class for styling

    // Create the img element
    const theImage = document.createElement("img");
    theImage.src = `images/${hotel.photo}`;
    theImage.alt = hotel.name;

    // Create the h2 element
    const theName = document.createElement('h2');
    theName.textContent = hotel.city;

    // Create the address element
    const theAddress = document.createElement('address');
//new
// Initialize the address HTML
let addressHTML = '';

// Dynamically add each part of the address if it exists
if (hotel.address[0]) {
    addressHTML += `${hotel.address[0]}<br>`;
}
if (hotel.address[1]) {
    addressHTML += `${hotel.address[1]}<br>`;
}
if (hotel.address[2]) {
    addressHTML += `${hotel.address[2]}<br>`;
}

// Set the innerHTML to the dynamically built address or hide it if empty
if (addressHTML) {
    theAddress.innerHTML = addressHTML;
} else {
    theAddress.style.display = 'none'; // Optional: Hide if no address is available
}
//end new
    // theAddress.innerHTML = `${hotel.address[0]}<br>${hotel.address[1]}<br>${hotel.address[2]}`;

    // Create the phone link
    const thePhone = document.createElement('a');
    thePhone.textContent = hotel.phone;
    thePhone.href = `tel:${hotel.phone}`;

    // Append elements to the div
    groupDiv.appendChild(theImage);
    groupDiv.appendChild(theName);
    groupDiv.appendChild(theAddress);
    groupDiv.appendChild(thePhone);

    // Append the div to the section
    mySection.appendChild(groupDiv);

    // Append the section to the parent container
    hotelCards.appendChild(mySection);
});
//end of new

//old code
// //grab the hotel location data
// import { hotels } from '../data/hotels.js';
// //console.log
// const hotelCards = document.querySelector('#cards')

// hotels.forEach(hotel => {
//         const mySection = document.createElement('section')

//         const theImage = document.createElement("img")
//         theImage.src = `images/${hotel.photo}`
//         theImage.alt = hotel.name

//         const theName = document.createElement('h2')
//         theName.textContent = hotel.city

//         const theAddress = document.createElement('address');
//         theAddress.innerHTML = `${hotel.address[0]}<br>${hotel.address[1]}`;

//         const thePhone = document.createElement('a');
//         thePhone.textContent = hotel.phone
//         thePhone.href = `tel:${hotel.phone}`

//         mySection.appendChild(theImage)
//         mySection.appendChild(theName)
//         mySection.appendChild(theAddress)
//         mySection.appendChild(thePhone)
//         hotelCards.appendChild(mySection)
//     }
// )