// Datos precargados para el prototipo

// Planes de servicio
const planesServicio = [
  {
    id: 1,
    nombre: "Básico",
    precio: 29,
    precioAnual: 23,
    cpu: 2,
    ram: 4,
    almacenamiento: 80,
    transferencia: 1,
    ips: 1,
    firewall: "Básico",
    soporte: "24/7",
    backups: false,
    monitoreo: false,
    balanceo: false,
    popular: false
  },
  {
    id: 2,
    nombre: "Profesional",
    precio: 59,
    precioAnual: 47,
    cpu: 4,
    ram: 8,
    almacenamiento: 160,
    transferencia: 3,
    ips: 1,
    firewall: "Avanzado",
    soporte: "24/7 Prioritario",
    backups: true,
    monitoreo: true,
    balanceo: false,
    popular: true
  },
  {
    id: 3,
    nombre: "Empresarial",
    precio: 119,
    precioAnual: 95,
    cpu: 8,
    ram: 16,
    almacenamiento: 320,
    transferencia: 5,
    ips: 2,
    firewall: "Avanzado",
    soporte: "24/7 Dedicado",
    backups: true,
    monitoreo: true,
    balanceo: true,
    popular: false
  },
  {
    id: 4,
    nombre: "Premium",
    precio: 229,
    precioAnual: 183,
    cpu: 16,
    ram: 32,
    almacenamiento: 640,
    transferencia: 10,
    ips: 4,
    firewall: "Personalizado",
    soporte: "24/7 VIP",
    backups: true,
    monitoreo: true,
    balanceo: true,
    popular: false
  }
];

// Sistemas operativos disponibles
const sistemasOperativos = {
  linux: [
    { id: "ubuntu", nombre: "Ubuntu", version: "22.04 LTS", imagen: "img/ubuntu.png" },
    { id: "debian", nombre: "Debian", version: "11 (Bullseye)", imagen: "img/debian.png" },
    { id: "centos", nombre: "CentOS", version: "Stream 9", imagen: "img/centos.png" },
    { id: "fedora", nombre: "Fedora", version: "36 Workstation", imagen: "img/fedora.png" },
    { id: "alpine", nombre: "Alpine", version: "3.16", imagen: "img/alpine.png" },
    { id: "arch", nombre: "Arch Linux", version: "2023.05.01", imagen: "img/arch.png" }
  ],
  windows: [
    { id: "win-server-2022", nombre: "Windows Server", version: "2022", imagen: "img/windows.png" },
    { id: "win-server-2019", nombre: "Windows Server", version: "2019", imagen: "img/windows.png" },
    { id: "win-10", nombre: "Windows", version: "10 Pro", imagen: "img/windows.png" },
    { id: "win-11", nombre: "Windows", version: "11 Pro", imagen: "img/windows.png" }
  ],
  macos: [
    { id: "monterey", nombre: "macOS", version: "Monterey", imagen: "img/macos.png" },
    { id: "big-sur", nombre: "macOS", version: "Big Sur", imagen: "img/macos.png" },
    { id: "ventura", nombre: "macOS", version: "Ventura", imagen: "img/macos.png" }
  ],
  custom: [
    { id: "custom-iso", nombre: "ISO Personalizada", version: "Sube tu propia ISO", imagen: "img/cd.png" }
  ]
};

// Datos de rendimiento para gráficos
const datosRendimiento = {
  cpu: {
    etiquetas: ["00:00", "03:00", "06:00", "09:00", "12:00", "15:00", "18:00", "21:00"],
    actual: [15, 20, 25, 45, 60, 55, 40, 35],
    promedio: [20, 22, 25, 30, 35, 32, 28, 25]
  },
  memoria: {
    etiquetas: ["00:00", "03:00", "06:00", "09:00", "12:00", "15:00", "18:00", "21:00"],
    actual: [30, 32, 35, 50, 65, 60, 55, 45],
    promedio: [35, 36, 38, 42, 45, 44, 40, 38]
  },
  red: {
    etiquetas: ["00:00", "03:00", "06:00", "09:00", "12:00", "15:00", "18:00", "21:00"],
    entrada: [5, 8, 10, 25, 30, 28, 20, 15],
    salida: [10, 12, 15, 35, 40, 38, 30, 20]
  },
  disco: {
    etiquetas: ["00:00", "03:00", "06:00", "09:00", "12:00", "15:00", "18:00", "21:00"],
    lectura: [8, 10, 15, 25, 30, 28, 20, 12],
    escritura: [5, 8, 12, 20, 25, 22, 15, 10]
  }
};

// Máquinas virtuales del usuario
const maquinasVirtuales = [
  {
    id: 1,
    nombre: "web-server-01",
    sistema: "Ubuntu 22.04",
    cpu: 45,
    memoria: 60,
    almacenamiento: 75,
    estado: "activo"
  },
  {
    id: 2,
    nombre: "db-server-01",
    sistema: "CentOS 8",
    cpu: 30,
    memoria: 50,
    almacenamiento: 65,
    estado: "activo"
  },
  {
    id: 3,
    nombre: "dev-env-01",
    sistema: "Windows Server 2022",
    cpu: 20,
    memoria: 35,
    almacenamiento: 50,
    estado: "activo"
  },
  {
    id: 4,
    nombre: "test-server-01",
    sistema: "Debian 11",
    cpu: 15,
    memoria: 25,
    almacenamiento: 40,
    estado: "activo"
  },
  {
    id: 5,
    nombre: "backup-server-01",
    sistema: "Ubuntu 20.04",
    cpu: 10,
    memoria: 20,
    almacenamiento: 85,
    estado: "activo"
  }
];

// Alertas y notificaciones
const alertas = [
  {
    id: 1,
    tipo: "warning",
    titulo: "Almacenamiento alto",
    mensaje: "El servidor backup-server-01 está utilizando más del 80% de su almacenamiento.",
    tiempo: "Hace 35 minutos"
  },
  {
    id: 2,
    tipo: "info",
    titulo: "Mantenimiento programado",
    mensaje: "Se realizará mantenimiento en el centro de datos el 15/10/2025 de 2:00 AM a 4:00 AM.",
    tiempo: "Hace 2 horas"
  },
  {
    id: 3,
    tipo: "success",
    titulo: "Backup completado",
    mensaje: "El backup semanal de todas las máquinas virtuales se ha completado exitosamente.",
    tiempo: "Hace 5 horas"
  }
];

// Testimonios de clientes
const testimonios = [
  {
    id: 1,
    nombre: "Victor Tijerina",
    cargo: "CTO, TechInnovate",
    mensaje: "VirtuaSys Solutions ha transformado nuestra infraestructura IT. El rendimiento es excepcional y el soporte técnico siempre está disponible.",
    avatar: "img/avatar1.svg"
  },
  {
    id: 2,
    nombre: "Miguel Garza",
    cargo: "Desarrolladora Freelance",
    mensaje: "Como desarrollador independiente, necesitaba una solución flexible y potente. VirtuaSys me ofrece exactamente eso a un precio accesible.",
    avatar: "img/avatar2.svg"
  },
  {
    id: 3,
    nombre: "Sebastian Chairez",
    cargo: "Director IT, Universidad Tecnológica",
    mensaje: "Nuestra universidad utiliza los laboratorios virtuales de VirtuaSys para clases remotas. La experiencia ha sido excelente tanto para profesores como estudiantes.",
    avatar: "img/avatar3.svg"
  },
  {
    id: 4,
    nombre: "Luis Gallegos",
    cargo: "CIO, Fintech Solutions",
    mensaje: "El sistema de backups de VirtuaSys nos salvó literalmente el negocio cuando sufrimos un ataque de ransomware. Pudimos restaurar todo en menos de una hora.",
    avatar: "img/avatar4.svg"
  },
  {
    id: 5,
    nombre: "Rodrigo Mazuca",
    cargo: "Administradora de Sistemas, Hospital Central",
    mensaje: "La facilidad para programar y gestionar backups es impresionante. La restauración granular nos ha ahorrado muchísimo tiempo cuando necesitamos recuperar archivos específicos.",
    avatar: "img/avatar5.svg"
  },
  {
    id: 6,
    nombre: "Carlos Delgado",
    cargo: "Desarrollador Senior, AppTech",
    mensaje: "Como desarrollador, los snapshots son una característica invaluable. Puedo hacer pruebas y experimentos sabiendo que puedo volver atrás en segundos si algo sale mal.",
    avatar: "img/avatar6.svg"
  }
];

// Preguntas frecuentes
const preguntasFrecuentes = [
  {
    id: 1,
    pregunta: "¿Qué es un servidor VPS?",
    respuesta: "Un servidor VPS (Virtual Private Server) es un servidor virtual que funciona en un entorno virtualizado pero que ofrece recursos dedicados como CPU, RAM y almacenamiento. A diferencia del hosting compartido, un VPS te proporciona mayor control, rendimiento y seguridad."
  },
  {
    id: 2,
    pregunta: "¿Puedo cambiar de plan en cualquier momento?",
    respuesta: "Sí, puedes actualizar o cambiar tu plan en cualquier momento. La migración a un plan superior es instantánea y sin tiempo de inactividad. Si necesitas reducir recursos, programaremos el cambio para minimizar cualquier interrupción en tu servicio."
  },
  {
    id: 3,
    pregunta: "¿Qué sistemas operativos están disponibles?",
    respuesta: "Ofrecemos una amplia variedad de sistemas operativos, incluyendo Ubuntu, Debian, CentOS, Fedora, Alpine, Arch Linux, Windows Server y más. También puedes subir tu propia imagen ISO personalizada."
  },
  {
    id: 4,
    pregunta: "¿Cómo funcionan los backups?",
    respuesta: "Nuestro sistema de backups realiza copias completas de tus máquinas virtuales según la frecuencia de tu plan (semanal o diaria). Los backups se almacenan en una infraestructura separada y redundante. Puedes restaurar un backup completo o archivos específicos a través del panel de control."
  },
  {
    id: 5,
    pregunta: "¿Qué tipo de soporte ofrecen?",
    respuesta: "Todos nuestros planes incluyen soporte técnico 24/7. La diferencia entre los niveles de soporte está en el tiempo de respuesta y el nivel de asistencia. Los planes superiores tienen acceso a ingenieros senior y tiempos de respuesta más rápidos. También ofrecemos soporte por chat, correo electrónico y teléfono."
  },
  {
    id: 6,
    pregunta: "¿Puedo probar el servicio antes de pagar?",
    respuesta: "Sí, ofrecemos un período de prueba gratuito de 7 días para nuevos clientes. Durante este período puedes probar todas las funcionalidades de nuestro servicio sin compromiso. Además, todos nuestros planes tienen garantía de devolución de dinero de 30 días."
  }
];

// Exportar los datos para su uso en otros archivos
window.datosVirtuaSys = {
  planesServicio,
  sistemasOperativos,
  datosRendimiento,
  maquinasVirtuales,
  alertas,
  testimonios,
  preguntasFrecuentes
};