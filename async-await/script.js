/*
Await is basically syntactic sugar for Promises. It makes your asynchronous code look more like synchronous/procedural code.

"Async" keyword for the wrapper function. This lets Javascript know that we are using async/await syntax, And 
is necessary if you want to use await. This means you cant use Await at the global level. 
It always needs a wrapper function. Or we can say await is only used with an async function.

The await keyword is used in an async function to ensure that all promises returned in the async function are synchronized, ie. they wait for each other. Await eliminates the use of callbacks in .then() and .catch(). In using async and await, async is prepended when returning a promise, await is prepended when calling a promise. try and catch are also used to get the rejection value of an async function.
*/



// Example 1
const numbers = [1, 2, 3, 4, 5]

const addNumbers = (num) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      numbers.push(num);

      let condition = false;
      
      if (!condition) {
        resolve()
      } else {
        reject()
      }
    }, 5000)
  })
}

const getNumbers = () => { console.log(numbers) }

const addAndGet = async () => {
  await addNumbers(90)
  getNumbers()
}

// uncomment down bellow to check the method
// addAndGet()



// Example 2
const getData = async () => { 
  const ok = await fetch('https://jsonplaceholder.typicode.com/todos/1')

  console.log(ok)
}

// uncomment down bellow to check the method
// getData()



// Example 3
const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    let condition = true

    if (condition) {
      resolve("I keep my promise")
    } else {
      reject("Sorry, i didn't keep my promise")
    }
    
  }, 3000)
})

const getMyPromise = async () => {
  await myPromise

  console.log(myPromise)
}

// uncomment down bellow to check the method
// getMyPromise()