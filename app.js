// Password Generator


//DOM
const copy = document.querySelector(".copy");
const btn = document.querySelector(".btn");
const resultEl = document.querySelector(".result");
//Length of paaword
const lengthLimit = 12;
//Passwords characters
const numbers = '0123456789';
const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowercase = 'abcdefghijklmnopqrstuvwxyz';
const symbols = '!@#$%^&*()_+-=[]{}|;:,.<>?';


//Function
function generatePassword() {
    //first we create a variable for our password
    let Password = "";
    //now we need to combine all characters
    const allChars = numbers + uppercase + lowercase + symbols;
    //we use a while loop here to generate a random password until it reaches the desired length
    while(Password.length < lengthLimit) {
        //here i used math.floor and math.random to pick a random character and add it to the password
        Password += allChars[Math.floor(Math.random() * allChars.length)];
    }
    //finally we display the password
    resultEl.textContent = Password;
}
//Event
btn.addEventListener("click", generatePassword);

//copy password
function copyPassword() {
    const copyText = resultEl.textContent;
    navigator.clipboard.writeText(copyText);
    alert("Password copied to clipboard");
}
//event
copy.addEventListener("click", copyPassword);
