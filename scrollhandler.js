var panels = document.querySelectorAll(".panel");
//console.log(panels);

var the_link; // A chaque scroll, cette variable globale sera mise à jour : elle fera alors référence au dernier lien ayant pris la couleur orange

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
    
    /*
    
    Compléter cette fonctionnalité :
    Avant que la couleur du bon lien soit changée, il faudrait s'assurer que tous les liens correspondant à un .panel perdent leur modification de couleur. On peut considérer cela comme une "remise à zero" de l'état des liens, à faire à chaque scroll (donc dans cette fonction scroll_handler). Pour être sûr d'agir sur chaque lien possiblement concerné, on peut profiter du passage en revue des .panel (depuis un .panel on peut retrouver le lien correspondant, voir plus bas).
    
    */
    
    var panel_on_screen;
    
    panels.forEach(function(the_panel){
        // forEach a besoin, comme paramètre, d'une fonction. Celle-ci s'exécutera à chaque itération (passage) de la boucle. Si on donne à cette fonction au moins un paramètre, celui-ci deviendra, dans la fonction, une manière d'accéder à l'élément concerné par l'itération.
        
        //console.log(the_panel.offsetTop);
        
        if (window.scrollY >= the_panel.offsetTop) {
            // A-t-on scrollé au moins jusqu'à avoir the_panel calé en haut de la fenêtre (ou jusqu'à ce qu'il ait dépassé le haut de fenêtre) ?
            
            panel_on_screen = the_panel;
            
        }
        
        // Correction Bug :
        
        // 1) Désigner ici le lien correspondant à ce panneau
        // 2) Le lien peut, d'office, perdre sa stylisation de couleur (donner "" au lieu de "orange")
        
/* Solution 1 :
        var link_to_deactivate = document.querySelector("a[href='#" + the_panel.id + "']");
        link_to_deactivate.style.color = "";*/
        
        /* Solution 2 (à condition d'avoir déclaré the_link de manière globale) */
        if (the_link) { // Permet de tester si the_link n'est pas undefined (et d'éviter un bug), ce qui sera le cas lors du tout premier scroll car une valeur n'est donnée que plus bas dans cette fonction
            the_link.style.color = "";
        }
        
    });
    
    // Après le forEach, la variable panel_on_screen fait référence au bon élément : le dernier qui a pu valider le test dans le forEach
    
    var panel_id = panel_on_screen.id;
    console.log("Le .panel d'identifiant " + panel_id + " est à l'écran");
    
    the_link = document.querySelector("a[href='#" + panel_id + "']");
    
    the_link.style.color = "orange"; // A modifier : il y a plus élégant...
    
    // A compléter : il faut aussi que les liens puissent revenir à la normale.
    
    // + Régler bug panneau 4 pas atteint
}

window.onscroll = scroll_handler;

