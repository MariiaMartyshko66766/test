console.log("66766: Skrypt podłączony poprawnie!");

document.addEventListener('DOMContentLoaded', () => {
    console.log("Skrypt załadowany dla indeksu: 66766");

    // --- LOGIKA ZADANIA 4: Przyciski (Motyw i Ukrywanie) ---
    const themeBtn = document.getElementById('theme-btn');
    const toggleBtn = document.getElementById('toggle-section-btn');
    const projectsSection = document.getElementById('projects-section');

    if (themeBtn) {
        themeBtn.addEventListener('click', () => {
            console.log("66766: Zmieniono motyw");
            document.body.classList.toggle('red-theme');
            document.body.classList.toggle('green-theme');
        });
    }

    if (toggleBtn) {
        toggleBtn.addEventListener('click', () => {
            console.log("66766: Przełączono widoczność sekcji");
            if (projectsSection) {
                projectsSection.classList.toggle('hidden');
            }
        });
    }

    // --- LOGIKA ZADANIA 5: Formularz i Walidacja ---
    const contactForm = document.getElementById('contact-form');
    const errorMsg = document.getElementById('error-msg');

    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault(); 
            
            const nameValue = document.getElementById('name').value.trim();
            const emailValue = document.getElementById('email').value.trim();
            const messageValue = document.getElementById('message').value.trim();

            errorMsg.textContent = ""; 

            if (!nameValue || !emailValue || !messageValue) {
                errorMsg.textContent = "Błąd: Wszystkie pola są wymagane! (66766)";
                return;
            }

            if (/\d/.test(nameValue)) {
                errorMsg.textContent = "Błąd: Imię i nazwisko nie mogą zawierać cyfr! (66766)";
                return;
            }

            if (!emailValue.includes('@')) {
                errorMsg.textContent = "Błąd: Niepoprawny format e-mail! (66766)";
                return;
            }

            alert("Sukces! Formularz wypełniony poprawnie przez Mariię (66766).");
            contactForm.reset(); 
        });
    }
});
