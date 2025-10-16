// ===== Botões de CV =====
document.querySelector(".btn.primary").addEventListener("click", () => {
  alert("Baixando CV de Ícaro Manoel...");
});

document.getElementById("downloadCV").addEventListener("click", () => {
  window.open("curriculo.pdf", "_blank"); // coloque aqui seu PDF
});

// ===== Scroll Spy (destaca link da navbar) =====
const navLinks = document.querySelectorAll(".navbar nav ul li a");
const sections = document.querySelectorAll("section[id]");

function highlightCurrentSection() {
  let scrollY = window.pageYOffset;
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 150;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute("id");

    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${sectionId}`) {
          link.classList.add("active");
        }
      });
    }
  });
}

window.addEventListener("scroll", highlightCurrentSection);

// ===== Animações de entrada =====
const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
  const windowHeight = window.innerHeight;
  reveals.forEach(reveal => {
    const revealTop = reveal.getBoundingClientRect().top;
    if (revealTop < windowHeight - 100) {
      reveal.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);
