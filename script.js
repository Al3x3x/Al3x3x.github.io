// Array de proyectos - Añade nuevos proyectos aquí
const projects = [
  {
    id: "spotify",
    title: "Recomendaciones Spotify",
    description:
      "Una aplicación que permite a los usuarios recomendarme música y agregarla a mi Spotify. Desarrollada con Express.",
    image: "spotify.png",
    url: "/spotify",
  },
  {
    id: "snake",
    title: "Juego Snake",
    description: "Un juego clásico de la serpiente desarrollado en JavaScript como parte de un curso.",
    image: "snake.png",
    url: "/Snake",
  },
 
]

// Función para cargar los proyectos en la página
function loadProjects() {
  const projectsContainer = document.getElementById("projects-container")

  projects.forEach((project) => {
    const projectCard = document.createElement("div")
    projectCard.className = "project-card"
    projectCard.innerHTML = `
            <img src="${project.image}" alt="${project.title}">
            <div class="project-info">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <a href="${project.url}" class="project-link">Ver Proyecto</a>
            </div>
        `
    projectsContainer.appendChild(projectCard)
  })
}

document.addEventListener("DOMContentLoaded", () => {
  loadProjects()

  const profileImg = document.getElementById("profile-img")
  if (profileImg) {
    profileImg.addEventListener("mouseover", () => {
      profileImg.style.transform = "rotate(5deg) scale(1.1)"
    })

    profileImg.addEventListener("mouseout", () => {
      profileImg.style.transform = "rotate(0) scale(1)"
    })
  }
})
function addProject(project) {
  projects.push(project)

  const projectsContainer = document.getElementById("projects-container")
  projectsContainer.innerHTML = ""
  loadProjects()
}

