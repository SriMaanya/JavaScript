const display = document.getElementById("pass");



function generateRandomPassword(length,includeLowerCase,includeUpperCase,includeNumbers,includeSpecialChar){
    const lowercase = "abcdefghijklmnopqrstuvwxyz";
    const uppercase = lowercase.toUpperCase();
    const numbers = "0123456789";
    const specialChar = "!@#$%^&*()-_=+|,.?/:;,><";

    let allowedChars = "";
    let password = "";

    allowedChars += includeLowerCase ? lowercase : "";
    allowedChars += includeUpperCase ? uppercase : "";
    allowedChars += includeNumbers ? numbers : "";
    allowedChars += includeSpecialChar ? specialChar : "";

    if(length <= 0){
        return '(Password length must be atleast 1)';
    }

    if(allowedChars.length === 0){
        return `(Atleast 1 set of character needs to be selected)`;
    }


    for(let i=0;i<length;i++){
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        password +=allowedChars[randomIndex];
    }

    return password;
}

let passwordLength = 12;
let includeLowerCase = true;
let includeUpperCase = true;
let includeNumbers= true;
let includeSpecialChar = true;

let pw = generateRandomPassword( passwordLength,
                        includeLowerCase,
                        includeUpperCase,
                        includeNumbers,
                        includeSpecialChar);

display.textContent = pw;