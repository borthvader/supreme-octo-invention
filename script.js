
var generateBtn = document.querySelector("#generate");
// sets password input variables
var lowercaseChar = "abcdefghijklmnopqrstuvwxyz";
var uppercaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numericalChar = "0123456789";
var specialChar = "!@#$%^&*()_+=-[]{};:,.<>/?";

// starts the function to generate the password
function generatePassword() {
  var passwordChar = "";
  // creates password variable as an placeholder array for generated length
  var password = [];
// request user input
  var passwordLenghthUser = prompt("Please enter a number between 8 and 128 for password length");
  passwordLenghthUser = parseInt(passwordLenghthUser);
// alerts if input is outside of given parameters
  if(passwordLenghthUser < 8) {
    alert("Password must have at least 8 characters!");
    return"";
  }
  
  if (passwordLenghthUser > 128){
    alert("Password must not have more than 128 characters!");
    return"";
  }
// creates boolean to confirm lowercase selection
  var lowercaseCharChoice = confirm("Would you like lowercase characters included?");
  if(lowercaseCharChoice) {
    passwordChar += lowercaseChar;
  }
  // creates a boolean to confirm uppercase selection
  var uppercaseCharChoice = confirm("Would you like uppercase letters included?");
  if(uppercaseCharChoice) {
    passwordChar += uppercaseChar;
  }
  // creates a boolean to confirm numerical character selection
  var numericalCharChoice = confirm("Would you like numerical charcters included?");
  if (numericalCharChoice) { 
    passwordChar += numericalChar;
  }
  // creates a boolean to confirm special character selection
  var specialCharChoice = confirm("Would you like special charcters included?");
  if(specialCharChoice) {
    passwordChar += specialChar;
  }
// starts random selection for all variables
  for (var i = 0; i < passwordLenghthUser; i++) {
  var choices = passwordChar[Math.floor(Math.random()*passwordChar.length)];
  password.push(choices);
  }
// joins the password array and converts to string form
  var ps = password.join("");
  UserInput(ps);
  return(ps);
 }
//  puts the password into the textbox using "textContent"
 function UserInput(ps) {
  document.getElementById("password").textContent = ps;
}


generateBtn.addEventListener("click", generatePassword);
