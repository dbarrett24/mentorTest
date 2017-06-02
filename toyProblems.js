//JS Basics
//Run npm test in the command line to test your solutions
module.exports = {

  reverseIt: (str) => {
    str = str.split("");
    let reverseStr = [];
    for(let i = str.length - 1; i >= 0; i--) {
      reverseStr.push(str[i]);
    }
    reverseStr = reverseStr.join("");
    return reverseStr;
  },
  //uncomment and finish the reverseIt function. It will take in one parameter which is a String and
  //reverse it


  removeDups: (arr) => {
    let newArray = [];
    for(let i = 0; i < arr.length; i++) {
      if(newArray.indexOf(arr[i]) === -1) {
        newArray.push(arr[i]);
      }
    }
    return newArray;
  },

  //uncomment and finish the removeDups function. It will take in one parameter which is an Array
  //remove all duplicates


  titleIt: (str) => {
    str = str.split(" ");
    for(let i = 0; i < str.length; i++) {
      str[i] = str[i].split("");
      str[i][0] = str[i][0].toUpperCase();
      str[i] = str[i].join("");
    }
    str = str.join(" ");
    return str;
  },

  //uncomment and finish the titleIt function. It will take in one parameter which is a String and
  //capitalize the first letter of each word


  vowelCounter: (str) => {
    str = str.split("");
    let counter = 0;
    for(let i = 0; i < str.length; i++) {
      if(str[i].toLowerCase() === 'a' || str[i].toLowerCase() === 'e' || str[i].toLowerCase() === 'i' || str[i].toLowerCase() === 'o' || str[i].toLowerCase() === 'u') {
        counter++;
      }
    }
    return counter;
  },

  //uncomment and finish the vowelCounter function. It will take in one parameter which is a String and
  //return the number of vowels in the string


  isPrime: (num) => {
    if(num < 0) {
      return false;
    }
    for(let i = 2; i < num; i++) {
      if(num % i === 0) {
        return false;
      }
    }
    return true;
  },

  //uncomment and finish the isPrime function. It will take in one parameter which is a Number and
  //return true if it is prime and false if it is not


  //what is the value of foo?
  //var foo = 10 + '20';
  //uncomment the foo property and give your answer as its value

  foo: '1020',

  //what is the outcome of the two console.logs below?
  //   var foo = "Hello";
  // (function() {
  //   var bar = " World";
  //   console.log(foo + bar);
  // })();
  // console.log(foo + bar);
  // uncomment the log1 and log2 properties and give your answers as their values

  log1: "Hello World",
  log2: undefined
}
