document.addEventListener('DOMContentLoaded', function() {
  // Verificar si estamos en la página de rendimiento
  if (!document.getElementById('cpuChart')) return;
  
  // Obtener datos de rendimiento
  const datos = window.datosVirtuaSys.datosRendimiento;
  
  // Configuración común para todos los gráficos
  const commonOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false
      },
      tooltip: {
        mode: 'index',
        intersect: false
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: 'rgba(200, 200, 200, 0.1)'
        }
      },
      x: {
        grid: {
          display: false
        }
      }
    },
    elements: {
      line: {
        tension: 0.4
      },
      point: {
        radius: 0,
        hitRadius: 10,
        hoverRadius: 5
      }
    }
  };
  
  // Gráfico de CPU
  const cpuCtx = document.getElementById('cpuChart').getContext('2d');
  const cpuChart = new Chart(cpuCtx, {
    type: 'line',
    data: {
      labels: datos.cpu.etiquetas,
      datasets: [
        {
          label: 'Actual',
          data: datos.cpu.actual,
          backgroundColor: 'rgba(138, 43, 226, 0.2)',
          borderColor: '#8a2be2',
          fill: true
        },
        {
          label: 'Promedio',
          data: datos.cpu.promedio,
          backgroundColor: 'rgba(224, 176, 255, 0.2)',
          borderColor: '#e0b0ff',
          fill: true
        }
      ]
    },
    options: {
      ...commonOptions,
      scales: {
        ...commonOptions.scales,
        y: {
          ...commonOptions.scales.y,
          max: 100,
          title: {
            display: true,
            text: 'Uso de CPU (%)'
          }
        }
      }
    }
  });
  
  // Gráfico de Memoria
  const memoryCtx = document.getElementById('memoryChart').getContext('2d');
  const memoryChart = new Chart(memoryCtx, {
    type: 'line',
    data: {
      labels: datos.memoria.etiquetas,
      datasets: [
        {
          label: 'Actual',
          data: datos.memoria.actual,
          backgroundColor: 'rgba(255, 105, 180, 0.2)',
          borderColor: '#ff69b4',
          fill: true
        },
        {
          label: 'Promedio',
          data: datos.memoria.promedio,
          backgroundColor: 'rgba(255, 182, 193, 0.2)',
          borderColor: '#ffb6c1',
          fill: true
        }
      ]
    },
    options: {
      ...commonOptions,
      scales: {
        ...commonOptions.scales,
        y: {
          ...commonOptions.scales.y,
          max: 100,
          title: {
            display: true,
            text: 'Uso de Memoria (%)'
          }
        }
      }
    }
  });
  
  // Gráfico de Red
  const networkCtx = document.getElementById('networkChart').getContext('2d');
  const networkChart = new Chart(networkCtx, {
    type: 'line',
    data: {
      labels: datos.red.etiquetas,
      datasets: [
        {
          label: 'Entrada',
          data: datos.red.entrada,
          backgroundColor: 'rgba(75, 0, 130, 0.2)',
          borderColor: '#4b0082',
          fill: true
        },
        {
          label: 'Salida',
          data: datos.red.salida,
          backgroundColor: 'rgba(147, 112, 219, 0.2)',
          borderColor: '#9370db',
          fill: true
        }
      ]
    },
    options: {
      ...commonOptions,
      scales: {
        ...commonOptions.scales,
        y: {
          ...commonOptions.scales.y,
          title: {
            display: true,
            text: 'Tráfico (MB/s)'
          }
        }
      }
    }
  });
  
  // Gráfico de Disco
  const diskCtx = document.getElementById('diskChart').getContext('2d');
  const diskChart = new Chart(diskCtx, {
    type: 'line',
    data: {
      labels: datos.disco.etiquetas,
      datasets: [
        {
          label: 'Lectura',
          data: datos.disco.lectura,
          backgroundColor: 'rgba(218, 112, 214, 0.2)',
          borderColor: '#da70d6',
          fill: true
        },
        {
          label: 'Escritura',
          data: datos.disco.escritura,
          backgroundColor: 'rgba(238, 130, 238, 0.2)',
          borderColor: '#ee82ee',
          fill: true
        }
      ]
    },
    options: {
      ...commonOptions,
      scales: {
        ...commonOptions.scales,
        y: {
          ...commonOptions.scales.y,
          title: {
            display: true,
            text: 'Operaciones (MB/s)'
          }
        }
      }
    }
  });
  
  // Selector de tiempo
  const timeButtons = document.querySelectorAll('.time-btn');
  timeButtons.forEach(button => {
    button.addEventListener('click', function() {
      // Remover clase activa de todos los botones
      timeButtons.forEach(btn => btn.classList.remove('active'));
      // Agregar clase activa al botón seleccionado
      this.classList.add('active');
      
      // Actualizar datos según el período seleccionado
      const time = this.dataset.time;
      updateChartsData(time);
    });
  });
  
  // Función para actualizar datos de los gráficos
  function updateChartsData(time) {
    // En un caso real, aquí se harían peticiones al servidor
    // Para el prototipo, simulamos cambios en los datos
    
    let multiplier = 1;
    if (time === 'week') multiplier = 0.8;
    if (time === 'month') multiplier = 0.6;
    
    // Actualizar datos de CPU
    cpuChart.data.datasets[0].data = datos.cpu.actual.map(value => Math.min(100, value * multiplier * (1 + Math.random() * 0.5)));
    cpuChart.data.datasets[1].data = datos.cpu.promedio.map(value => Math.min(100, value * multiplier * (1 + Math.random() * 0.3)));
    cpuChart.update();
    
    // Actualizar datos de Memoria
    memoryChart.data.datasets[0].data = datos.memoria.actual.map(value => Math.min(100, value * multiplier * (1 + Math.random() * 0.5)));
    memoryChart.data.datasets[1].data = datos.memoria.promedio.map(value => Math.min(100, value * multiplier * (1 + Math.random() * 0.3)));
    memoryChart.update();
    
    // Actualizar datos de Red
    networkChart.data.datasets[0].data = datos.red.entrada.map(value => value * multiplier * (1 + Math.random() * 0.5));
    networkChart.data.datasets[1].data = datos.red.salida.map(value => value * multiplier * (1 + Math.random() * 0.5));
    networkChart.update();
    
    // Actualizar datos de Disco
    diskChart.data.datasets[0].data = datos.disco.lectura.map(value => value * multiplier * (1 + Math.random() * 0.5));
    diskChart.data.datasets[1].data = datos.disco.escritura.map(value => value * multiplier * (1 + Math.random() * 0.5));
    diskChart.update();
  }
  
  // Botón de actualizar
  const refreshBtn = document.querySelector('.refresh-btn');
  if (refreshBtn) {
    refreshBtn.addEventListener('click', function() {
      const activeTimeBtn = document.querySelector('.time-btn.active');
      const time = activeTimeBtn ? activeTimeBtn.dataset.time : 'day';
      
      // Mostrar animación de carga
      this.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Actualizando';
      this.disabled = true;
      
      // Simular tiempo de carga
      setTimeout(() => {
        updateChartsData(time);
        this.innerHTML = '<i class="fas fa-sync-alt"></i> Actualizar';
        this.disabled = false;
      }, 1000);
    });
  }
});