// Get the modal
var modal = document.getElementById("iconModal");

// Get the element that opens the modal
var element = document.getElementById("openModal");

// Get the <span> element that closes the modal
var btn = document.getElementById("no-btn");

// When the user clicks on the trash element, open the modal
element.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on No button, close the modal
btn.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }

}

