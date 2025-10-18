// Exécuter après le chargement du DOM
document.addEventListener("DOMContentLoaded", function() {
  filterSelection("all"); // Affiche toutes les colonnes par défaut

  // Mettre le bouton "Show all" en actif par défaut
  var firstBtn = document.querySelector("#myBtnContainer .btn");
  if (firstBtn) {
    firstBtn.classList.add("active");
  }
});

function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("column");
  if (c == "all") c = "";
  // Ajoute la classe "show" aux éléments filtrés
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

// Affiche les éléments filtrés
function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

// Masque les éléments non sélectionnés
function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

// Active le bouton cliqué
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");

for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    if (current.length > 0) { // ✅ vérifie que la classe existe avant d'y accéder
      current[0].classList.remove("active");
    }
    this.classList.add("active");
  });
}

