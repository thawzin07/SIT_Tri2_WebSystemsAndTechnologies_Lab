document.addEventListener("DOMContentLoaded", function () {
  console.log("DOM loaded");
  registerEventListeners();
});

function registerEventListeners() {
  const arrayOfImages = document.getElementsByClassName("img-thumbnail");
  console.log("Found " + arrayOfImages.length + " images");

  for (let i = 0; i < arrayOfImages.length; i++) {
    arrayOfImages[i].addEventListener("click", displayPopUp);
    console.log("Event listener added to image " + i);
  }
}

function displayPopUp(event) {
  event.preventDefault();
  event.stopPropagation();
  
  console.log("Popup clicked");
  const clickedImage = event.target;

  // Create overlay
  const overlay = document.createElement("div");
  overlay.className = "popup-overlay";

  // Create popup container
  const span = document.createElement("span");
  span.className = "img-popup";

  // Create image element for the popup
  const popupImg = document.createElement("img");
  popupImg.src = clickedImage.src;
  popupImg.alt = clickedImage.alt;
  popupImg.style.width = "100%";
  popupImg.style.height = "auto";

  // Add image to popup
  span.appendChild(popupImg);

  // Add overlay and popup to body
  document.body.appendChild(overlay);
  document.body.appendChild(span);

  // Close popup when clicking overlay or popup
  overlay.addEventListener("click", closePopup);
  span.addEventListener("click", closePopup);

  function closePopup() {
    overlay.remove();
    span.remove();
  }
}