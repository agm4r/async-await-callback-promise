/*
A promise in JavaScript is similar to a promise in real life. When we make a promise in real
life, it is a guarantee that we are going to do something in the future. Because promises
can only be made for the future.

A promise has two possible outcomes: it will either be kept when the time comes, or it won’t.

This is also the same for promises in JavaScript. When we define a promise in JavaScript,
it will be resolved when the time comes, or it will get rejected. It sounds like the IF
condition. But there are huge differences between them.

A promise is used to handle the asynchronous result of an operation. 
JavaScript is designed to not wait for an asynchronous
block of code to completely execute before other synchronous parts of the code can run.
With Promises, we can defer the execution of a code block until an async request is completed.
This way, other operations can keep running without interruption.

States of Promises:
First of all, a Promise is an object. There are 3 states of the Promise object:
- Pending: Initial State, before the Promise succeeds or fails.
- Resolved: Completed Promise
- Rejected: Failed Promise, throw an error
*/



//Example 1

const myPromise = new Promise((resolve, reject) => {
  let condition = true

  if (condition) {
    setTimeout(() => {
      resolve("I keep my promise")
    }, 6000)
  } else {
    reject("Sorry, I didn't keep my promise")
  }
})

// uncomment down bellow to check the method
// console.log(myPromise.then(res => console.log(res)).catch(reject => console.log(reject)))



// Example 2  

// uncomment down bellow to check the method
// fetch('https://jsonplaceholder.typicode.com/todos/1')
//   .then(response => response.json())
//   .then(json => console.log(json))



// Example 3
const numbers = [1, 2, 3, 4, 5, 6, 7, 8] 

const addNumbers = (num) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      numbers.push(num);
      const error = false

      if (!error) {
        resolve()
      } else {
        reject()
      }
    }, 3000)
  })
} 

const getNumbers = () => { console.log(numbers) }

// in this case i'm using callback function with passing getNumbers method as resolved promise
// uncomment down bellow to check the method
// addNumbers(100).then(getNumbers).catch(error => error)