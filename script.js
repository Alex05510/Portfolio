let header = document.getElementById("scrolled");
let banniere = document.querySelector(".baniere");
let hauteurBanniere = banniere.offsetHeight;

window.addEventListener("scroll", function() {
  let scrollY = window.scrollY;

  if (scrollY >= hauteurBanniere) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});
function toggleAccordion(sectionId) {
  const sections = document.querySelectorAll('.accordion-body');
  sections.forEach(section => {
      if (section.id === sectionId) {
          section.style.display = section.style.display === 'block' ? 'none' : 'block';
      } else {
          section.style.display = 'none';
      }
  });
}

