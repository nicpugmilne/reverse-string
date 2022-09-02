function reverseString(str) {
  let arrOfCharacters = str.split("");
  const reversedArr = [];
  arrOfCharacters.forEach((char) => {
    reversedArr.unshift(char);
  });
  let reversedString = reversedArr.join("");
  return reversedString;
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'ih'");
  console.log("=>", reverseString("hi"));

  console.log("");

  console.log("Expecting: 'ybabtac'");
  console.log("=>", reverseString("catbaby"));
}

module.exports = reverseString;

// Please add your pseudocode to this file\

//1. Split argument (string type) into characters and assign to new array variable
// 2. Iterate through the (string type) and push each character to new array
// 3. Concatenate array into a String
// 4. Return string

// And a written explanation of your solution
// As the argument passed into the reverseString function is a string, we first need to split each character off into an array. That way we can iterate through each character in order to reverse the string. We proceed in order, inserting each character as the first element of the new array. Finally we take that array of strings and join them back into a single string, so that we can return the new reversed word.
