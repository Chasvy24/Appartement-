# Appartement Diabat

Application mobile de suivi de la location de l'appartement de Diabat (près d'Essaouira) : réservations, dépenses, résultats mensuels en MAD et CHF, calendrier, tâches, exports CSV, Excel et PDF.

## Mettre l'application en ligne avec GitHub Pages

1. Sur GitHub, créez un nouveau dépôt (ici : `Appartement-`).
2. Dans le dépôt : **Add file → Upload files**, puis déposez tous les fichiers de ce dossier (`index.html`, `manifest.webmanifest`, `sw.js`, `apple-touch-icon.png`, `icon-192.png`, `icon-512.png`, `icon-maskable-512.png`, `README.md`). Validez avec **Commit changes**.
3. **Settings → Pages** : dans *Build and deployment*, choisissez *Deploy from a branch*, branche `main`, dossier `/ (root)`, puis **Save**.
4. Après une ou deux minutes, l'adresse s'affiche en haut de la page Pages, ici `https://chasvy24.github.io/Appartement-/`.

## L'installer sur l'iPhone

1. Ouvrez l'adresse dans **Safari**.
2. Touchez **Partager**, puis **Sur l'écran d'accueil**, puis **Ajouter**.
3. L'icône **Diabat** apparaît à côté de celle du planning.

## Où sont les données ?

- Dans l'application installée, les données restent **sur le téléphone** : rien n'est envoyé sur GitHub ni sur internet.
- Le dépôt GitHub ne contient que l'application, jamais vos réservations ni vos dépenses.
- Supprimer l'icône de l'écran d'accueil efface les données : faites régulièrement **Réglages → Exporter une sauvegarde**, puis « Enregistrer dans Fichiers » (iCloud Drive).

## Reprendre les données de la version en ligne (claude.ai)

1. Dans la version en ligne : **Réglages → Exporter une sauvegarde**, enregistrez le fichier dans Fichiers.
2. Dans l'application installée : **Réglages → Réimporter une sauvegarde**, choisissez ce fichier.

## Mettre à jour l'application

Remplacez `index.html` et `sw.js` dans le dépôt par les nouvelles versions (**Add file → Upload files**). Vos données sur le téléphone ne sont pas touchées.

## Avec le planning

Cette application doit avoir **son propre dépôt** (pas un dossier du dépôt Planning) : chaque application garde ainsi sa propre copie hors connexion. Les données des deux applications restent séparées.
