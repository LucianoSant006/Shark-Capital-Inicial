document.addEventListener("DOMContentLoaded", () => {
    
    // ---------------------------------------------
    // 1. Lenis Smooth Scrolling (Rolagem Suave)
    // ---------------------------------------------
    // Verifica se a biblioteca foi carregada
    if (typeof Lenis !== 'undefined') {
        const lenis = new Lenis();
        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);
    }

    // ---------------------------------------------
    // 2. Menu Mobile (Lógica de Abrir/Fechar)
    // ---------------------------------------------
    const menu = document.querySelector(".menu");
    const menuBtn = document.querySelector(".menu-btn");
    const closeBtn = document.querySelector(".close-btn");
    const navLinks = document.querySelectorAll(".menu a");

    // Abrir Menu
    if (menuBtn) {
        menuBtn.addEventListener("click", () => {
            menu.classList.add("active");
        });
    }

    // Fechar Menu (Botão X)
    if (closeBtn) {
        closeBtn.addEventListener("click", () => {
            menu.classList.remove("active");
        });
    }

    // Fechar Menu (Ao clicar em qualquer link de navegação)
    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            menu.classList.remove("active");
        });
    });

    // ---------------------------------------------
    // 3. Navbar Sticky (Efeito ao rolar)
    // ---------------------------------------------
    const navbar = document.querySelector("nav");
    window.addEventListener("scroll", () => {
        // Adiciona a classe .sticky se rolar mais que 0px
        navbar.classList.toggle("sticky", window.scrollY > 0);
    });

    // ---------------------------------------------
    // 4. Animações com ScrollReveal
    // ---------------------------------------------
    if (typeof ScrollReveal !== 'undefined') {
        const sr = ScrollReveal({
            origin: "bottom",
            distance: "60px",
            duration: 1000,
            delay: 200,
            easing: "ease-in-out",
            reset: false // Anima apenas uma vez ao carregar
        });

        // Configuração das revelações
        sr.reveal(".hero-headlines h1");
        sr.reveal(".hero-headlines p", { delay: 400 });
        sr.reveal(".hero-buttons", { delay: 600 });
        sr.reveal(".hero-image", { origin: "right", delay: 800 });

        sr.reveal(".card-shark", { interval: 200 });
        sr.reveal(".stat-item", { interval: 200 });
        sr.reveal(".glass-card", { interval: 200 }); 
        sr.reveal(".software-text", { origin: "left" });
        sr.reveal(".software-mockup", { origin: "right", delay: 400 });
    }

    // ---------------------------------------------
    // 5. GSAP Text Reveal (Efeito Digitação)
    // ---------------------------------------------
    // Verifica se as bibliotecas necessárias existem
    if (typeof SplitType !== 'undefined' && typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
        
        // Registra o plugin do ScrollTrigger
        gsap.registerPlugin(ScrollTrigger);

        const splitTypes = document.querySelectorAll(".reveal-type");
        
        splitTypes.forEach((char) => {
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
    }
});