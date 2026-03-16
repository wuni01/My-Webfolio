const programmingSkills = ["C", "C++", "JAVA", "Kotlin", "Python"];
const developmentTools = ["Visual Studio", "Eclipse", "Android Studio"];

const projects = [
  {
    name: "To be added",
    description: "To be added"
  },
  {
    name: "To be added",
    description: "To be added"
  },
  {
    name: "To be added",
    description: "To be added"
  },
  {
    name: "To be added",
    description: "To be added"
  }
];

function init() {
  const skillsContainer = document.getElementById('programming-skills');
  const toolsContainer = document.getElementById('development-tools');
  const projectsContainer = document.getElementById('projects-container');
  const yearSpan = document.getElementById('year');

  if (skillsContainer) {
    skillsContainer.innerHTML = programmingSkills.map(skill => `
      <span class="px-4 py-2 bg-gray-50 rounded-full text-sm font-medium border border-gray-100">
        ${skill}
      </span>
    `).join('');
  }

  if (toolsContainer) {
    toolsContainer.innerHTML = developmentTools.map(tool => `
      <span class="px-4 py-2 bg-gray-50 rounded-full text-sm font-medium border border-gray-100">
        ${tool}
      </span>
    `).join('');
  }

  if (projectsContainer) {
    projectsContainer.innerHTML = projects.map(project => `
      <div class="group bg-white rounded-2xl overflow-hidden shadow-sm border border-black/5 hover:shadow-md transition-all duration-300">
        <div class="aspect-video bg-gray-100 flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="text-gray-300"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/></svg>
        </div>
        <div class="p-6">
          <h3 class="text-lg font-semibold mb-2">${project.name}</h3>
          <p class="text-sm text-gray-500">${project.description}</p>
        </div>
      </div>
    `).join('');
  }

  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear().toString();
  }
}

// Initialize on load
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
