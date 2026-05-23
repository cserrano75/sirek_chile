/**
 * TRACKING JAVASCRIPT: Interacciones lógicas para SIREK Web
 * Funcionalidades: Menú responsivo, Validación de formulario y Simulación de envío.
 */

document.addEventListener('DOMContentLoaded', () => {

    // 1. MANEJO DEL MENÚ DESPLEGABLE MÓVIL
    const menuToggle = document.getElementById('menuToggle');
    const mainNav = document.getElementById('mainNav');

    if (menuToggle && mainNav) {
        menuToggle.addEventListener('click', () => {
            mainNav.classList.toggle('active');
            // Cambiar icono visual de hamburguesa a cruz según estado
            menuToggle.textContent = mainNav.classList.contains('active') ? '✕' : '☰';
        });

        // Cerrar el menú automáticamente al hacer clic en cualquier enlace interno
        const navLinks = mainNav.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                mainNav.classList.remove('active');
                menuToggle.textContent = '☰';
            });
        });
    }

    // 2. VALIDACIÓN Y ENVÍO DEL FORMULARIO DE CONTACTO
    const contactForm = document.getElementById('contactForm');
    const formResponse = document.getElementById('formResponse');

    if (contactForm && formResponse) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Evitar la recarga nativa de la página

            // Captura de datos para futuros desarrollos de integración con backend / API
            const formData = {
                name: document.getElementById('name').value.trim(),
                email: document.getElementById('email').value.trim(),
                message: document.getElementById('message').value.trim()
            };

            // Simulación de validación y carga
            formResponse.style.display = 'block';
            formResponse.style.backgroundColor = '#d1fae5'; // Fondo verde claro
            formResponse.style.color = '#065f46'; // Texto verde oscuro
            formResponse.textContent = 'Procesando tu solicitud de demo...';

            setTimeout(() => {
                // Mensaje definitivo de éxito tras emular comunicación con el servidor
                formResponse.textContent = `¡Gracias, ${formData.name}! Hemos recibido tu información. Un ejecutivo de Kivnon Consultores te contactará a la brevedad.`;
                contactForm.reset(); // Limpieza de los campos del formulario
            }, 1500);
        });
    }
});