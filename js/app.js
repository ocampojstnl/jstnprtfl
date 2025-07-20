// Sliding text
const track = document.querySelector('.sliding-text-track');
track.innerHTML += track.innerHTML; 

// Night mode with localStorage
const checkbox = document.querySelector(".light-dark-modes #checkbox");

// On page load, check localStorage and apply dark mode if needed
if (localStorage.getItem("darkMode") === "enabled") {
  document.body.classList.add("dark-mode");
  checkbox.checked = true;
}

checkbox.addEventListener("change", () => {
  if (checkbox.checked) {
    document.body.classList.add("dark-mode");
    localStorage.setItem("darkMode", "enabled");
  } else {
    document.body.classList.remove("dark-mode");
    localStorage.setItem("darkMode", "disabled");
  }
});

// Page scroll header shadow

const headerElementGrab = document.querySelector("#site-header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 10) {
    headerElementGrab.classList.add("shadow-sm");
  } else {
    headerElementGrab.classList.remove("shadow-sm");
  }
});


// Luxy script
luxy.init({
  wrapper: '#luxy',
  targets: '.luxy-el',
  wrapperSpeed: .8
});

// Type writer
const typewriterTarget_h1 = document.querySelector(".page-title");
const txtFx_h1 = typewriterTarget_h1.textContent.trim(); // grab existing content
typewriterTarget_h1.textContent = ""; // clear it before typing

let i_h1 = 0;
const speed_h1 = 90;

function typeEffect_h1() {
  if (i_h1 < txtFx_h1.length) {
    typewriterTarget_h1.textContent += txtFx_h1.charAt(i_h1);
    i_h1++;
    setTimeout(typeEffect_h1, speed_h1);
  }
}

window.addEventListener("DOMContentLoaded", typeEffect_h1);

// Counter section

// Back to top
  document.querySelector('.back-to-top').addEventListener('click', function (e) {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
