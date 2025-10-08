// --- Sélectionne tous les liens de la barre ---
const tabs = document.querySelectorAll('.navbar a');

// --- Ajoute un événement clic à chaque lien ---
tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    // Supprime la classe active de tous les onglets
    tabs.forEach(t => t.classList.remove('active'));
    // Ajoute la classe active à celui qu'on clique
    tab.classList.add('active');
  });
});