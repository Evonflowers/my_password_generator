// Assignment Code
let generateBtn = document.querySelector("#generate");
let lengthChoices = ["1", "2", "3"];
let typesChoices =  ["lowercase", "uppercase", "numeric", "special characters"]

// Write password to the #password input.

function options(length, charactertype) {
  console.log(Hello)
}

function writePassword() {
  password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = "This is what is returned to user";

}

function generatePassword() {
  let askLength = parseInt(prompt("How long would you like to make your password? (Choose between 8-16 characters."));
  if (askLength < 128 && askLength > 8) {
    console.log("Perfect, you're between 8-120");
  } else if (askLength > 128) {
    console.log("Your number is too high. Make it shorter, it may be easy to forget!");
  } else if (askLength < 8) {
    console.log("Your number is too low. We prefer numbres higher than 8 for security purposes."); 
  } else {
    console.log("Not a real number");
  }
  
  let askTypes = prompt("What types of characters would you like to choose?")
  if (askTypes === "lowercase" || askTypes === "uppercase" || askTypes === "numeric" || askTypes === "special characters") {
    console.log("Good character types")
  } else {
    console.log("Not so good choices");
  }

  let password = "Test";
  console.log('Your Final Password is:', password);
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)