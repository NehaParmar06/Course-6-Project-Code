document.getElementById("pageTitle").innerHTML = "ScriBBler";
document.getElementById("sub-heading").innerHTML = "Explore, Imagine, Create"

// Get the SignIn modal
var modalA = document.getElementById("signInModal");
var btn = document.getElementById("signInButton");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function() {
    modalA.style.display = "block";
}
span.onclick = function() {
    modalA.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modalA) {
    modalA.style.display = "none";
  }
}
document.getElementById("signInHeading").innerHTML = "Welcome Back!";


// Get the SignUp modal
var modalB = document.getElementById("signUpModal");
var btn = document.getElementById("signUpButton");
var span = document.getElementsByClassName("close")[1];
btn.onclick = function() {
    modalB.style.display = "block";
}
span.onclick = function() {
    modalB.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modalB) {
    modalB.style.display = "none";
  }
}
document.getElementById("signUpHeading").innerHTML = "Get Started";