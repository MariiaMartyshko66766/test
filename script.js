console.log("66766: Skrypt podłączony poprawnie!");

document.addEventListener('DOMContentLoaded', function() {
    
    const themeBtn = document.getElementById('theme-btn');
    const toggleBtn = document.getElementById('toggle-section-btn');
    const projectsSection = document.getElementById('projects-section');

    if (themeBtn) {
        themeBtn.onclick = function() {
            console.log("66766: Kliknięto przycisk motywu");
            document.body.classList.toggle('red-theme');
            document.body.classList.toggle('green-theme');
        };
    }

    if (toggleBtn) {
        toggleBtn.onclick = function() {
            console.log("66766: Kliknięto przycisk ukrywania");
            if (projectsSection) {
                projectsSection.classList.toggle('hidden');
            }
        };
    }
});
