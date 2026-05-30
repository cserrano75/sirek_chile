/**
 * TRACKING JAVASCRIPT: Interacciones lógicas para SIREK Web (Consolidado)
 * Funcionalidades resueltas de forma segura:
 * 1. Menú responsivo móvil (Hamburguesa)
 * 2. Soporte opcional para validaciones de formulario
 * 3. Interruptor de Modo Claro / Oscuro con persistencia en memoria local
 */

document.addEventListener('DOMContentLoaded', () => {

    // ==========================================
    // 1. MANEJO DEL MENÚ DESPLEGABLE MÓVIL
    // ==========================================
    const menuToggle = document.getElementById('menuToggle');
    const mainNav = document.getElementById('mainNav');

    if (menuToggle && mainNav) {
        menuToggle.addEventListener('click', () => {
            mainNav.classList.toggle('active');
            // Alterna el icono de menú de tres líneas y la cruz de cierre
            menuToggle.textContent = mainNav.classList.contains('active') ? '✕' : '☰';
        });

        // Cierra el menú de forma automática al hacer clic en un enlace de sección
        const navLinks = mainNav.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                mainNav.classList.remove('active');
                menuToggle.textContent = '☰';
            });
        });
    }

    // ==========================================
    // 2. INTERRUPTOR DE MODO CLARO / OSCURO (CON MEMORIA SEGURO)
    // ==========================================
    const themeToggleBtn = document.getElementById('theme-toggle');
    
    // Verificamos de forma segura que el elemento exista antes de interactuar con él
    if (themeToggleBtn) {
        const modeIcon = themeToggleBtn.querySelector('.mode-icon');

        // A. Consultar si el navegador ya recuerda una elección previa del usuario
        const currentTheme = localStorage.getItem('theme');
        if (currentTheme) {
            document.documentElement.setAttribute('data-theme', currentTheme);
            if (currentTheme === 'dark' && modeIcon) {
                modeIcon.textContent = '☀️'; // Muestra el sol en modo oscuro
            }
        }

        // B. Listener de clic para cambiar dinámicamente el tema visual
        themeToggleBtn.addEventListener('click', () => {
            let theme = 'light';
            
            // Si la página no está en modo oscuro, la cambiamos a oscuro
            if (document.documentElement.getAttribute('data-theme') !== 'dark') {
                document.documentElement.setAttribute('data-theme', 'dark');
                if (modeIcon) modeIcon.textContent = '☀️';
                theme = 'dark';
            } else {
                // Si ya está en modo oscuro, regresamos al modo claro original
                document.documentElement.removeAttribute('data-theme');
                if (modeIcon) modeIcon.textContent = '🌙';
            }
            
            // C. Guardamos la preferencia actual en el navegador del usuario
            localStorage.setItem('theme', theme);
        });
    } else {
        // Log preventivo en la consola del navegador por si hay un error de ID en el HTML
        console.warn("Advertencia de Tracking: No se encontró el botón con ID 'theme-toggle' en el archivo HTML.");
    }

    // ==========================================
    // 3. FORMULARIO DE CONTACTO (OPCIONAL)
    // ==========================================
    const contactForm = document.getElementById('contactForm');
    const formResponse = document.getElementById('formResponse');

    if (contactForm && formResponse) {
        contactForm.addEventListener('submit', () => {
            // Nota de tracking: Si estás utilizando el procesador "enviar.php" de tu hosting,
            // no bloqueamos el evento con preventDefault() para que el correo se envíe nativamente.
            formResponse.style.display = 'block';
            formResponse.style.backgroundColor = '#d1fae5';
            formResponse.style.color = '#065f46';
            formResponse.textContent = 'Enviando tu solicitud de contacto...';
        });
    }
});