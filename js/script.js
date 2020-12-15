/* =============================================================================
VARIABLES
================================================================================ */
// NAVIGATION
const btnContainer = document.getElementById("navbarNav")
const btns = btnContainer.getElementsByClassName("nav-link")

// BOTTOM SCROLL TO TOP BUTTON
const backToTopButton = document.getElementById("back-to-top-button")

/* =============================================================================
EVENT LISTENERS
================================================================================ */

// Event listener for scroll to top button
backToTopButton.addEventListener("click", scrollTop)

/* =============================================================================
FUNCTIONS
================================================================================ */

const activityButtonLeft = document.getElementById("activity-button-left")
const activityButtonRight = document.getElementById("activity-button-right")

const firstActivityRowImages = document.getElementsByClassName("first-activity-row-images")

activityButtonLeft.addEventListener("click", fadeOutImages)
activityButtonRight.addEventListener("click", fadeOutImages)




function fadeOutImages() {
  for(let i=0; i<firstActivityRowImages.length; i++) {
    firstActivityRowImages[i].classList.add("fade-out")
    setTimeout(function(){
    firstActivityRowImages[i].classList.add("hide")
  }, 400)
  }
}

function fadeInImages() {
    for(let i=0; i<firstActivityRowImages.length; i++) {
      firstActivityRowImages[i].classList.remove("fade-out")
      firstActivityRowImages[i].classList.add("fade-in")
      setTimeout(function(){
        firstActivityRowImages[i].classList.remove("hide")
      }, 300)
    }
}







// Function to hide all images

// when right click button is pressed if firstactivityrowimages.classList.includes("active") then run the hide all images function and load secondRowImages
// if second rowImages.classList.includes("active") run hide all images and then run load thirdRowimages etc


// NAVIGATION FUNCTIONS

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

// BOTTOM BUTTON SCROLL TO TOP FUNCTION

function scrollTop() {
  window.scrollTo({top: 0, behavior: 'smooth'});
}
