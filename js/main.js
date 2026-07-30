document.addEventListener("DOMContentLoaded", () => {
    updateCurrentYear();
    initializeSectionAnimations();
    initializeActiveNavigation();
});

/**
 * Actualiza automáticamente el año del pie de página.
 */
function updateCurrentYear() {
    const yearElement = document.querySelector("#current-year");

    if (!yearElement) {
        return;
    }

    yearElement.textContent = new Date().getFullYear();
}

/**
 * Muestra progresivamente las secciones y tarjetas
 * cuando entran en el área visible del navegador.
 */
function initializeSectionAnimations() {
    const animatedElements = document.querySelectorAll(
        ".section, .skill-card, .experience-card, .project-card"
    );

    if (!animatedElements.length) {
        return;
    }

    animatedElements.forEach((element) => {
        element.classList.add("reveal-element");
    });

    if (!("IntersectionObserver" in window)) {
        animatedElements.forEach((element) => {
            element.classList.add("visible");
        });

        return;
    }

    const observer = new IntersectionObserver(
        (entries, currentObserver) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) {
                    return;
                }

                entry.target.classList.add("visible");
                currentObserver.unobserve(entry.target);
            });
        },
        {
            threshold: 0.15,
        }
    );

    animatedElements.forEach((element) => {
        observer.observe(element);
    });
}

/**
 * Resalta en el menú la sección que el usuario
 * está viendo actualmente.
 */
function initializeActiveNavigation() {
    const sections = document.querySelectorAll("main section[id]");
    const navigationLinks = document.querySelectorAll(
        ".nav-links a[href^='#']"
    );

    if (!sections.length || !navigationLinks.length) {
        return;
    }

    if (!("IntersectionObserver" in window)) {
        return;
    }

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) {
                    return;
                }

                const activeSectionId = entry.target.id;

                navigationLinks.forEach((link) => {
                    const linkSectionId = link
                        .getAttribute("href")
                        .replace("#", "");

                    link.classList.toggle(
                        "active",
                        linkSectionId === activeSectionId
                    );
                });
            });
        },
        {
            rootMargin: "-30% 0px -55% 0px",
            threshold: 0,
        }
    );

    sections.forEach((section) => {
        observer.observe(section);
    });
}