// Get elements
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');
const navLinksItems = navLinks.querySelectorAll('li a'); // Select all anchor links in the nav

// Toggle the menu on click
menuToggle.addEventListener('click', (e) => {
  navLinks.classList.toggle('active');
  menuToggle.classList.toggle('active');
  e.stopPropagation(); // Prevents the click event from bubbling up to the document
});

// Close the menu when clicking outside of it
document.addEventListener('click', (e) => {
  if (navLinks.classList.contains('active') && !navLinks.contains(e.target) && !menuToggle.contains(e.target)) {
    navLinks.classList.remove('active');
    menuToggle.classList.remove('active');
  }
});

// Close the menu when clicking on a nav link
navLinksItems.forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
    menuToggle.classList.remove('active');
  });
});


function downloadPDF() {
  const link = document.createElement("a");
  link.href = "assets/documents/varadpawar_FullStackDeveloper.pdf";
  link.download = "varadpawar_FullStackDeveloper.pdf";
  link.click();
}