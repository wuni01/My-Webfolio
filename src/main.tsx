const programmingSkills = ["C", "C++", "JAVA", "Kotlin", "Python"];
const developmentTools = ["Visual Studio", "Eclipse", "Android Studio"];

const projects = [
  {
    name: "To be added",
    description: "To be added",
    link: "#"
  },
  {
    name: "To be added",
    description: "To be added",
    link: "#"
  },
  {
    name: "To be added",
    description: "To be added",
    link: "#"
  },
  {
    name: "To be added",
    description: "To be added",
    link: "#"
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
      <div class="group bg-white rounded-2xl overflow-hidden shadow-sm border border-black/5 hover:shadow-md transition-all duration-300 flex flex-col md:flex-row">
        <div class="md:w-1/3 aspect-video md:aspect-auto bg-gray-100 flex items-center justify-center border-b md:border-b-0 md:border-r border-black/5">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="text-gray-300"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/></svg>
        </div>
        <div class="p-6 flex-1 flex flex-col justify-between">
          <div>
            <h3 class="text-lg font-semibold mb-2">${project.name}</h3>
            <p class="text-sm text-gray-500 mb-4">${project.description}</p>
          </div>
          <a href="${project.link}" class="text-sm font-medium text-emerald-600 hover:text-emerald-700 flex items-center gap-1 transition-colors">
            View Project
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-external-link"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>
          </a>
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
