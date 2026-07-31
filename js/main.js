document.addEventListener("DOMContentLoaded", () => {
    updateCurrentYear();
    initializeSectionAnimations();
    initializeActiveNavigation();
    initializeMobileMenu();
    initializeContactForm();
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

function initializeMobileMenu() {
    const menuButton = document.querySelector(".menu-toggle");
    const navigationMenu = document.querySelector(".nav-links");
    const navigationLinks = document.querySelectorAll(".nav-links a");

    if (!menuButton || !navigationMenu) {
        return;
    }

    menuButton.addEventListener("click", () => {
        const isOpen = navigationMenu.classList.toggle("open");

        menuButton.classList.toggle("active", isOpen);
        menuButton.setAttribute("aria-expanded", String(isOpen));
        menuButton.setAttribute(
            "aria-label",
            isOpen
                ? "Cerrar menú de navegación"
                : "Abrir menú de navegación"
        );
    });

    navigationLinks.forEach((link) => {
        link.addEventListener("click", () => {
            navigationMenu.classList.remove("open");
            menuButton.classList.remove("active");
            menuButton.setAttribute("aria-expanded", "false");
            menuButton.setAttribute(
                "aria-label",
                "Abrir menú de navegación"
            );
        });
    });
}

function initializeContactForm() {
    const form = document.querySelector("#contact-form");

    if (!form) {
        return;
    }

    const submitButton = form.querySelector(".form-submit");

    form.addEventListener("submit", async (event) => {
        event.preventDefault();

        if (!form.checkValidity()) {
            form.reportValidity();
            return;
        }

        const originalButtonText = submitButton?.textContent;

        if (submitButton) {
            submitButton.disabled = true;
            submitButton.textContent = "Enviando...";
        }

        const formData = new FormData(form);
        const encodedData = new URLSearchParams();

        formData.forEach((value, key) => {
            encodedData.append(key, String(value));
        });

        try {
            const response = await fetch("/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                },
                body: encodedData.toString(),
            });

            if (!response.ok) {
                throw new Error(
                    `Netlify respondió con estado ${response.status}`
                );
            }

            window.location.assign("/gracias.html");
        } catch (error) {
            console.error("Error al enviar el formulario:", error);

            alert(
                "No se pudo enviar el mensaje. Intenta nuevamente o utiliza el correo de contacto."
            );

            if (submitButton) {
                submitButton.disabled = false;
                submitButton.textContent =
                    originalButtonText || "Enviar mensaje";
            }
        }
    });
}