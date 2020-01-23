import * as firebase from 'firebase';
  
const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID
  };

firebase.initializeApp(firebaseConfig);
const database = firebase.database();

export { firebase, database as default };

// database.ref('expenses').on('value', (snapshot) => {
//     const expenses = [];
//     snapshot.forEach((expense) => {
//         expenses.push({
//             id: expense.key,
//             ...expense.val()
//         });
//     });

//     console.log(expenses);
// });

// database.ref('expenses').on('child_removed', (snapshot) => {
//     console.log("Expense removed: ", snapshot.val());
// });

// database.ref('expenses').on('child_changed', (snapshot) => {
//     console.log("Expense changed: ", snapshot.val());
// });

// database.ref('expenses').push({
//     description: "Diesel for car",
//     note: "Full tank",
//     amount: 96.25,
//     createdAt: "21-01-2020"
// });
// database.ref('expenses').push({
//     description: "Food",
//     note: "Coop",
//     amount: 43.8,
//     createdAt: "20-01-2020"
// });
// database.ref('expenses').push({
//     description: "Dry cleaning",
//     note: "10 shirts",
//     amount: 74,
//     createdAt: "20-01-2020"
// });

// database.ref('notes').push({
//     title: "First note",
//     body: "Some info"
// });

// const firebaseNotes = {
//     notes: {
//         some_id: {
//             title: "First note",
//             body: "Some info" 
//         },
//         another_id: {
//             title: "Second note",
//             body: "Another info"
//         }
//     }
// };

// const notes = [{
//     id: '12',
//     title: "First note",
//     body: "Some info"
// }, {
//     id: "13",
//     title: "Second note",
//     body: "Another info"
// }];

// database.ref().on('value', (snapshot) => {
//     const value = snapshot.val();
//     console.log(`${value.name} is a ${value.job.title} at ${value.job.company}`);
// });

// database.ref().once('value')
//   .then((snapshot) => {
//       console.log(snapshot.val());
//   })
//   .catch((e) => {
//       console.log("Error fetching data", e);
// });

// const onValueChange = database.ref().on('value', (snapshot) => {
//     console.log("Data changed: ", snapshot.val());
// });

// database.ref().set({
//     age: 30,
//     name: "Vasya",
//     stressLevel: 6,
//     job: {
//         title: "Software developer",
//         company: "Google"
//     },
//     location: {
//         city: "Utah",
//         country: "USA"
//     },
//     isSingle: false
// });

// database.ref('attributes').set({
//     height: 195,
//     weight: 87
// }).then(() => {
//     console.log("attributes are set");
// }).catch((e) => {
//     console.log(e, "error setting attributes");
// });

// database.ref('isSingle').remove().then(() => {
//     console.log("isSingle successfuly removed");
// }).catch((e) => {
//     console.log("Failed to remove 'isSingle'", e);
// });

// database.ref().update({
//     stressLevel: 9,
//     'job/company': "Amazon",
//     'location/city': "Seattle"
// });