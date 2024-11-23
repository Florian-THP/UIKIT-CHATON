// Ajouter un événement à toutes les images ayant la classe "copyButton"
document.querySelectorAll('.copyButton').forEach(button => {
    button.addEventListener('click', function () {
        // Récupérer la couleur du texte dans le <p> parent
        const colorValue = this.parentElement.textContent.trim().split('\n')[0]; // Extraction de la couleur

        console.log('Couleur copiée:', colorValue); // Vérification dans la console

        // Copier la couleur dans le presse-papiers
        navigator.clipboard.writeText(colorValue).then(() => {
            showNotification(colorValue); // Afficher la notification
        }).catch(err => {
            console.error('Erreur lors de la copie :', err);
        });
    });
});

// Fonction pour afficher la notification
function showNotification(message) {
    console.log("Appel de showNotification avec le message :", message);

    const notification = document.getElementById('notification');

    if (!notification) {
        console.error("L'élément notification est introuvable !");
        return;
    }

    // Mettre à jour le texte de la notification
    notification.textContent = message;

    // Rendre la notification visible
    notification.classList.remove('hidden'); // Retire "hidden"
    notification.classList.add('show'); // Ajoute "show"
    console.log("Classe 'show' ajoutée à l'élément notification.");

    // Supprimer la notification après 2 secondes
    setTimeout(() => {
        notification.classList.remove('show');
        notification.classList.add('hidden'); // Cache la notification à nouveau
        console.log("Notification cachée.");
    }, 2000);
}


// Ajouter un événement à l'image de copie du code CSS
document.querySelectorAll('.copyButtoncode').forEach(button => {
    button.addEventListener('click', function () {
        // Récupérer le contenu du bloc <pre> contenant le code CSS
        const codeContent = this.closest('.code').querySelector('pre').textContent.trim();

        // Copier le code dans le presse-papiers
        navigator.clipboard.writeText(codeContent).then(() => {
            console.log('Code copié !');
            showNotification('Code copié !'); // Afficher une notification pour le code copié
        }).catch(err => {
            console.error('Erreur lors de la copie :', err);
        });
    });
});


// Ajouter un événement au bouton de téléchargement
document.querySelector('.down').addEventListener('click', function () {
    // Récupérer l'élément image
    const logo = document.querySelector('.logo');

    // Créer un lien temporaire pour déclencher le téléchargement
    const link = document.createElement('a');

    // Définir l'URL de l'image à télécharger
    link.href = logo.src;  // L'URL de l'image
    link.download = 'logo.png';  // Nom du fichier de téléchargement

    // Ajouter le lien à la page (pas visible)
    document.body.appendChild(link);

    // Simuler un clic sur le lien pour télécharger l'image
    link.click();

    // Retirer le lien après le clic
    document.body.removeChild(link);
});
