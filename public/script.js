// Den här funktionen visar eller döljer menyn när man klickar på en knapp
function toggleMenu() {
    // Hämtar elementet som innehåller navigeringslänkarna
    const nav = document.querySelector('.nav-links');

    // Växlar klassen 'active' på elementet för att visa eller dölja menyn
    nav.classList.toggle('active');
}

// Lägger till en händelsehanterare för när kontaktformuläret skickas in
document.getElementById("contactForm").addEventListener("submit", function(e) {
    // Förhindrar att sidan laddas om när formuläret skickas
    e.preventDefault(); 

    // Hämtar elementet som visar bekräftelsen
    const confirmation = document.getElementById("confirmation");

    // Visar bekräftelsemeddelandet
    confirmation.style.display = "block";

    // Tömmer formuläret efter att det skickats
    this.reset();

    // Döljer bekräftelsen igen efter 1 sekund (1000 millisekunder)
    setTimeout(() => {
        confirmation.style.display = "none";
    }, 1000);
});
