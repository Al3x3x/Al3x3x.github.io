document.addEventListener('DOMContentLoaded', function() {
  // Menú móvil
  const menuToggle = document.querySelector('.menu-toggle');
  const navMenu = document.querySelector('.nav-menu');

  if (menuToggle) {
    menuToggle.addEventListener('click', function() {
      navMenu.classList.toggle('active');
    });
  }

  // Cerrar menú al hacer clic en un enlace
  const navLinks = document.querySelectorAll('.nav-menu a');
  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      navMenu.classList.remove('active');
    });
  });

  // Mostrar/ocultar contraseña
  const togglePasswordButtons = document.querySelectorAll('.toggle-password');
  togglePasswordButtons.forEach(button => {
    button.addEventListener('click', function() {
      const input = this.previousElementSibling;
      const type = input.getAttribute('type') === 'password' ? 'text' : 'password';
      input.setAttribute('type', type);
      this.querySelector('i').classList.toggle('fa-eye');
      this.querySelector('i').classList.toggle('fa-eye-slash');
    });
  });

  // Acordeón para preguntas frecuentes
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    question.addEventListener('click', function() {
      item.classList.toggle('active');
    });
  });

  // Animación al hacer scroll
  const animateOnScroll = function() {
    const elements = document.querySelectorAll('.feature-card, .plan-card, .testimonial-card, .value-card, .team-member, .tech-item, .type-card');
    
    elements.forEach(element => {
      const elementPosition = element.getBoundingClientRect().top;
      const screenPosition = window.innerHeight / 1.2;
      
      if (elementPosition < screenPosition) {
        element.style.opacity = '1';
        element.style.transform = 'translateY(0)';
      }
    });
  };

  // Aplicar estilos iniciales para animación
  const elementsToAnimate = document.querySelectorAll('.feature-card, .plan-card, .testimonial-card, .value-card, .team-member, .tech-item, .type-card');
  elementsToAnimate.forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  });

  // Ejecutar animación al cargar la página y al hacer scroll
  window.addEventListener('load', animateOnScroll);
  window.addEventListener('scroll', animateOnScroll);

  // Simulación de carga de datos
  setTimeout(() => {
    const loadingElements = document.querySelectorAll('.loading');
    loadingElements.forEach(element => {
      element.classList.remove('loading');
    });
  }, 1000);
});