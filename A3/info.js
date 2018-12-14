var pw1;
//main form validation function
function formValidation(){

    var elem = document.getElementById("firstName");
    var elem2 = document.getElementById("LastName");
    var elem3 = document.getElementById("Password");
    var elem4 = document.getElementById("ConPassword");
    var elem5 = document.getElementById("Username");
    var elem6 = document.getElementById("age");

    var fn = validateName(elem);
    var ln = validateName(elem2);
    var pw = validatePassword(elem3);
    var cpw = confirmPassword(elem4);
    var un = validateUsername(elem5);
    var age = validateAge(elem6);

    if(!pw || !fn || !ln || !cpw || !un || !age) {
        return false;
    }
    if(pw && fn && ln && cpw && un && age){
        alert("Success, form submitted.")
        }
}
//validates name
function validateName(elem) {

    var error = document.getElementById("error");
    var inputValue = elem.value.trim();

    if(inputValue.charAt(0) == inputValue.charAt(0).toLowerCase()) {
        error.innerHTML = "Names: Please enter client name with the first letter capitalized, only letters are permitted.";
        elem.focus();
        return false;
    }
    inputValue = inputValue.toUpperCase();

    for (var i = 0; i < inputValue.length; i++) {
        if (inputValue.charAt(i) < "A" || inputValue.charAt(i) > "Z" ) { 
            error.innerHTML = "Names: Please enter client name with all alphabet letters."
            elem.focus();
           return false;
        }
    }
    return true;
}

//validates password
function validatePassword(elem3){
  var inputValue = elem3.value.trim();
  pw1 = inputValue;
  var upper = false;
  var digit = false;
 
    if(inputValue.length < 6) {
        error.innerHTML = "Password: Please enter a 6 character password";
        return false;
    }

    for (var i = 0; i < inputValue.length; i++) {
        
        if (inputValue.charAt(i) == inputValue.charAt(i).toUpperCase()) { 
           upper = true;
        }
        if (inputValue.charAt(i) > -1 || inputValue.charAt(i) < 10) { 
            digit = true;
         }
    }
    if(!upper){
        error.innerHTML = "Password: Please include an uppercase letter.";
        return false;
    }

    if(!digit) {
        error.innerHTML = "Password: Please include a digit.";
        return false;
    }

    inputValue = inputValue.toUpperCase();

    if(inputValue.charAt(0) < "A" || inputValue.charAt(0) > "Z" ){
        error.innerHTML = "Password: Please start your password with a letter.";
        return false;
    }
    else { 
        return true;
    }
}

//confirms password
function confirmPassword(elem4) {
    var inputValue = elem4.value.trim();
    var inputValue2 = pw1;

    if (inputValue != inputValue2){
        error.innerHTML = "Password: Incorrect password validation, passwords don't match.";
        return false;
    }
     return true;
}
//validates username
function validateUsername(elem5){
    var inputValue = elem5.value.trim();

    if(inputValue.length < 6) {
        error.innerHTML = "Username: Please enter a 6 character username";
        return false;
    }
    inputValue = inputValue.toUpperCase();

    if(inputValue.charAt(0) < "A" || inputValue.charAt(0) > "Z" ){
        error.innerHTML = "Username: Please start your username with a letter.";
        return false;
    }
    return true
}
//validates age
function validateAge(elem6) {
    var inputValue = elem6.value;
    var int = parseInt(inputValue);

    if(int < 18 || int > 60) {
        error.innerHTML = "Age: Must be between 18 and 60";
        return false;
    }
return true;
}

