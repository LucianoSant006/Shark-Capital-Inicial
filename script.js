// Lenis Smooth Scrolling (Rolagem suave robusta)
const lenis = new Lenis();
function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
};
requestAnimationFrame(raf);

// Menu Mobile
const menu = document.querySelector(".menu");
const menuBtn = document.querySelector(".menu-btn");
const closeBtn = document.querySelector(".close-btn");

if (menuBtn) {
    menuBtn.addEventListener("click", () => {
        menu.classList.add("active");
        // Adiciona estilo para mostrar o menu (CSS deve ter a classe .active)
        menu.style.right = "0"; 
    });
}

if (closeBtn) {
    closeBtn.addEventListener("click", () => {
        menu.classList.remove("active");
        menu.style.right = "-100%";
    });
}

// Navbar Sticky
const navbar = document.querySelector("nav");
window.addEventListener("scroll", () => {
    navbar.classList.toggle("sticky", window.scrollY > 0);
});

// Animações com ScrollReveal
const sr = ScrollReveal({
    origin: "bottom",
    distance: "60px",
    duration: 1000,
    delay: 200,
    easing: "ease-in-out",
});

sr.reveal(".hero-headlines h1");
sr.reveal(".hero-headlines p", { delay: 400 });
sr.reveal(".hero-buttons", { delay: 600 });
sr.reveal(".hero-image", { origin: "right", delay: 800 });

sr.reveal(".card-shark", { interval: 200 });
sr.reveal(".stat-item", { interval: 200 });
sr.reveal(".event-card", { interval: 100, origin: "left" });
sr.reveal(".software-text", { origin: "left" });
sr.reveal(".software-mockup", { origin: "right", delay: 400 });

// GSAP Text Reveal (Efeito de Digitação/Reveal no Título)
const splitTypes = document.querySelectorAll(".reveal-type");
splitTypes.forEach((char, i) => {
    const text = new SplitType(char, { type: "chars" }); 

    gsap.fromTo(
        text.chars,
        { opacity: 0, y: 20 },
        {
            opacity: 1,
            y: 0,
            duration: 0.1,
            stagger: 0.05,
            scrollTrigger: {
                trigger: char,
                start: "top 80%",
                end: "top 20%",
                toggleActions: "play none none reverse",
            },
        }
    );
});