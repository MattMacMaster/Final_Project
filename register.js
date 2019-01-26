//gets values and places them into useable javascript variables
var name = document.infoForm.fullName.value;
var password = document.infoForm.password.value;
var email = document.infoForm.email.value;
var phone = document.infoForm.phone.value;
var address = document.infoForm.address.value;
var city = document.infoForm.city.value;
var postal = document.infoForm.postalname.value;
var gender = document.infoForm.gender.value;
//Postal expression
var regEx1 =  /^[A-Z]\d[A-Z] ?\d[A-Z]\d$/;
var button = document.getElementById("submit");


 var myForm = document.getElementById('infoForm');
 //Loads error values into useable javascript variables
var errName = document.getElementById('errorName');
var errPassword = document.getElementById("errorPass");
var errEmail = document.getElementById("erroremail");
var errPhone = document.getElementById("errorphone");
var errAddress = document.getElementById("erroraddress");
var errCity = document.getElementById("errorcity");
var errPostal = document.getElementById("errorpostal");
var errGender = document.getElementById("errorgender");

//Adds listener to button that brings error msgs in unfilled boxes and clears them when filled
button.addEventListener("click",function (event){
   errName.style.display = "none";
    errPassword.style.display = "none";
    errEmail.style.display = "none";
    errPhone.style.display = "none";
    errAddress.style.display = "none";
    errCity.style.display = "none";
    errPostal.style.display = "none";
    errGender.style.display = "none";
    document.getElementById("secretName").style.opacity="0.0";
    document.getElementById("secretPass").style.opacity="0.0";
    document.getElementById("secretEmail").style.opacity="0.0";
    document.getElementById("secretPhone").style.opacity="0.0";
    document.getElementById("secretAdd").style.opacity="0.0";
    document.getElementById("secretCity").style.opacity="0.0";
    document.getElementById("secretPostal").style.opacity="0.0";
    document.getElementById("secretGen").style.opacity="0.0";

    console.log(document.infoForm.postalname.value);
    console.log(regEx1.test(document.infoForm.postalname.value));

//Checks all boxes for empty values
if(!document.infoForm.fullName.value){
    event.preventDefault();
    errName.style.display = "block";
    document.infoForm.fullName.focus();
    document.getElementById("secretName").style.opacity="1.0";
}


if(!document.infoForm.password.value){
    event.preventDefault();
    errPassword.style.display = "block";
    document.infoForm.password.focus();
    document.getElementById("secretPass").style.opacity="1.0";
}

if(!document.infoForm.email.value)
{
    event.preventDefault();
    errEmail.style.display = "block";
    document.infoForm.email.focus();
    document.getElementById("secretEmail").style.opacity="1.0";
}
if(!document.infoForm.phone.value){
    event.preventDefault();
    errPhone.style.display = "block";
    document.getElementById("secretPhone").style.opacity="1.0";
}
if(!document.infoForm.address.value){
    event.preventDefault();
    errAddress.style.display = "block";
    document.getElementById("secretAdd").style.opacity="1.0";

}
if(!document.infoForm.city.value){
    event.preventDefault();
    errCity.style.display = "block";
    document.getElementById("secretCity").style.opacity="1.0";

}
if(!document.infoForm.postalname.value){
    event.preventDefault();
    errPostal.style.display = "block";
    document.getElementById("secretPostal").style.opacity="1.0";

}
if(!document.infoForm.gender.value){
    event.preventDefault();
    errGender.style.display = "block";
    document.getElementById("secretGen").style.opacity="1.0";

}
//checks postal if it matches the expression if not ,shows error msg
if(!(regEx1.test(document.infoForm.postalname.value))){
    event.preventDefault();
    errPostal.style.display = "block";
    
}
//confirmation message,if yes submits and resets if cancelled, maintains current info and prevents default
if(confirm("Are you sure the information is correct"))
{
    if(confirm == true){
document.infoForm.submit()
document.infoForm.reset()
    }

    if(confirm == false){
event.preventDefault();
    }
}

});
