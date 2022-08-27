function ValidationEvent() {
var email = document.getElementById("email").value;

if (email.match(emailReg)) {
alert("All type of validation has done on OnSubmit event.");
return true;

} else {
alert("Invalid Email Address...!!!");
return false;


use this at top of html file
<script src="js/onsubmit_event.js"></script>