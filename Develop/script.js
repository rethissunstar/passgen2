// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
var smallcase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v","w","x", "y","z"];
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V","W","X", "Y","Z"];
var numerocase = ["1","2","3","4","5","6","7","8","9","0"];
var specialchar = ["@",".","`","~","!","$","#"];
var firstswitch = document.querySelector(".caps");
var secondswitch = document.querySelector(".chars");
var upperbutton = false;
var charbutton = false;
var choosechar = 0;
var eligibleChar = smallcase;
//firstswitch.addEventListener("click", uppercase = true);
//that is not how this slider works.

    if (upperbutton == true){
      eligibleChar = [eligibleChar + uppercase];
    }
    if(charbutton == true){
      eligibleChar = [eligibleChar + specialchar];
    }



// Write password to the #password input
//looks like generatePassword doesn't exist anywhere.  
//This will be a function that generates the text that will be the
//the password.
function generatePassword(){
  // return ("you are dumb");
  // okay that returned it.  Now we have to create a pass
  //with silly random characters.
  //create an array with the eligible characters - online did it with a string that doesn't make sense to me

  
  
  //create a var with the count of the amount of variables in the array
  var libcount = eligibleChar.length;
  //create your count variable for iteration
  var count = 0;
  var passlength = 0;
  //create your string that you will be appending using the +
 console.log(libcount);
  //create your charchoose variable that will hold the character to be appended

  //math function that spits out a number between 8 and 128
  passlength = (Math.ceil(Math.random()*120))+8; 
  //test math function works.
  var passwordstring = "";
  for (count = 0; count < passlength; count++){
    choosechar = (Math.floor(Math.random()*libcount));
    console.log(choosechar);
    passwordstring  = passwordstring + eligibleChar[choosechar];
    console.log(passlength);
    console.log(passwordstring);
  }
  return(passwordstring);
}


function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
