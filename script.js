// Hover Effect on Sections
document.querySelectorAll("section").forEach((section) => {
    section.addEventListener("mouseenter", () => {
        section.style.boxShadow = "0 10px 20px rgba(255, 0, 255, 0.5)";
    });
    section.addEventListener("mouseleave", () => {
        section.style.boxShadow = "none";
    });
});

// GSAP Animation for Sections
gsap.from("section", {
    opacity: 0,
    y: 50,
    duration: 0.8,
    stagger: 0.2,
});

// GSAP Animation for Header
gsap.from("header", {
    opacity: 0,
    y: -50,
    duration: 1,
    ease: "bounce",
});

// GSAP Animation for Footer
gsap.from("footer", {
    opacity: 0,
    y: 50,
    duration: 1,
    ease: "power2.out",
});
