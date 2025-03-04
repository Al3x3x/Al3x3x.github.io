document.addEventListener("DOMContentLoaded", () => {
  // Definición del crucigrama
  const crosswordData = {
    grid: [
      [1, 2, 3, 4, 5, 0, 6, 7, 8, 9],
      [10, 0, 0, 0, 0, 0, 11, 0, 0, 0],
      [12, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [13, 0, 0, 0, 14, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 15, 0, 0, 0, 0, 0],
      [16, 17, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 18, 0, 0, 0],
      [19, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 20, 0, 0, 0],
      [21, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ],
    words: {
      across: [
        { number: 1, clue: "Fruto tropical de color amarillo", answer: "PLATANO", row: 0, col: 0 },
        { number: 6, clue: "Instrumento musical de cuerda", answer: "GUITARRA", row: 0, col: 6 },
        { number: 10, clue: "Lugar donde se exhiben obras de arte", answer: "MUSEO", row: 1, col: 0 },
        { number: 11, clue: "Bebida caliente hecha de hojas", answer: "TE", row: 1, col: 6 },
        { number: 12, clue: "Estación del año con flores", answer: "PRIMAVERA", row: 2, col: 0 },
        { number: 13, clue: "Parte del cuerpo que usamos para pensar", answer: "CEREBRO", row: 3, col: 0 },
        { number: 15, clue: "Animal que relincha", answer: "CABALLO", row: 4, col: 4 },
        { number: 16, clue: "Lugar donde viven los peces", answer: "ACUARIO", row: 5, col: 0 },
        { number: 18, clue: "Prenda que se usa en los pies", answer: "CALCETINES", row: 6, col: 6 },
        { number: 19, clue: "Persona que escribe libros", answer: "ESCRITOR", row: 7, col: 0 },
        { number: 20, clue: "Lugar donde se compran medicinas", answer: "FARMACIA", row: 8, col: 6 },
        { number: 21, clue: "Vehículo que vuela", answer: "AVION", row: 9, col: 0 },
      ],
      down: [
        { number: 1, clue: "Fruta roja pequeña", answer: "FRESA", row: 0, col: 0 },
        { number: 2, clue: "Instrumento para medir el tiempo", answer: "RELOJ", row: 0, col: 1 },
        { number: 3, clue: "Lugar donde se ven películas", answer: "CINE", row: 0, col: 2 },
        { number: 4, clue: "Mueble para dormir", answer: "CAMA", row: 0, col: 3 },
        { number: 5, clue: "Aparato para hablar a distancia", answer: "TELEFONO", row: 0, col: 4 },
        { number: 7, clue: "Líquido vital para la vida", answer: "AGUA", row: 0, col: 7 },
        { number: 8, clue: "Prenda que se usa en la cabeza", answer: "SOMBRERO", row: 0, col: 8 },
        { number: 9, clue: "Lugar donde se aprende", answer: "ESCUELA", row: 0, col: 9 },
        { number: 14, clue: "Sentimiento opuesto al odio", answer: "AMOR", row: 3, col: 4 },
        { number: 17, clue: "Color del cielo despejado", answer: "AZUL", row: 5, col: 1 },
      ],
    },
  }

  // Variables globales
  let selectedCell = null
  let selectedClue = null
  let selectedDirection = "across"
  let timer = null
  let seconds = 0
  let hintsUsed = 0
  let userGrid = []

  // Elementos DOM
  const crosswordGrid = document.getElementById("crossword-grid")
  const horizontalClues = document.getElementById("horizontal-clues")
  const verticalClues = document.getElementById("vertical-clues")
  const checkBtn = document.getElementById("check-btn")
  const hintBtn = document.getElementById("hint-btn")
  const resetBtn = document.getElementById("reset-btn")
  const timerElement = document.getElementById("timer")
  const messageElement = document.getElementById("message")
  const modal = document.getElementById("modal")
  const modalClose = document.getElementById("modal-close")
  const confettiContainer = document.getElementById("confetti-container")

  // Inicializar el juego
  initGame()

  // Función para inicializar el juego
  function initGame() {
    // Crear cuadrícula vacía
    createEmptyGrid()

    // Renderizar crucigrama
    renderCrossword()

    // Renderizar pistas
    renderClues()

    // Iniciar temporizador
    startTimer()

    // Agregar event listeners
    addEventListeners()
  }

  // Crear cuadrícula vacía
  function createEmptyGrid() {
    userGrid = Array(crosswordData.grid.length)
      .fill()
      .map(() => Array(crosswordData.grid[0].length).fill(""))
  }

  // Renderizar crucigrama - Optimizado
  function renderCrossword() {
    // Crear un fragmento para minimizar reflows
    const fragment = document.createDocumentFragment()

    // Configurar el tamaño de la cuadrícula
    crosswordGrid.style.gridTemplateRows = `repeat(${crosswordData.grid.length}, 1fr)`
    crosswordGrid.style.gridTemplateColumns = `repeat(${crosswordData.grid[0].length}, 1fr)`

    // Limpiar el grid
    crosswordGrid.innerHTML = ""

    for (let i = 0; i < crosswordData.grid.length; i++) {
      for (let j = 0; j < crosswordData.grid[i].length; j++) {
        const cell = document.createElement("div")
        cell.className = "cell"
        cell.dataset.row = i
        cell.dataset.col = j

        const cellNumber = crosswordData.grid[i][j]

        if (cellNumber === 0) {
          // Celda negra (sin entrada)
          cell.classList.add("black")
        } else {
          // Celda con entrada
          if (cellNumber > 0) {
            const numberSpan = document.createElement("span")
            numberSpan.className = "cell-number"
            numberSpan.textContent = cellNumber
            cell.appendChild(numberSpan)
          }

          const input = document.createElement("input")
          input.className = "cell-input"
          input.maxLength = 1
          input.dataset.row = i
          input.dataset.col = j

          // Si ya hay una letra ingresada, mostrarla
          if (userGrid[i][j]) {
            input.value = userGrid[i][j]
          }

          cell.appendChild(input)
        }

        fragment.appendChild(cell)
      }
    }

    // Añadir todo el fragmento de una vez
    crosswordGrid.appendChild(fragment)

    // Añadir event listeners después de crear todas las celdas
    const cells = crosswordGrid.querySelectorAll(".cell:not(.black)")
    cells.forEach((cell) => {
      const i = Number.parseInt(cell.dataset.row)
      const j = Number.parseInt(cell.dataset.col)

      cell.addEventListener("click", () => selectCell(cell, i, j))

      const input = cell.querySelector("input")
      if (input) {
        input.addEventListener("input", handleInput)
        input.addEventListener("keydown", handleKeyDown)
        input.addEventListener("focus", () => {
          selectCell(cell, i, j)
        })
      }
    })
  }

  // Manejador de entrada optimizado
  function handleInput(e) {
    const input = e.target
    const row = Number.parseInt(input.dataset.row)
    const col = Number.parseInt(input.dataset.col)
    const value = input.value.toUpperCase()

    input.value = value
    userGrid[row][col] = value

    // Avanzar a la siguiente celda si se ingresó una letra
    if (value && selectedDirection) {
      // Usar setTimeout para permitir que el valor se actualice primero
      setTimeout(() => {
        moveToNextCell(row, col, selectedDirection)
      }, 10)
    }

    // Verificar si la palabra está completa
    checkWordCompletion(row, col)
  }

  // Manejador de teclas optimizado
  function handleKeyDown(e) {
    const input = e.target
    const row = Number.parseInt(input.dataset.row)
    const col = Number.parseInt(input.dataset.col)

    switch (e.key) {
      case "ArrowUp":
        e.preventDefault()
        moveInDirection(row, col, -1, 0)
        break
      case "ArrowDown":
        e.preventDefault()
        moveInDirection(row, col, 1, 0)
        break
      case "ArrowLeft":
        e.preventDefault()
        moveInDirection(row, col, 0, -1)
        break
      case "ArrowRight":
        e.preventDefault()
        moveInDirection(row, col, 0, 1)
        break
      case "Backspace":
        // Si la celda está vacía, moverse a la anterior
        if (!userGrid[row][col]) {
          if (selectedDirection === "across") {
            moveInDirection(row, col, 0, -1)
          } else {
            moveInDirection(row, col, -1, 0)
          }
        }
        break
      case "Tab":
        e.preventDefault()
        // Moverse a la siguiente palabra
        if (e.shiftKey) {
          selectPreviousWord()
        } else {
          selectNextWord()
        }
        break
      case " ":
        e.preventDefault()
        // Cambiar dirección
        selectedDirection = selectedDirection === "across" ? "down" : "across"
        highlightCurrentWord(row, col)
        selectClueFromCell(row, col)
        break
    }
  }

  // Renderizar pistas - Optimizado
  function renderClues() {
    // Crear fragmentos para minimizar reflows
    const horizontalFragment = document.createDocumentFragment()
    const verticalFragment = document.createDocumentFragment()

    // Limpiar las listas
    horizontalClues.innerHTML = ""
    verticalClues.innerHTML = ""

    // Pistas horizontales
    crosswordData.words.across.forEach((word) => {
      const clueItem = document.createElement("li")
      clueItem.className = "clue-item"
      clueItem.dataset.number = word.number
      clueItem.dataset.direction = "across"
      clueItem.textContent = `${word.number}. ${word.clue}`

      horizontalFragment.appendChild(clueItem)
    })

    // Pistas verticales
    crosswordData.words.down.forEach((word) => {
      const clueItem = document.createElement("li")
      clueItem.className = "clue-item"
      clueItem.dataset.number = word.number
      clueItem.dataset.direction = "down"
      clueItem.textContent = `${word.number}. ${word.clue}`

      verticalFragment.appendChild(clueItem)
    })

    // Añadir fragmentos de una vez
    horizontalClues.appendChild(horizontalFragment)
    verticalClues.appendChild(verticalFragment)

    // Añadir event listeners después de crear todas las pistas
    const clueItems = document.querySelectorAll(".clue-item")
    clueItems.forEach((clueItem) => {
      const number = Number.parseInt(clueItem.dataset.number)
      const direction = clueItem.dataset.direction

      // Encontrar la palabra correspondiente
      const wordList = direction === "across" ? crosswordData.words.across : crosswordData.words.down
      const word = wordList.find((w) => w.number === number)

      if (word) {
        clueItem.addEventListener("click", () => {
          selectClue(clueItem, word, direction)
        })
      }
    })
  }

  // Seleccionar celda - Optimizado
  function selectCell(cell, row, col) {
    // Deseleccionar celda anterior
    if (selectedCell) {
      selectedCell.classList.remove("selected")
    }

    // Deseleccionar todas las celdas resaltadas
    const highlightedCells = document.querySelectorAll(".cell.highlighted")
    highlightedCells.forEach((cell) => {
      cell.classList.remove("highlighted")
    })

    // Seleccionar nueva celda
    selectedCell = cell
    cell.classList.add("selected")

    // Enfocar el input dentro de la celda
    const input = cell.querySelector("input")
    if (input) {
      input.focus()
    }

    // Determinar la dirección (horizontal o vertical)
    determineDirection(row, col)

    // Resaltar la palabra actual
    highlightCurrentWord(row, col)

    // Seleccionar la pista correspondiente
    selectClueFromCell(row, col)
  }

  // Determinar dirección (horizontal o vertical)
  function determineDirection(row, col) {
    // Si ya hay una dirección seleccionada, alternar entre horizontal y vertical
    if (canMoveInDirection(row, col, "across") && canMoveInDirection(row, col, "down")) {
      if (selectedDirection === "across") {
        selectedDirection = "down"
      } else {
        selectedDirection = "across"
      }
    } else if (canMoveInDirection(row, col, "across")) {
      selectedDirection = "across"
    } else if (canMoveInDirection(row, col, "down")) {
      selectedDirection = "down"
    }
  }

  // Verificar si se puede mover en una dirección
  function canMoveInDirection(row, col, direction) {
    if (direction === "across") {
      // Verificar si hay una celda a la derecha o a la izquierda
      return (
        (col > 0 && crosswordData.grid[row][col - 1] !== 0) ||
        (col < crosswordData.grid[row].length - 1 && crosswordData.grid[row][col + 1] !== 0)
      )
    } else {
      // Verificar si hay una celda arriba o abajo
      return (
        (row > 0 && crosswordData.grid[row - 1][col] !== 0) ||
        (row < crosswordData.grid.length - 1 && crosswordData.grid[row + 1][col] !== 0)
      )
    }
  }

  // Resaltar la palabra actual - Optimizado
  function highlightCurrentWord(row, col) {
    // Encontrar la palabra actual
    const word = findWordAt(row, col, selectedDirection)

    if (word) {
      // Crear un array de celdas para resaltar
      const cellsToHighlight = []

      if (selectedDirection === "across") {
        for (let j = 0; j < word.answer.length; j++) {
          const cell = document.querySelector(`.cell[data-row="${word.row}"][data-col="${word.col + j}"]`)
          if (cell) {
            cellsToHighlight.push(cell)
          }
        }
      } else {
        for (let i = 0; i < word.answer.length; i++) {
          const cell = document.querySelector(`.cell[data-row="${word.row + i}"][data-col="${word.col}"]`)
          if (cell) {
            cellsToHighlight.push(cell)
          }
        }
      }

      // Resaltar todas las celdas de una vez
      cellsToHighlight.forEach((cell) => {
        cell.classList.add("highlighted")
      })
    }
  }

  // Encontrar palabra en una posición - Optimizado con caché
  const wordCache = {
    across: {},
    down: {},
  }

  function findWordAt(row, col, direction) {
    // Verificar caché
    const cacheKey = `${row}-${col}`
    if (wordCache[direction][cacheKey]) {
      return wordCache[direction][cacheKey]
    }

    const words = direction === "across" ? crosswordData.words.across : crosswordData.words.down

    for (const word of words) {
      if (direction === "across") {
        // Verificar si la celda está en la palabra horizontal
        if (row === word.row && col >= word.col && col < word.col + word.answer.length) {
          wordCache[direction][cacheKey] = word
          return word
        }
      } else {
        // Verificar si la celda está en la palabra vertical
        if (col === word.col && row >= word.row && row < word.row + word.answer.length) {
          wordCache[direction][cacheKey] = word
          return word
        }
      }
    }

    wordCache[direction][cacheKey] = null
    return null
  }

  // Seleccionar pista desde celda
  function selectClueFromCell(row, col) {
    const word = findWordAt(row, col, selectedDirection)

    if (word) {
      const clueItem = document.querySelector(
        `.clue-item[data-number="${word.number}"][data-direction="${selectedDirection}"]`,
      )
      if (clueItem) {
        selectClue(clueItem, word, selectedDirection)
      }
    }
  }

  // Seleccionar pista
  function selectClue(clueItem, word, direction) {
    // Deseleccionar pista anterior
    const activeClues = document.querySelectorAll(".clue-item.active")
    activeClues.forEach((clue) => {
      clue.classList.remove("active")
    })

    // Seleccionar nueva pista
    clueItem.classList.add("active")
    selectedClue = clueItem
    selectedDirection = direction

    // Seleccionar la primera celda de la palabra
    const firstCell = document.querySelector(`.cell[data-row="${word.row}"][data-col="${word.col}"]`)
    if (firstCell) {
      selectCell(firstCell, word.row, word.col)
    }

    // Hacer scroll a la pista seleccionada
    clueItem.scrollIntoView({ behavior: "smooth", block: "center" })
  }

  // Mover a la siguiente celda
  function moveToNextCell(row, col, direction) {
    let nextRow = row
    let nextCol = col

    if (direction === "across") {
      nextCol++
    } else {
      nextRow++
    }

    // Verificar si la siguiente celda existe y no es negra
    if (
      nextRow < crosswordData.grid.length &&
      nextCol < crosswordData.grid[0].length &&
      crosswordData.grid[nextRow][nextCol] !== 0
    ) {
      const nextCell = document.querySelector(`.cell[data-row="${nextRow}"][data-col="${nextCol}"]`)
      if (nextCell) {
        selectCell(nextCell, nextRow, nextCol)
      }
    }
  }

  // Manejar navegación con teclado
  function moveInDirection(row, col, rowOffset, colOffset) {
    const newRow = row + rowOffset
    const newCol = col + colOffset

    // Verificar si la nueva posición es válida
    if (
      newRow >= 0 &&
      newRow < crosswordData.grid.length &&
      newCol >= 0 &&
      newCol < crosswordData.grid[0].length &&
      crosswordData.grid[newRow][newCol] !== 0
    ) {
      const nextCell = document.querySelector(`.cell[data-row="${newRow}"][data-col="${newCol}"]`)
      if (nextCell) {
        selectCell(nextCell, newRow, newCol)
      }
    }
  }

  // Seleccionar siguiente palabra - Optimizado
  function selectNextWord() {
    const words = [...crosswordData.words.across, ...crosswordData.words.down]
    let currentIndex = -1

    if (selectedClue) {
      const currentNumber = Number.parseInt(selectedClue.dataset.number)
      const currentDirection = selectedClue.dataset.direction

      // Encontrar el índice de la palabra actual
      for (let i = 0; i < words.length; i++) {
        const word = words[i]
        const wordDirection = i < crosswordData.words.across.length ? "across" : "down"

        if (word.number === currentNumber && wordDirection === currentDirection) {
          currentIndex = i
          break
        }
      }
    }

    // Seleccionar la siguiente palabra
    const nextIndex = (currentIndex + 1) % words.length
    const nextWord = words[nextIndex]
    const nextDirection = nextIndex < crosswordData.words.across.length ? "across" : "down"

    const nextClue = document.querySelector(
      `.clue-item[data-number="${nextWord.number}"][data-direction="${nextDirection}"]`,
    )
    if (nextClue) {
      selectClue(nextClue, nextWord, nextDirection)
    }
  }

  // Seleccionar palabra anterior
  function selectPreviousWord() {
    const words = [...crosswordData.words.across, ...crosswordData.words.down]
    let currentIndex = 0

    if (selectedClue) {
      const currentNumber = Number.parseInt(selectedClue.dataset.number)
      const currentDirection = selectedClue.dataset.direction

      // Encontrar el índice de la palabra actual
      for (let i = 0; i < words.length; i++) {
        const word = words[i]
        const wordDirection = i < crosswordData.words.across.length ? "across" : "down"

        if (word.number === currentNumber && wordDirection === currentDirection) {
          currentIndex = i
          break
        }
      }
    }

    // Seleccionar la palabra anterior
    const prevIndex = (currentIndex - 1 + words.length) % words.length
    const prevWord = words[prevIndex]
    const prevDirection = prevIndex < crosswordData.words.across.length ? "across" : "down"

    const prevClue = document.querySelector(
      `.clue-item[data-number="${prevWord.number}"][data-direction="${prevDirection}"]`,
    )
    if (prevClue) {
      selectClue(prevClue, prevWord, prevDirection)
    }
  }

  // Verificar si una palabra está completa - Optimizado
  function checkWordCompletion(row, col) {
    const word = findWordAt(row, col, selectedDirection)

    if (word) {
      let isComplete = true
      let isCorrect = true

      // Verificar si todas las celdas están llenas y son correctas
      if (selectedDirection === "across") {
        for (let j = 0; j < word.answer.length; j++) {
          if (!userGrid[word.row][word.col + j]) {
            isComplete = false
            break
          }

          if (userGrid[word.row][word.col + j] !== word.answer[j]) {
            isCorrect = false
          }
        }
      } else {
        for (let i = 0; i < word.answer.length; i++) {
          if (!userGrid[word.row + i][word.col]) {
            isComplete = false
            break
          }

          if (userGrid[word.row + i][word.col] !== word.answer[i]) {
            isCorrect = false
          }
        }
      }

      // Marcar la pista como resuelta si está completa y correcta
      if (isComplete && isCorrect) {
        const clueItem = document.querySelector(
          `.clue-item[data-number="${word.number}"][data-direction="${selectedDirection}"]`,
        )
        if (clueItem) {
          clueItem.classList.add("solved")
        }

        // Verificar si todo el crucigrama está completo
        checkCrosswordCompletion()
      }
    }
  }

  // Verificar si todo el crucigrama está completo - Optimizado
  function checkCrosswordCompletion() {
    // Verificar solo palabras horizontales para evitar duplicación
    for (const word of crosswordData.words.across) {
      let isComplete = true
      let isCorrect = true

      for (let j = 0; j < word.answer.length; j++) {
        if (!userGrid[word.row][word.col + j]) {
          isComplete = false
          break
        }

        if (userGrid[word.row][word.col + j] !== word.answer[j]) {
          isCorrect = false
          break
        }
      }

      if (!isComplete || !isCorrect) {
        return false
      }
    }

    // Verificar palabras verticales
    for (const word of crosswordData.words.down) {
      let isComplete = true
      let isCorrect = true

      for (let i = 0; i < word.answer.length; i++) {
        if (!userGrid[word.row + i][word.col]) {
          isComplete = false
          break
        }

        if (userGrid[word.row + i][word.col] !== word.answer[i]) {
          isCorrect = false
          break
        }
      }

      if (!isComplete || !isCorrect) {
        return false
      }
    }

    // Si llegamos aquí, el crucigrama está completo y correcto
    showMessage("¡Felicidades! Has completado el crucigrama", "success")
    stopTimer()

    // Mostrar modal de victoria
    setTimeout(() => {
      showVictoryModal()
    }, 1000)

    return true
  }

  // Verificar crucigrama - Optimizado
  function checkCrossword() {
    let isComplete = true
    let errors = 0
    const errorCells = []

    // Verificar todas las palabras
    for (const word of crosswordData.words.across) {
      for (let j = 0; j < word.answer.length; j++) {
        if (!userGrid[word.row][word.col + j]) {
          isComplete = false
        } else if (userGrid[word.row][word.col + j] !== word.answer[j]) {
          errors++
          errorCells.push({ row: word.row, col: word.col + j })
        }
      }
    }

    if (isComplete) {
      // Solo verificar verticales si está completo para evitar duplicar errores
      for (const word of crosswordData.words.down) {
        for (let i = 0; i < word.answer.length; i++) {
          // Verificar solo celdas que no se hayan verificado horizontalmente
          const isHorizontalWord = crosswordData.words.across.some(
            (w) => w.row === word.row + i && w.col <= word.col && w.col + w.answer.length > word.col,
          )

          if (!isHorizontalWord && userGrid[word.row + i][word.col] !== word.answer[i]) {
            errors++
            errorCells.push({ row: word.row + i, col: word.col })
          }
        }
      }
    }

    // Marcar celdas con error
    errorCells.forEach(({ row, col }) => {
      const cell = document.querySelector(`.cell[data-row="${row}"][data-col="${col}"]`)
      if (cell) {
        cell.classList.add("error")

        // Quitar clase de error después de un tiempo
        setTimeout(() => {
          cell.classList.remove("error")
        }, 2000)
      }
    })

    if (!isComplete) {
      showMessage("Debes completar todas las celdas", "warning")
    } else if (errors > 0) {
      showMessage(`Hay ${errors} errores en el crucigrama`, "error")
    } else {
      showMessage("¡Correcto! Has completado el crucigrama", "success")
      stopTimer()
      showVictoryModal()
    }
  }

  // Dar una pista - Optimizado
  function giveHint() {
    if (!selectedCell) {
      showMessage("Selecciona una celda para recibir una pista", "warning")
      return
    }

    const row = Number.parseInt(selectedCell.dataset.row)
    const col = Number.parseInt(selectedCell.dataset.col)
    const word = findWordAt(row, col, selectedDirection)

    if (word) {
      // Calcular el índice de la letra en la palabra
      let letterIndex
      if (selectedDirection === "across") {
        letterIndex = col - word.col
      } else {
        letterIndex = row - word.row
      }

      // Mostrar la letra correcta
      const correctLetter = word.answer[letterIndex]
      userGrid[row][col] = correctLetter

      // Actualizar la celda en el DOM
      const input = selectedCell.querySelector("input")
      if (input) {
        input.value = correctLetter

        // Animar la celda
        selectedCell.classList.add("hint")
        setTimeout(() => {
          selectedCell.classList.remove("hint")
        }, 2000)
      }

      // Incrementar contador de pistas
      hintsUsed++

      showMessage(`Pista: La letra correcta es "${correctLetter}"`, "success")

      // Verificar si la palabra está completa
      checkWordCompletion(row, col)
    }
  }

  // Reiniciar juego
  function resetGame() {
    // Detener temporizador
    stopTimer()

    // Reiniciar variables
    seconds = 0
    hintsUsed = 0
    selectedCell = null
    selectedClue = null
    selectedDirection = "across"

    // Actualizar temporizador
    updateTimer()

    // Reiniciar juego
    createEmptyGrid()
    renderCrossword()

    // Limpiar clases de las pistas
    const clueItems = document.querySelectorAll(".clue-item")
    clueItems.forEach((clue) => {
      clue.classList.remove("active", "solved")
    })

    // Iniciar temporizador
    startTimer()

    showMessage("Juego reiniciado", "success")
  }

  // Iniciar temporizador
  function startTimer() {
    stopTimer()

    seconds = 0
    updateTimer()

    timer = setInterval(() => {
      seconds++
      updateTimer()
    }, 1000)
  }

  // Detener temporizador
  function stopTimer() {
    if (timer) {
      clearInterval(timer)
      timer = null
    }
  }

  // Actualizar temporizador
  function updateTimer() {
    const minutes = Math.floor(seconds / 60)
    const secs = seconds % 60
    timerElement.textContent = `${minutes.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`
  }

  // Mostrar mensaje - Optimizado
  function showMessage(text, type) {
    messageElement.textContent = text
    messageElement.className = `message ${type} show`

    // Limpiar cualquier temporizador anterior
    if (messageElement.timeoutId) {
      clearTimeout(messageElement.timeoutId)
    }

    // Establecer nuevo temporizador
    messageElement.timeoutId = setTimeout(() => {
      messageElement.classList.remove("show")
    }, 3000)
  }

  // Mostrar modal de victoria - Optimizado
  function showVictoryModal() {
    const modalTitle = document.getElementById("modal-title")
    const modalMessage = document.getElementById("modal-message")

    modalTitle.textContent = "¡Felicidades!"
    modalMessage.textContent = `Has completado el crucigrama en ${formatTime(seconds)} utilizando ${hintsUsed} pistas.`

    modal.classList.add("show")

    // Crear confeti optimizado
    createConfetti()
  }

  // Crear confeti - Optimizado
  function createConfetti() {
    confettiContainer.innerHTML = ""

    const colors = [
      "#f44336",
      "#e91e63",
      "#9c27b0",
      "#673ab7",
      "#3f51b5",
      "#2196f3",
      "#03a9f4",
      "#00bcd4",
      "#009688",
      "#4CAF50",
      "#8BC34A",
      "#CDDC39",
      "#FFEB3B",
      "#FFC107",
      "#FF9800",
      "#FF5722",
    ]
    const fragment = document.createDocumentFragment()

    // Reducir el número de partículas para mejorar el rendimiento
    const particleCount = 50

    for (let i = 0; i < particleCount; i++) {
      const confetti = document.createElement("div")
      confetti.className = "confetti"

      // Posición inicial
      const startX = Math.random() * window.innerWidth
      const startY = -20

      // Tamaño aleatorio
      const size = Math.floor(Math.random() * 10) + 5

      // Color aleatorio
      const color = colors[Math.floor(Math.random() * colors.length)]

      // Aplicar estilos
      confetti.style.left = `${startX}px`
      confetti.style.top = `${startY}px`
      confetti.style.width = `${size}px`
      confetti.style.height = `${size}px`
      confetti.style.backgroundColor = color
      confetti.style.transform = `rotate(${Math.random() * 360}deg)`

      fragment.appendChild(confetti)
    }

    confettiContainer.appendChild(fragment)

    // Animar confeti con requestAnimationFrame
    animateConfetti()
  }

  // Animar confeti con requestAnimationFrame para mejor rendimiento
  function animateConfetti() {
    const confettis = document.querySelectorAll(".confetti")

    confettis.forEach((confetti) => {
      const speedX = Math.random() * 2 - 1
      const speedY = Math.random() * 3 + 2
      let posX = Number.parseFloat(confetti.style.left)
      let posY = Number.parseFloat(confetti.style.top)
      let rotation = Number.parseFloat(confetti.style.transform.replace(/[^\d.]/g, "") || 0)

      function animate() {
        posX += speedX
        posY += speedY
        rotation += 2

        confetti.style.left = `${posX}px`
        confetti.style.top = `${posY}px`
        confetti.style.transform = `rotate(${rotation}deg)`

        if (posY < window.innerHeight) {
          requestAnimationFrame(animate)
        } else {
          confetti.remove()
        }
      }

      requestAnimationFrame(animate)
    })
  }

  // Formatear tiempo
  function formatTime(totalSeconds) {
    const minutes = Math.floor(totalSeconds / 60)
    const seconds = totalSeconds % 60
    return `${minutes} minutos y ${seconds} segundos`
  }

  // Agregar event listeners - Optimizado
  function addEventListeners() {
    // Botón verificar
    checkBtn.addEventListener("click", checkCrossword)

    // Botón pista
    hintBtn.addEventListener("click", giveHint)

    // Botón reiniciar
    resetBtn.addEventListener("click", resetGame)

    // Cerrar modal
    modalClose.addEventListener("click", () => {
      modal.classList.remove("show")
      resetGame()
    })
  }
})

