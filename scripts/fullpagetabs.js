function openPage(pageName, elmnt, color) {
  // Cacher tout le contenu des onglets
  var tabcontent = document.getElementsByClassName("tabcontent");
  for (var i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Réinitialiser la couleur des boutons
  var tablinks = document.getElementsByClassName("tablink");
  for (var i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = "";
  }

  // Afficher le bon contenu
  const currentTab = document.getElementById(pageName);
  currentTab.style.display = "block";
  elmnt.style.backgroundColor = color;

  // 🌀 Recharger l’iframe à chaque ouverture pour forcer Leaflet à se réinitialiser
  const iframe = currentTab.querySelector("iframe");
  if (iframe) {
    const src = iframe.src; // on sauvegarde l’URL
    iframe.src = "";        // on la vide (pour forcer le reload)
    setTimeout(() => {
      iframe.src = src;     // on la remet après une petite pause
    }, 150);
  }
}

// Ouvrir l’onglet par défaut
document.getElementById("defaultOpen").click();
