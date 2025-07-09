window.onload = function() {
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
    
}