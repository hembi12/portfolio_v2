// Función para mostrar u ocultar los proyectos adicionales
function toggleAdditionalProjects() {
    const additionalProjects = document.getElementById('additional-projects');
    const showMoreBtn = document.getElementById('show-more-btn-extended');

    if (additionalProjects.classList.contains('hidden')) {
        additionalProjects.classList.remove('hidden');
        showMoreBtn.textContent = 'Show Less Projects';
    } else {
        additionalProjects.classList.add('hidden');
        showMoreBtn.textContent = 'Show More Projects';
    }
}

// Añadir Event Listener al botón
document.getElementById('show-more-btn-extended').addEventListener('click', toggleAdditionalProjects);

// Función para alternar el menú móvil
function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobile-menu');
    const menuIcon = document.getElementById('menu-icon');

    // Alternar la clase 'hidden' para mostrar u ocultar el menú
    mobileMenu.classList.toggle('hidden');

    // Opcional: Cambiar el ícono del menú (de hamburguesa a X)
    if (mobileMenu.classList.contains('hidden')) {
        menuIcon.setAttribute('d', 'M4 6h16M4 12h16m-7 6h7'); // Icono de hamburguesa
    } else {
        menuIcon.setAttribute('d', 'M6 18L18 6M6 6l12 12'); // Icono de X
    }
}

// Añadir Event Listener al botón de menú móvil
document.getElementById('mobile-menu-button').addEventListener('click', toggleMobileMenu);

// Función para actualizar el enlace activo en el navbar
function setActiveNavLink() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    let currentSection = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 80; // Ajusta el offset según la altura del navbar
        if (pageYOffset >= sectionTop) {
            currentSection = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active'); // Remueve la clase 'active' de todos los enlaces
        if (link.getAttribute('href') === `#${currentSection}`) {
            link.classList.add('active'); // Agrega la clase 'active' al enlace correspondiente
        }
    });
}

// Evento que se dispara al hacer scroll
window.addEventListener('scroll', setActiveNavLink);

// Ejecuta la función al cargar la página para establecer el enlace activo inicialmente
window.addEventListener('load', setActiveNavLink);