document.addEventListener('DOMContentLoaded', function() {
  // Formulario de login
  const loginForm = document.getElementById('login-form');
  if (loginForm) {
    loginForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;
      
      // Simulación de autenticación
      if (email && password) {
        // Mostrar mensaje de carga
        const submitButton = this.querySelector('button[type="submit"]');
        const originalText = submitButton.textContent;
        submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Iniciando sesión...';
        submitButton.disabled = true;
        
        // Simular tiempo de carga
        setTimeout(() => {
          // Redireccionar a la página de rendimiento
          window.location.href = 'rendimiento.html';
        }, 1500);
      } else {
        // Mostrar error
        alert('Por favor, completa todos los campos.');
      }
    });
  }
  
  // Formulario de registro
  const signupForm = document.getElementById('signup-form');
  if (signupForm) {
    signupForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const firstName = document.getElementById('first-name').value;
      const lastName = document.getElementById('last-name').value;
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;
      const confirmPassword = document.getElementById('confirm-password').value;
      const terms = document.getElementById('terms').checked;
      
      // Validación básica
      if (!firstName || !lastName || !email || !password || !confirmPassword) {
        alert('Por favor, completa todos los campos obligatorios.');
        return;
      }
      
      if (password !== confirmPassword) {
        alert('Las contraseñas no coinciden.');
        return;
      }
      
      if (!terms) {
        alert('Debes aceptar los términos de servicio y la política de privacidad.');
        return;
      }
      
      // Simulación de registro
      const submitButton = this.querySelector('button[type="submit"]');
      const originalText = submitButton.textContent;
      submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Creando cuenta...';
      submitButton.disabled = true;
      
      // Simular tiempo de carga
      setTimeout(() => {
        // Redireccionar a la página de rendimiento
        window.location.href = 'rendimiento.html';
      }, 1500);
    });
    
    // Medidor de fortaleza de contraseña
    const passwordInput = document.getElementById('password');
    if (passwordInput) {
      passwordInput.addEventListener('input', function() {
        const password = this.value;
        const strengthMeter = document.querySelector('.strength-meter');
        const strengthText = document.querySelector('.strength-text');
        
        // Criterios de fortaleza
        const hasLowerCase = /[a-z]/.test(password);
        const hasUpperCase = /[A-Z]/.test(password);
        const hasNumber = /[0-9]/.test(password);
        const hasSpecialChar = /[^A-Za-z0-9]/.test(password);
        const isLongEnough = password.length >= 8;
        
        // Calcular puntuación
        let score = 0;
        if (hasLowerCase) score++;
        if (hasUpperCase) score++;
        if (hasNumber) score++;
        if (hasSpecialChar) score++;
        if (isLongEnough) score++;
        
        // Actualizar medidor visual
        const segments = strengthMeter.querySelectorAll('.strength-segment');
        segments.forEach((segment, index) => {
          if (index < score) {
            segment.style.backgroundColor = getColorForScore(score);
          } else {
            segment.style.backgroundColor = 'var(--medium-gray)';
          }
        });
        
        // Actualizar texto
        strengthText.textContent = getTextForScore(score);
        strengthText.style.color = getColorForScore(score);
      });
      
      function getColorForScore(score) {
        if (score <= 1) return 'var(--danger)';
        if (score <= 2) return 'var(--warning)';
        if (score <= 3) return 'var(--primary-color)';
        return 'var(--success)';
      }
      
      function getTextForScore(score) {
        if (score <= 1) return 'Débil';
        if (score <= 2) return 'Regular';
        if (score <= 3) return 'Buena';
        if (score <= 4) return 'Fuerte';
        return 'Excelente';
      }
    }
  }
});