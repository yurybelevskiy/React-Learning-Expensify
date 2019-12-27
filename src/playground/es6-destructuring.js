// /* Object destructuring */
// const person = {
//     name: "Yury",
//     age: 25,
//     location: {
//         city: "Zurich",
//         temp: "5"
//     }
// };

// const { name: firstName = "Anonymous", age } = person;
// console.log(`${ firstName } is ${ age }`);

// const { city, temp: temperature } = person.location;
// if(city && temperature) {
//     console.log(`It's ${ temperature } in ${ city }`);
// }

// /* Challenge */
// const book = {
//     title: "Ego is an Enemy",
//     author: "Ryan Holiday",
//     publisher: {
//         name: "Penguin"
//     }
// };

// const { name: publisherName = "Self-Published" } = book.publisher;
// console.log(publisherName);

/* Array destructuring */
const address = ["1299 Juniper St.", "Philadelphia", "Pensilvania", "123456"];

const [, city, state] = address;

console.log(`You are in ${ city }, ${ state }`);

/* Challenge */
const [name, , mediumPrice] = ["Coffee (hot)", "2.00$", "2.50$", "2.75$"];
console.log(`A medium ${ name } costs ${ mediumPrice }`); 