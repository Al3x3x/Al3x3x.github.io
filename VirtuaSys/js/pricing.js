document.addEventListener('DOMContentLoaded', function() {
  // Verificar si estamos en la página de planes
  if (!document.querySelector('.pricing-toggle')) return;
  
  // Toggle de facturación mensual/anual
  const billingToggle = document.getElementById('billing-toggle');
  if (billingToggle) {
    billingToggle.addEventListener('change', function() {
      const monthlyPrices = document.querySelectorAll('.price:not(.annual-price)');
      const annualPrices = document.querySelectorAll('.annual-price');
      
      if (this.checked) {
        // Mostrar precios anuales
        monthlyPrices.forEach(price => price.style.display = 'none');
        annualPrices.forEach(price => price.style.display = 'block');
      } else {
        // Mostrar precios mensuales
        monthlyPrices.forEach(price => price.style.display = 'block');
        annualPrices.forEach(price => price.style.display = 'none');
      }
    });
  }
  
  // Categorías de planes
  const pricingCategories = document.querySelectorAll('.pricing-category');
  pricingCategories.forEach(category => {
    category.addEventListener('click', function() {
      // Remover clase activa de todas las categorías
      pricingCategories.forEach(cat => cat.classList.remove('active'));
      // Agregar clase activa a la categoría seleccionada
      this.classList.add('active');
      
      // Actualizar planes mostrados
      const categoryName = this.dataset.category;
      updatePlans(categoryName);
    });
  });
  
  // Función para actualizar planes mostrados
  function updatePlans(category) {
    // En un caso real, aquí se filtrarían los planes según la categoría
    // Para el prototipo, simulamos un cambio visual
    
    const planCards = document.querySelectorAll('.plan-card');
    
    // Animación de transición
    planCards.forEach(card => {
      card.style.opacity = '0';
      card.style.transform = 'translateY(20px)';
    });
    
    // Simular tiempo de carga
    setTimeout(() => {
      // Actualizar precios según la categoría
      if (category === 'vps') {
        updatePlanPrices([29, 59, 119, 229], [23, 47, 95, 183]);
      } else if (category === 'rdp') {
        updatePlanPrices([39, 79, 159, 299], [31, 63, 127, 239]);
      } else if (category === 'enterprise') {
        updatePlanPrices([99, 199, 399, 799], [79, 159, 319, 639]);
      }
      
      // Mostrar planes con animación
      planCards.forEach(card => {
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
      });
    }, 300);
  }
  
  // Función para actualizar precios de los planes
  function updatePlanPrices(monthlyPrices, annualPrices) {
    const planCards = document.querySelectorAll('.plan-card');
    
    planCards.forEach((card, index) => {
      if (index < monthlyPrices.length) {
        const monthlyPrice = card.querySelector('.price:not(.annual-price)');
        const annualPrice = card.querySelector('.annual-price');
        
        monthlyPrice.innerHTML = `$${monthlyPrices[index]}<span>/mes</span>`;
        annualPrice.innerHTML = `$${annualPrices[index]}<span>/mes</span>`;
      }
    });
  }
  
  // Calculadora de plan personalizado
  const resourceControls = document.querySelectorAll('.resource-control');
  resourceControls.forEach(control => {
    const input = control.querySelector('input');
    const minusBtn = control.querySelector('.minus');
    const plusBtn = control.querySelector('.plus');
    
    // Botón de disminuir
    minusBtn.addEventListener('click', function() {
      const min = parseInt(input.min);
      const value = parseInt(input.value);
      
      if (value > min) {
        input.value = value - 1;
        input.dispatchEvent(new Event('change'));
      }
    });
    
    // Botón de aumentar
    plusBtn.addEventListener('click', function() {
      const max = parseInt(input.max);
      const value = parseInt(input.value);
      
      if (value < max) {
        input.value = value + 1;
        input.dispatchEvent(new Event('change'));
      }
    });
    
    // Evento de cambio
    input.addEventListener('change', updateCalculatorCost);
  });
  
  // Opciones adicionales
  const optionCheckboxes = document.querySelectorAll('.calculator-options input[type="checkbox"]');
  optionCheckboxes.forEach(checkbox => {
    checkbox.addEventListener('change', updateCalculatorCost);
  });
  
  // Función para actualizar costo de la calculadora
  function updateCalculatorCost() {
    // Obtener valores de recursos
    const cpuValue = parseInt(document.getElementById('custom-cpu').value);
    const ramValue = parseInt(document.getElementById('custom-ram').value);
    const storageValue = parseInt(document.getElementById('custom-storage').value);
    
    // Calcular costo base
    const cpuCost = cpuValue * 5;
    const ramCost = ramValue * 3;
    const storageCost = storageValue * 0.2;
    
    const baseCost = cpuCost + ramCost + storageCost;
    
    // Calcular costo de opciones adicionales
    let optionsCost = 0;
    
    if (document.getElementById('option-backup').checked) optionsCost += 10;
    if (document.getElementById('option-monitoring').checked) optionsCost += 15;
    if (document.getElementById('option-loadbalancer').checked) optionsCost += 25;
    if (document.getElementById('option-ddos').checked) optionsCost += 20;
    
    // Actualizar costos en la interfaz
    document.getElementById('base-cost').textContent = `$${baseCost.toFixed(2)}`;
    document.getElementById('options-cost').textContent = `$${optionsCost.toFixed(2)}`;
    document.getElementById('total-cost').textContent = `$${(baseCost + optionsCost).toFixed(2)}`;
  }
  
  // Inicializar costo de la calculadora
  updateCalculatorCost();
});