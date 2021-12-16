// In JavaScript, functions are objects. So we can pass objects to functions as parameters.

/*
We can also pass functions as parameters to other functions and call them inside the outer functions. 
So callback is a function that is passed to another function. When the first function is done, 
it will run the second function.
*/


//Example 1: 

const numbers = [1, 2, 3, 4]

const addNumbers = (num, callback) => {
  setTimeout(() => {
    numbers.push(num)
    if (callback) {
      callback()
    }
  })
}

getNumbers = () => {
  console.log(numbers)
}

// uncomment down bellow to check the method
// addNumbers(6, getNumbers)



//Example 2
const getData = (id, callback) => {
  fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
    .then(response => response.json())
    .then(json => console.log(json))
  
  if (callback) {
    callback()
  }
}

// uncomment down bellow to check the method
// getData(3, getData(2, getData(7)))



//Example 3
const calc = (a, b, callback) => {
  if (callback) {
    callback(a, b)
  } else {
    console.log(a + b)
  }
}

const multiply = (a, b) => {
  console.log(a * b)
}

// uncomment down bellow to check the method
// calc(2, 6, multiply)