document.addEventListener("DOMContentLoaded", function() {
    const katanaSelect = document.getElementById("afficheImg");
    const imageKat = document.getElementById("imageKat");
    const nombreInput = document.getElementById("nombre");
    const ajoutRadios = document.querySelectorAll('input[name="ajout"]');
    const orderSummary = document.getElementById("orderSummary");
    const summaryText = document.getElementById("summaryText");

    // Mise à jour de l'image du katana et de l'aperçu de la commande
    katanaSelect.addEventListener("change", updateOrderSummary);
    nombreInput.addEventListener("input", updateOrderSummary);
    ajoutRadios.forEach(radio => radio.addEventListener("change", updateOrderSummary));

    function updateOrderSummary() {
        const katanaType = katanaSelect.options[katanaSelect.selectedIndex].value;
        const katanaPrice = parseInt(katanaSelect.options[katanaSelect.selectedIndex].dataset.price);
        const nombre = parseInt(nombreInput.value);
        const ajout = document.querySelector('input[name="ajout"]:checked').value;

        // Mise à jour de l'image
        switch(katanaType) {
            case "kodachi":
                imageKat.src = "images/magasin/Kodachi.jpg";
                break;
            case "uchigatana":
                imageKat.src = "images/magasin/uchigatana.jpg";
                break;
            case "nodachi":
                imageKat.src = "images/magasin/nodachi.jpg";
                break;
            default:
                imageKat.src = "images/magasin/Kodachi.jpg";
        }

        // Calculer le total
        if (!isNaN(katanaPrice) && !isNaN(nombre)) {
            const totalPrice = katanaPrice * nombre;
            const supportText = (ajout === "support") ? "avec un support" : "sans support";
            const description = `Vous avez sélectionné ${nombre} ${katanaType}(s) ${supportText}. Le prix total est de ${totalPrice}$.`;
            
            summaryText.innerText = description;
            orderSummary.style.display = "block";
        } else {
            orderSummary.style.display = "none";
        }
    }

    // Réinitialiser le formulaire
    document.getElementById("orderForm").addEventListener("reset", function() {
        orderSummary.style.display = "none";
        imageKat.src = "images/magasin/default.jpg";
    });

    // Empêcher l'envoi réel du formulaire et afficher un message de succès
    document.getElementById("orderForm").addEventListener("submit", function(event) {
        event.preventDefault();
        document.getElementById("lblMessage").style.display = "block";
        this.reset(); // Réinitialiser le formulaire après soumission
    });
});
