// Assignment Code
let generateBtn = document.querySelector("#generate");
let passwordText = document.querySelector("#password");

let numChoices = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
let upperChoices =  ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
let lowerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let specChoices = ["!", "*", ".", "$", "/", "?", "@", "&"]


// Write password to the #password input.

function generatePassword() {
  let possibilities = [];
  let askLength = parseInt(prompt("How long would you like to make your password? (Choose between 8-128 characters."));
  if (askLength < 8 || askLength > 128 || isNaN(askLength)) {
     alert("This is not between 8-128. Please refresh and try again");
    } else {
        let numTrue = confirm("Do you want to include numbers?");
        let upperTrue = confirm("Do you want to uppercase letters?");
        let lowerTrue = confirm("Do you want to lowercase letters?");
        let specTrue = confirm("Do you want to special characters?");

        if (numTrue) possibilities.push(numChoices);
        if (upperTrue) possibilities.push(upperChoices);
        if (lowerTrue) possibilities.push(lowerChoices);
        if (specTrue) possibilities.push(specChoices);

        let password = "";


        while (password.length < askLength) {
          for (let i = 0; i < possibilities.length; i++) {
            if (password.length < askLength) {
              let rando = Math.floor(Math.random() * possibilities[i].length)
              password += possibilities[i][rando]
            }
          }
        }
        console.log(password, `The password length is ${password.length}`);
        passwordText.value = password;
      }
}
// Add event listener to generate button

generateBtn.addEventListener("click", generatePassword)
