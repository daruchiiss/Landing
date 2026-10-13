document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contactForm");

    if (contactForm) {
        contactForm.addEventListener("submit", function (e) {
            e.preventDefault();

            const nombre = document.getElementById("nombre").value;
            const correo = document.getElementById("correo").value;

            alert(`¡Gracias por contactarnos, ${nombre}! Nos comunicaremos pronto al correo ${correo}.`);

            contactForm.reset();
        });
    }
});

