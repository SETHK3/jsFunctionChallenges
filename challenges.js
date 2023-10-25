//CHALLENGE 1

// const wordsArray = ["a", "b", "cc"];

// function longestWord(words) {
//   let longest = words[0];
//   for (let word of words) {
//     if (word > longest) {
//       longest = word;
//     }
//   }
//   return longest;
// }

// console.log(longestWord(wordsArray));

//CHALLENGE 2

// function switchFirstLast(myString) {
//   if (myString.length > 1) {
//     return (myString =
//       myString[myString.length - 1] +
//       myString.substring(1, myString.length - 1) +
//       myString[0]);
//   }
// }
// let myString = "seth gartz";

// console.log(switchFirstLast(myString));

//CHALLENGE 3

// const myNumbers = [1, 2, 3];

// function sumNumbers(numbers) {
//   let sum = 0;
//   myNumbers.forEach((number) => {
//     sum += number;
//   });
//   return sum;
// }

// console.log(sumNumbers(myNumbers));

//CHALLENGE 4

// const arrayOne = [1, 2, 3];
// const arrayTwo = [4, 5, 6];

// function alternateArrays(arrayOne, arrayTwo) {
//   const result = [];
//   const maxLength = Math.max(arrayOne.length, arrayTwo.length);

//   for (let i = 0; i < maxLength; i++) {
//     if (i < arrayOne.length) {
//       result.push(arrayOne[i]);
//     }
//     if (i < arrayTwo.length) {
//       result.push(arrayTwo[i]);
//     }
//   }
//   return result;
// }

// console.log(alternateArrays(arrayOne, arrayTwo));
//CHALLENGE 5

// function titleCase(input) {
//   const words = input.split(" ");
//   const titleWords = words.map((word) => {
//     return word.charAt(0).toUpperCase() + word.slice(1);
//   });
//   const sentence = titleWords.join(" ");
//   return sentence;
// }

// console.log(titleCase("I am a sentence"));

//CHALLENGE 6

// function longestWord(input) {
//   const words = input.split(" ");
//   let longest = "";

//   for (const word of words) {
//     if (word.length > longest.length) {
//       longest = word;
//     }
//   }
//   return longest;
// }

// console.log(longestWord("This string has several different values"));

//CHALLENGE 7

// const input = "Hi there";

// function sortLetters(input) {
//   const letters = input.toLowerCase();
//   const sortedString = letters.split("").sort().join("");

//   return sortedString;
// }

// console.log(sortLetters(input));

//CHALLENGE 8

// function removeByIndex(array, items) {
//   const result = [];

//   for (const item of items) {
//     if (item >= 0 && item < array.length) {
//       result.push(array[item]);
//     }
//   }
//   return result;
// }

// const myArray = ["a", "b", "c", "d"];
// const itemsToRemove = [1, 3];

// const extractedValues = removeByIndex(myArray, itemsToRemove);
// console.log(extractedValues);

//CHALLENGE 9

// const user = {
//   userName: "seth3",
//   activeStatus: "away",
// };

// function login() {
//   user.activeStatus = "active";
//   return `${user.userName} is ${user.activeStatus}`;
// }

// console.log(login(user));

//CHALLENGE 10

// function pow(base, exponent) {
//   if (exponent === 0) {
//     return 1;
//   } else {
//     let result = 1;
//     for (let i = 0; i < exponent; i++) {
//       result *= base;
//     }
//     return result;
//   }
// }

// console.log(pow(4, 2));
