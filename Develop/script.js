// Assignment Code
let generateBtn = document.querySelector("#generate");
let lengthChoices = ["1", "2", "3"];
let typesChoices =  ["lowercase", "uppercase", "numeric", "special characters"]

// Write password to the #password input

function options(length, charactertype) {
  console.log(Hello)
}

function writePassword() {
  password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = "Le'ts give you a random password here";

}

function generatePassword() {
  let askLength = prompt("How long would you like to make your password? (Choose between 8-16 characters.");
  let typesCount = "Testing";
  let generatePassword = 'Hello';
  console.log('typesCount:', typesCount);
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);