/* ==================== PORTFOLIO JAVASCRIPT ==================== */

// Inicializar cuando el DOM esté cargado
document.addEventListener('DOMContentLoaded', function() {
    
    // Inicializar AOS (Animate On Scroll)
    AOS.init({
        duration: 1000,
        once: true,
        offset: 100
    });

    // Inicializar todas las funciones
    initNavbar();
    initSmoothScrolling();
    initActiveNavLinks();
    initContactForm();
    initTypingAnimation();
    initParallaxEffect();
    addDynamicStyles();
});

/* ==================== NAVEGACIÓN ==================== */
function initNavbar() {
    // Navbar scroll effect
    window.addEventListener('scroll', function() {
        const navbar = document.getElementById('navbar');
        if (navbar) {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        }
    });
}

/* ==================== SMOOTH SCROLLING ==================== */
function initSmoothScrolling() {
    // Smooth scrolling para links internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

/* ==================== ACTIVE NAV LINKS ==================== */
function initActiveNavLinks() {
    // Active nav link highlighting
    window.addEventListener('scroll', function() {
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav-link');
        
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') && link.getAttribute('href').substring(1) === current) {
                link.classList.add('active');
            }
        });
    });
}

/* ==================== FORMULARIO DE CONTACTO ==================== */
function initContactForm() {
    // Formulario de contacto
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Aquí puedes agregar la lógica para enviar el formulario
            // Por ejemplo, usando EmailJS, Formspree, o tu propio backend
            
            // Validación básica
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;

            if (name && email && subject && message) {
                // Simulación de envío exitoso
                showAlert('¡Mensaje enviado con éxito! Te responderé pronto.', 'success');
                this.reset();
            } else {
                showAlert('Por favor, completa todos los campos.', 'error');
            }
        });
    }
}

/* ==================== ALERTAS PERSONALIZADAS ==================== */
function showAlert(message, type = 'info') {
    // Crear elemento de alerta
    const alert = document.createElement('div');
    alert.className = `alert alert-${type === 'success' ? 'success' : 'danger'} alert-dismissible fade show position-fixed`;
    alert.style.cssText = 'top: 20px; right: 20px; z-index: 9999; min-width: 300px;';
    alert.innerHTML = `
        ${message}
        <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
    `;

    document.body.appendChild(alert);

    // Auto remover después de 5 segundos
    setTimeout(() => {
        if (alert.parentNode) {
            alert.remove();
        }
    }, 5000);
}

/* ==================== ANIMACIÓN DE ESCRITURA ==================== */
function initTypingAnimation() {
    // Typing animation effect
    function typeWriter(element, text, speed = 100) {
        let i = 0;
        element.innerHTML = '';
        
        function type() {
            if (i < text.length) {
                element.innerHTML += text.charAt(i);
                i++;
                setTimeout(type, speed);
            }
        }
        type();
    }

    // Ejecutar typing animation cuando la página carga
    window.addEventListener('load', function() {
        const typingElement = document.querySelector('.typing-animation');
        if (typingElement) {
            const text = typingElement.textContent;
            typeWriter(typingElement, text, 50);
        }
    });
}

/* ==================== EFECTOS PARALLAX ==================== */
function initParallaxEffect() {
    // Parallax effect suave
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.floating');
        
        parallaxElements.forEach(element => {
            const speed = 0.5;
            const yPos = -(scrolled * speed);
            element.style.transform = `translateY(${yPos}px)`;
        });
    });
}

/* ==================== ESTILOS DINÁMICOS ==================== */
function addDynamicStyles() {
    // Agregar estilos dinámicos que no están en el CSS
    const style = document.createElement('style');
    style.textContent = `
        .alert {
            animation: slideInRight 0.3s ease-out;
        }
        
        @keyframes slideInRight {
            from {
                transform: translateX(100%);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
        
        .navbar-nav .nav-link.active {
            color: var(--accent-color) !important;
        }
        
        /* Mejoras de rendimiento */
        .custom-card,
        .btn-custom,
        .tech-icon {
            will-change: transform;
        }
        
        /* Loading spinner para formularios */
        .btn-loading {
            pointer-events: none;
            opacity: 0.7;
        }
        
        .btn-loading::after {
            content: '';
            display: inline-block;
            width: 1rem;
            height: 1rem;
            margin-left: 0.5rem;
            border: 2px solid transparent;
            border-top-color: currentColor;
            border-radius: 50%;
            animation: spin 1s linear infinite;
        }
        
        @keyframes spin {
            to {
                transform: rotate(360deg);
            }
        }
    `;
    document.head.appendChild(style);
}

/* ==================== UTILIDADES ==================== */
// Función para lazy loading de imágenes
function lazyLoadImages() {
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));
}

// Función para manejar errores de carga de recursos
function handleResourceErrors() {
    window.addEventListener('error', function(e) {
        if (e.target.tagName === 'IMG') {
            e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDMwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjMwMCIgaGVpZ2h0PSIzMDAiIGZpbGw9IiNmMGYwZjAiLz48dGV4dCB4PSI1MCUiIHk9IjUwJSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZmlsbD0iIzk5OTk5OSI+SW1hZ2VuIG5vIGRpc3BvbmlibGU8L3RleHQ+PC9zdmc+';
        }
    }, true);
}

// Función para optimización de rendimiento
function optimizePerformance() {
    // Debounce para eventos de scroll
    let ticking = false;
    
    function updateOnScroll() {
        if (!ticking) {
            requestAnimationFrame(function() {
                // Aquí van las funciones que se ejecutan en scroll
                ticking = false;
            });
            ticking = true;
        }
    }
    
    window.addEventListener('scroll', updateOnScroll);
}

/* ==================== INICIALIZACIÓN ADICIONAL ==================== */
// Inicializar funciones adicionales cuando sea necesario
document.addEventListener('DOMContentLoaded', function() {
    lazyLoadImages();
    handleResourceErrors();
    optimizePerformance();
    
    // Mostrar mensaje de bienvenida en consola
    console.log('%c¡Hola! 👋 Gracias por visitar mi portafolio', 'color: #3b82f6; font-size: 16px; font-weight: bold;');
    console.log('%cSi estás interesado en colaborar, ¡no dudes en contactarme!', 'color: #64748b; font-size: 14px;');
});