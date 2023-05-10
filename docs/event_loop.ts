const axios = require("axios");

const getUserById =
  (userId: number) => axios
    .get('https://jsonplaceholder.typicode.com/users')
    .then(res => console.log('Users:', res.data[userId]))
    .catch(err => console.log('Error: ', err.message))

getUserById(0);

setImmediate(() => console.log("Immediate 1"));

setTimeout(() => console.log("Timeout 1"));

setTimeout(() => console.log("Timeout 2"));

setImmediate(() => Promise.resolve().then(() => getUserById(1)));

// Code to be executed in the next iteration
Promise.resolve().then(() => getUserById(2));

// Code to be executed in the next iteration
Promise.resolve().then(() => setImmediate(() => console.log("Immediate 2")));

console.log("Console");
