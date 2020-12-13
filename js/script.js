/* =============================================================================
VARIABLES
================================================================================ */
// NAVIGATION
const btnContainer = document.getElementById("navbarNav")
const btns = btnContainer.getElementsByClassName("nav-link")




/* =============================================================================
FUNCTIONS
================================================================================ */

// NAVIGATION FUNCTIONS
// =============================================================================

// Function to give targeted button active status
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    removeActiveNavClass();
    this.className += " active";
  });
}


// Function to remove active class on nav when clicking on screen BUTTONS
function removeActiveNavClass() {
  let current = document.getElementsByClassName("active");
  if (current.length > 0) {
    current[0].className = current[0].className.replace("active", "");
  }
}
