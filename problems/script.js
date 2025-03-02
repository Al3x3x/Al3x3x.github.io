document.addEventListener("DOMContentLoaded", () => {
  // GitHub repository information
  const username = 'Al3x3x';
  const repoName = 'Al3x3x.github.io';
  const folderPath = 'problems/src';

  const problemsContainer = document.getElementById("problems-container");
  const codeDisplay = document.getElementById("code-display");
  const problemTitle = document.getElementById("problem-title");
  const problemLanguage = document.getElementById("problem-language");
  const filterButtons = document.querySelectorAll(".filter-btn");

  // Array to store all problems
  let allProblems = [];

  // Function to fetch repository contents
  async function fetchRepositoryContents() {
    try {
      problemsContainer.innerHTML = '<div class="loading">Loading problems...</div>';

      // Fetch the contents of the problems/src directory
      const response = await fetch(`https://api.github.com/repos/${username}/${repoName}/contents/${folderPath}`);

      if (!response.ok) {
        throw new Error(`GitHub API error: ${response.status}`);
      }

      const data = await response.json();

      // Filter for .cpp and .java files
      const files = data.filter(item =>
      item.type === 'file' &&
      (item.name.endsWith('.cpp') || item.name.endsWith('.java'))
      );

      // Process each file
      allProblems = files.map(file => {
        const language = file.name.endsWith('.cpp') ? 'cpp' : 'java';
        const name = file.name.replace(/\.(cpp|java)$/, '');

        return {
          id: file.sha,
          name: formatProblemName(name),
                              filename: file.name,
                              language: language,
                              url: file.html_url,
                              rawUrl: file.download_url
        };
      });

      // Display all problems initially
      displayProblems(allProblems);
    } catch (error) {
      console.error('Error fetching repository contents:', error);
      problemsContainer.innerHTML = `<div class="loading">Error loading problems: ${error.message}</div>`;
    }
  }

  // Function to format problem name (convert camelCase or snake_case to readable text)
  function formatProblemName(name) {
    // Replace underscores with spaces
    name = name.replace(/_/g, " ");

    // Insert space before capital letters
    name = name.replace(/([A-Z])/g, " $1");

    // Capitalize first letter and trim
    return name.charAt(0).toUpperCase() + name.slice(1).trim();
  }

  // Function to display problems
  function displayProblems(problems) {
    problemsContainer.innerHTML = "";

    if (problems.length === 0) {
      problemsContainer.innerHTML = '<div class="loading">No problems found</div>';
      return;
    }

    problems.forEach((problem) => {
      const problemElement = document.createElement("div");
      problemElement.className = "problem-item";
      problemElement.dataset.id = problem.id;

      problemElement.innerHTML = `
      <span>${problem.name}</span>
      <span class="language-badge ${problem.language}">${problem.language.toUpperCase()}</span>
      `;

      problemElement.addEventListener("click", () => {
        // Remove active class from all problems
        document.querySelectorAll(".problem-item").forEach((item) => {
          item.classList.remove("active");
        });

        // Add active class to clicked problem
        problemElement.classList.add("active");

        // Fetch and display code
        fetchAndDisplayCode(problem);
      });

      problemsContainer.appendChild(problemElement);
    });
  }

  // Function to fetch and display code
  async function fetchAndDisplayCode(problem) {
    try {
      problemTitle.textContent = problem.name;
      problemLanguage.textContent = problem.language.toUpperCase();
      problemLanguage.className = `language-badge ${problem.language}`;
      codeDisplay.textContent = "Loading code...";

      const response = await fetch(problem.rawUrl);

      if (!response.ok) {
        throw new Error(`Failed to fetch code: ${response.status}`);
      }

      const code = await response.text();
      codeDisplay.textContent = code;
    } catch (error) {
      console.error("Error fetching code:", error);
      codeDisplay.textContent = `Error loading code: ${error.message}`;
    }
  }

  // Filter problems by language
  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      // Remove active class from all buttons
      filterButtons.forEach((btn) => btn.classList.remove("active"));

      // Add active class to clicked button
      button.classList.add("active");

      const language = button.dataset.language;

      if (language === "all") {
        displayProblems(allProblems);
      } else {
        const filteredProblems = allProblems.filter((problem) => problem.language === language);
        displayProblems(filteredProblems);
      }
    });
  });

  // Check for new files periodically (every 5 minutes)
  function setupAutoRefresh() {
    setInterval(fetchRepositoryContents, 5 * 60 * 1000); // 5 minutes
  }

  // Initial fetch
  fetchRepositoryContents();

  // Setup auto-refresh
  setupAutoRefresh();
});
