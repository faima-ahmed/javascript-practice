const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],

  book(flightNum, name) {
    console.log(`${name} booked a seat on ${this.airline} flight
            ${this.iataCode}${flightNum}`);

    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

// lufthansa.book(239, 'Faima Ahmed');
// lufthansa.book(635, 'Khalid Hossain');

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const book = lufthansa.book;

//call method
book.call(eurowings, 23, 'Faria Ahmed');
console.log(eurowings);

book.call(lufthansa, 239, 'Jesmin Ara');
console.log(lufthansa);

const swiss = {
  airline: 'Swiss',
  iataCode: 'LX',
  bookings: [],
};

book.call(swiss, 583, 'Farid Ahmed');

//apply mehtod
const flightData = [583, 'George Cooper'];
book.apply(swiss, flightData);
console.log(swiss);
