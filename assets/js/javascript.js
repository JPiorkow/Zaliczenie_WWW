$(document).ready(function(){

    
    $("[data-toggle=tooltip]").tooltip();
});


var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

function wezZaloguj() {
	var un = document.loginform.usr.value;
	var pw = document.loginform.pword.value;
	//var username = "username"; 
	//var password = "password";
	if ((un == "username") && (pw == "password")) {
		return true;
	}
	else {
		alert ("Login was unsuccessful, please check your username and password");
		return false;
	}
}