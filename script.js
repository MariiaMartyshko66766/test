// Martyshko Mariia 66766
console.log("66766: Skrypt podłączony poprawnie!");

document.addEventListener('DOMContentLoaded', () => {
    
    const themeBtn = document.getElementById('theme-btn');
    const toggleBtn = document.getElementById('toggle-section-btn');
    const projectsSection = document.getElementById('projects-section');

    // --- ZADANIE 4: Interakcja ---
    if (themeBtn) {
        themeBtn.onclick = () => {
            document.body.classList.toggle('red-theme');
            document.body.classList.toggle('green-theme');
            console.log("66766: Motyw zmieniony");
        };
    }

    if (toggleBtn) {
        toggleBtn.onclick = () => {
            if (projectsSection) {
                projectsSection.classList.toggle('hidden');
            }
        };
    }

    // --- ZADANIE 5: Walidacja ---
    const contactForm = document.getElementById('contact-form');
    const errorMsg = document.getElementById('error-msg');

    if (contactForm) {
        contactForm.onsubmit = function(event) {
            event.preventDefault();
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();

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

    // --- ZADANIE 6: JSON (Только это показываешь сейчас) ---
    const skillsList = document.getElementById('skills-list');
    if (skillsList) {
        fetch('data.json')
            .then(response => {
                if (!response.ok) throw new Error("Błąd ładowania pliku JSON");
                return response.json();
            })
            .then(data => {
                console.log("66766: Dane z JSON załadowane:", data);
                skillsList.innerHTML = ""; // Убираем "Ładowanie danych..."
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
    }
});
