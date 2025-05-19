document.addEventListener("DOMContentLoaded", function () {
  // Navegación
const navLinks = document.querySelectorAll(".nav-link");
const sections = document.querySelectorAll(".section");

navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
    e.preventDefault();

      // Actualizar navegación activa
    document.querySelectorAll(".nav-link").forEach((navLink) => {
    navLink.classList.remove("active");
});
    this.classList.add("active");
      // Seleccionar todos los enlaces del mismo tipo y marcarlos como activos
    const targetSection = this.getAttribute("data-section");
    document
        .querySelectorAll(`.nav-link[data-section="${targetSection}"]`)
        .forEach((navLink) => {
        navLink.classList.add("active");
        });

      // Mostrar sección correspondiente
    document.querySelectorAll(".section").forEach((section) => {
    section.classList.add("hidden");
    });
    document.getElementById(targetSection).classList.remove("hidden");

      // Animación para la nueva sección
    setTimeout(() => {
        document.getElementById(targetSection).style.animation = "none";
        setTimeout(() => {
        document.getElementById(targetSection).style.animation =
            "fadeIn 0.5s ease-out";
        }, 10);
    }, 0);
    });
});

  // Manejo del formulario
const contactForm = document.querySelector(".contact-form");
contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    // Obtener datos del formulario
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const message = document.getElementById("message").value;
    // Formatear el mensaje para WhatsApp
    const whatsappMessage = 
        `*Nuevo mensaje de contacto*%0A%0A` +
        `*Nombre:* ${name}%0A` +
        `*Email:* ${email}%0A` +
        `*Teléfono:* ${phone}%0A` +
        `*Mensaje:* ${message}`;

    // Mi numero de WhatsApp
    const whatsappNumber = "5939855365554";
    
    // Enlace de whatsapp
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;  
    
    // Abrir WhatsApp en una nueva pestaña
    window.open(whatsappUrl, "_blank");

        // Opcional: Mostrar feedback al usuario
    const submitBtn = this.querySelector(".submit-btn");
    const originalText = submitBtn.innerHTML;
    
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<i class="fas fa-check"></i> Redirigiendo...';

      // Reset del formulario
    this.reset();

    setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
        submitBtn.style.backgroundColor = "";
    }, 3000);
});

    // Animación de desplazamiento suave
    document.querySelectorAll('.skill-card').forEach((card, index) => {
    card.style.animation = `skillAppear 0.5s ease-out ${index * 0.1}s both`;
});

});
  
