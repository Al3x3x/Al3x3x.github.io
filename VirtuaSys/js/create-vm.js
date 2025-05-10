document.addEventListener('DOMContentLoaded', function() {
  // Verificar si estamos en la página de crear máquina virtual
  if (!document.getElementById('next-step')) return;
  
  // Variables para el wizard
  let currentStep = 1;
  const totalSteps = 5;
  
  // Botones de navegación
  const prevBtn = document.getElementById('prev-step');
  const nextBtn = document.getElementById('next-step');
  const createBtn = document.getElementById('create-vm');
  
  // Función para cambiar de paso
  function goToStep(step) {
    // Ocultar panel actual
    document.querySelector(`.wizard-panel[data-panel="${currentStep}"]`).classList.remove('active');
    // Desactivar paso actual
    document.querySelector(`.wizard-step[data-step="${currentStep}"]`).classList.remove('active');
    
    // Actualizar paso actual
    currentStep = step;
    
    // Mostrar nuevo panel
    document.querySelector(`.wizard-panel[data-panel="${currentStep}"]`).classList.add('active');
    // Activar nuevo paso
    document.querySelector(`.wizard-step[data-step="${currentStep}"]`).classList.add('active');
    
    // Actualizar estado de los botones
    prevBtn.disabled = currentStep === 1;
    
    if (currentStep === totalSteps) {
      nextBtn.style.display = 'none';
      createBtn.style.display = 'block';
      updateSummary();
    } else {
      nextBtn.style.display = 'block';
      createBtn.style.display = 'none';
    }
  }
  
  // Evento para botón siguiente
  nextBtn.addEventListener('click', function() {
    if (currentStep < totalSteps) {
      goToStep(currentStep + 1);
    }
  });
  
  // Evento para botón anterior
  prevBtn.addEventListener('click', function() {
    if (currentStep > 1) {
      goToStep(currentStep - 1);
    }
  });
  
  // Evento para botón crear
  createBtn.addEventListener('click', function() {
    // Mostrar animación de carga
    this.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Creando...';
    this.disabled = true;
    
    // Simular tiempo de creación
    setTimeout(() => {
      // Redireccionar a la página de rendimiento
      window.location.href = 'rendimiento.html';
    }, 2000);
  });
  
  // Pasos del wizard clickeables
  const wizardSteps = document.querySelectorAll('.wizard-step');
  wizardSteps.forEach(step => {
    step.addEventListener('click', function() {
      const stepNumber = parseInt(this.dataset.step);
      if (stepNumber < currentStep) {
        goToStep(stepNumber);
      }
    });
  });
  
  // Categorías de sistemas operativos
  const osCategories = document.querySelectorAll('.os-category');
  osCategories.forEach(category => {
    category.addEventListener('click', function() {
      // Remover clase activa de todas las categorías
      osCategories.forEach(cat => cat.classList.remove('active'));
      // Agregar clase activa a la categoría seleccionada
      this.classList.add('active');
      
      // Actualizar grid de sistemas operativos
      const categoryName = this.dataset.category;
      updateOSGrid(categoryName);
    });
  });
  
  // Función para actualizar grid de sistemas operativos
  function updateOSGrid(category) {
    const osGrid = document.querySelector('.os-grid');
    const sistemas = window.datosVirtuaSys.sistemasOperativos[category];
    
    // Limpiar grid
    osGrid.innerHTML = '';
    
    // Agregar sistemas operativos
    sistemas.forEach(sistema => {
      const osCard = document.createElement('div');
      osCard.className = 'os-card';
      osCard.dataset.os = sistema.id;
      
      osCard.innerHTML = `
        <div class="os-icon">
          <img src="${sistema.imagen}" alt="${sistema.nombre}">
        </div>
        <div class="os-info">
          <h3>${sistema.nombre}</h3>
          <p>${sistema.version}</p>
        </div>
        <div class="os-select">
          <input type="radio" name="os" id="${sistema.id}" value="${sistema.id}">
          <label for="${sistema.id}"></label>
        </div>
      `;
      
      osGrid.appendChild(osCard);
      
      // Evento para seleccionar sistema operativo
      osCard.addEventListener('click', function() {
        document.getElementById(sistema.id).checked = true;
        
        // Actualizar resumen
        document.getElementById('summary-os-icon').src = sistema.imagen;
        document.getElementById('summary-os-name').textContent = sistema.nombre;
        document.getElementById('summary-os-version').textContent = sistema.version;
      });
    });
    
    // Seleccionar el primer sistema por defecto
    if (sistemas.length > 0) {
      const firstSystem = sistemas[0];
      document.getElementById(firstSystem.id).checked = true;
      
      // Actualizar resumen
      document.getElementById('summary-os-icon').src = firstSystem.imagen;
      document.getElementById('summary-os-name').textContent = firstSystem.nombre;
      document.getElementById('summary-os-version').textContent = firstSystem.version;
    }
  }
  
  // Inicializar grid de sistemas operativos
  updateOSGrid('linux');
  
  // Sliders de recursos
  const cpuSlider = document.getElementById('cpu-slider');
  const ramSlider = document.getElementById('ram-slider');
  const storageSlider = document.getElementById('storage-slider');
  const bandwidthSlider = document.getElementById('bandwidth-slider');
  
  // Actualizar valores de CPU
  cpuSlider.addEventListener('input', function() {
    const cpuValue = this.value;
    document.querySelector('.resource-slider:nth-child(1) .resource-value').textContent = `${cpuValue} vCPUs`;
    document.getElementById('summary-cpu').textContent = `${cpuValue} vCPUs`;
    updateCost();
  });
  
  // Actualizar valores de RAM
  ramSlider.addEventListener('input', function() {
    const ramValue = this.value;
    document.querySelector('.resource-slider:nth-child(2) .resource-value').textContent = `${ramValue} GB`;
    document.getElementById('summary-ram').textContent = `${ramValue} GB`;
    updateCost();
  });
  
  // Actualizar valores de almacenamiento
  storageSlider.addEventListener('input', function() {
    const storageValue = this.value;
    document.querySelector('.resource-slider:nth-child(3) .resource-value').textContent = `${storageValue} GB`;
    
    // Obtener tipo de almacenamiento
    const storageType = document.querySelector('input[name="storage-type"]:checked').value.toUpperCase();
    document.getElementById('summary-storage').textContent = `${storageValue} GB ${storageType}`;
    updateCost();
  });
  
  // Actualizar valores de ancho de banda
  bandwidthSlider.addEventListener('input', function() {
    const bandwidthValue = this.value;
    document.querySelector('.bandwidth-slider .resource-value').textContent = `${bandwidthValue} Gbps`;
  });
  
  // Tipo de almacenamiento
  const storageTypeInputs = document.querySelectorAll('input[name="storage-type"]');
  storageTypeInputs.forEach(input => {
    input.addEventListener('change', function() {
      const storageValue = document.getElementById('storage-slider').value;
      const storageType = this.value.toUpperCase();
      document.getElementById('summary-storage').textContent = `${storageValue} GB ${storageType}`;
    });
  });
  
  // Tipo de red
  const networkTypeInputs = document.querySelectorAll('input[name="network-type"]');
  networkTypeInputs.forEach(input => {
    input.addEventListener('change', function() {
      const networkType = this.value === 'public' ? 'IP Pública' : 'Solo Red Privada';
    });
  });
  
  // Función para actualizar el costo total
  function updateCost() {
    const cpuValue = document.getElementById('cpu-slider').value;
    const ramValue = document.getElementById('ram-slider').value;
    const storageValue = document.getElementById('storage-slider').value;
    const storageType = document.querySelector('input[name="storage-type"]:checked').value;
    
    // Definir precios base
    const cpuPrice = 5;
    const ramPrice = 2;
    const storagePrice = storageType === 'ssd' ? 1 : 0.5;
    
    // Calcular costo total
    const totalCost = (cpuValue * cpuPrice) + (ramValue * ramPrice) + (storageValue * storagePrice);
    
    // Mostrar costo total
    document.getElementById('total-cost').textContent = `${totalCost.toFixed(2)}/mes`;
    document.getElementById('summary-cost').textContent = `${totalCost.toFixed(2)}/mes`;
  }
  
  // Actualizar costo inicial
  updateCost();
  
  // Función para actualizar el resumen
  function updateSummary() {
    const vmName = document.getElementById('vm-name').value;
    document.getElementById('summary-vm-name').textContent = vmName;
  }
});