var panels = document.querySelectorAll(".panel");
//console.log(panels);

function scroll_handler() { // "handler" = gestionnaire
    
    // On s'assure de connaître la distance scrollée dans la fenêtre (ouvrir la console pour voir)
   //console.log(window.scrollY);
    
    // Fonctionnalité 1 : ajout/retrait de la classe "scrolled" au body
    
    // Test : a-t-on scrollé d'une hauteur de fenêtre ou plus ?
    if (window.scrollY >= window.innerHeight) {
        document.body.classList.add("scrolled"); // Ajout de la classe "scrolled" sur le body
    } else {
        document.body.classList.remove("scrolled"); // On enlève cette classe si on est remonté au-dessus du seuil
    }
    
    // Fonctionnalité 2 : faire réagir les éléments du menu lorsque le panneau correspondant est à l'écran
    
    var panel_on_screen;
    
    panels.forEach(function(the_panel){
        // forEach a besoin, comme paramètre, d'une fonction. Celle-ci s'exécutera à chaque itération (passage) de la boucle. Si on donne à cette fonction au moins un paramètre, celui-ci deviendra, dans la fonction, une manière d'accéder à l'élément concerné par l'itération.
        
        //console.log(the_panel.offsetTop);
        
        if (window.scrollY >= the_panel.offsetTop) {
            // A-t-on scrollé au moins jusqu'à avoir the_panel calé en haut de la fenêtre (ou jusqu'à ce qu'il ait dépassé le haut de fenêtre) ?
            
            panel_on_screen = the_panel;
            
        }
        
    });
    
    // Après le forEach, la variable panel_on_screen fait référence au bon élément : le dernier qui a pu valider le test dans le forEach
    
    var panel_id = panel_on_screen.id;
    console.log("Le .panel d'identifiant " + panel_id + " est à l'écran");
    
    var the_link = document.querySelector("a[href='#" + panel_id + "']");
    
    the_link.style.color = "orange"; // A modifier : il y a plus élégant...
    
    // A compléter : il faut aussi que les liens puissent revenir à la normale.
    
    // + Régler bug panneau 4 pas atteint
}

window.onscroll = scroll_handler;

