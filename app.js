
function affiche(id) {
    let contenu = document.getElementById("contenu");

    if (id == "texte_1") {
        contenu.innerHTML = "paragraphe 1"
    } else if (id == "texte_2") {
        contenu.innerHTML = "paragraphe 2"
    } else if (id == "texte_3") {
        contenu.innerHTML = "paragraphe 3"
    }

}
    
function affiche_2(id) {
    const boutons = document.getElementById(id);
    const display = boutons.style.display;

    // Astuce : si aucun style inline n'est encore défini
    if (display === "" || display === "none") {
        boutons.style.display = "block";
    } else {
        boutons.style.display = "none";
    }
}