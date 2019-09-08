// Get the modal
var modal = document.getElementById("iconModal");

// Get the element that opens the modal
//var element = document.getElementById("openModal");
var element0 = document.getElementsByClassName("trash-icon")[0];
var element1 = document.getElementsByClassName("trash-icon")[1];
var element2 = document.getElementsByClassName("trash-icon")[2];
var element3 = document.getElementsByClassName("trash-icon")[3];
var element4 = document.getElementsByClassName("trash-icon")[4];

// Get the <span> element that closes the modal
var btn = document.getElementById("no-btn");

// When the user clicks on the trash element, open the modal
element0.onclick = function() {
  modal.style.display = "block";
}
element1.onclick = function() {
    modal.style.display = "block";
}
element2.onclick = function() {
    modal.style.display = "block";
}
element3.onclick = function() {
    modal.style.display = "block";
}
element4.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on No button, close the modal
btn.onclick = function() {
  modal.style.display = "none";
}

/*
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }

}
*/

