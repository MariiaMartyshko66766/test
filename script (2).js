console.log("66766: Skrypt podłączony poprawnie!");

document.addEventListener('DOMContentLoaded', () => {
    
    const themeBtn = document.getElementById('theme-btn');
    const toggleBtn = document.getElementById('toggle-section-btn');
    const projectsSection = document.getElementById('projects-section');

    if (themeBtn) {
        themeBtn.onclick = () => {
            document.body.classList.toggle('red-theme');
            document.body.classList.toggle('green-theme');
            console.log("66766: Motyw zmieniony");
        };
    }

    if (toggleBtn) {
        toggleBtn.onclick = () => {
            projectsSection.classList.toggle('hidden');
        };
    }

    const contactForm = document.getElementById('contact-form');
    const errorMsg = document.getElementById('error-msg');

    if (contactForm) {
        contactForm.onsubmit = function(event) {
            event.preventDefault();
            
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();

            console.log("66766: Próba wysłania formy:", { name, email });

            if (!name || !email || !message) {
                errorMsg.textContent = "Błąd: Wypełnij wszystkie pola! (66766)";
                return;
            }

            if (/\d/.test(name)) {
                errorMsg.textContent = "Błąd: Imię nie może mieć cyfr! (66766)";
                return;
            }

            errorMsg.textContent = ""; 
            alert("Sukces 66766! Forma wysłana.");
            contactForm.reset();
        };
    }

    const skillsList = document.getElementById('skills-list');

    fetch('data.json')
        .then(response => {
            if (!response.ok) throw new Error("Błąd ładowania pliku JSON");
            return response.json();
        })
        .then(data => {
            console.log("66766: Dane z JSON załadowane:", data);
            skillsList.innerHTML = ""; 

            data.skills.forEach(skill => {
                const li = document.createElement('li');
                li.textContent = skill;
                skillsList.appendChild(li);
            });
        })
        .catch(err => {
            console.error("66766 Error:", err);
            skillsList.innerHTML = "<li>Nie udało się załadować umiejętności.</li>";
        });
});
