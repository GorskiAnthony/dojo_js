const app = document.getElementById('app');
const colors = ['red', 'yellow', 'green', 'blue', 'black'];
let picker = '';
const canvasSize =  11;

/**
 *
 * Etape 1 
 *
 * afficher la palette de couleurs
 * Le type est une fonction
 * doc : https://developer.mozilla.org/fr/docs/Web/API/Document/createElement
 * - Un create element pour créer la palette
 * doc : https://developer.mozilla.org/fr/docs/Web/API/HTMLStyleElement
 * - un style display flex pour l'avoir sur 1 ligne
 * - Boucle sur le tableau -> create element
 * - Une fonction qui va écouter le clique quand je selectionne une couleur
 * doc : https://developer.mozilla.org/fr/docs/Web/API/Node/appendChild
 * - rajouter ma couleur à la div
 * - je rajoute la div à l'app
 *
 *
 * Etape 2 
 *
 * - Créer la grille container
 * - Créer un tableau à 2 dimensions (x, y) qui aura la taille de canvasSize.
 * - On rajoute les evenements sur chaque cellule du tableau.
 * - On rajoute les cellules à la ligne
 * - On ajoute la ligne à notre table
 * - On ajoute notre table à notre app
 *
 * Etape 3
 *
 * - Création d'un bouton pour réinitialiser le canva
 *
 */
