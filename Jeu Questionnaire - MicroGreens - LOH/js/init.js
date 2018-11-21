/**
 * @module init.js
 * @author Coéquipier1
 * @author Coéquipier2
 * @copyright 2018
 */

 /**
  * @const MAX_QUESTIONS
  * @type {number}
  * @description Nombre de questions à afficher dans le quiz.
  */
const MAX_QUESTIONS = 5;

/**
  * @const NB_CHOIX_MAX
  * @type {number}
  * @description Nombre de choix par question.
  */
const NB_CHOIX_MAX = 4;

/**
  * @const POS_REPONSE
  * @type {number}
  * @description Position de l’index de la bonne réponse.
  */
const POS_REPONSE = 0;

/**
  * @global
  * @name questionCourante
  * @type {number}
  * @description Index de la question présentement affichée.
  */
var questionCourante = 0;

/**
  * @global
  * @name totalPointage
  * @type {number}
  * @description Total du pointage accumulé.
  */
var totalPointage = 0;

/**
  * @global
  * @name reponseUtilisateur
  * @type {number}
  * @description Choix de l’utilisateur.
  */
var reponseUtilisateur = 0;

/**
  * @global
  * @name tableauQuestions
  * @type {object}
  * @description Liste des questions disponibles pour le quiz.
  * @example [["Quel est le meilleur aliment pour votre santé?", 1, "https://www.google.ca" ,"Brocoli","Croustilles sans OGM","Crème glacée","Poutine déjeuner"]]
  */
var tableauQuestions = [


["Quel pourcentage de la surface de la Terre le domaine agricole occupe-il?", 3, "https://laveritesurlasante.com/micro-greens-loh/problematique.html " ,"15%","24%","38%","53%"],
["Combien de temps devons-nous attendre après la germination d’un microgreen pour le récolter?", 4, "https://www.bootstrapfarmer.com/blogs/microgreens/the-ultimate-microgreen-cheat-sheet" ,"2 semaines" ,"Entre une et 2 semaines" ,"3 semaines" ,"Entre 2 et 3 semaines"],
["Quelle molécule retrouvons-nous en plus grande variété dans les microgreens en comparaison avec leurs contreparties végétales matures?", 1, "https://www.getmomental.com/blogs/nutrition/what-are-microgreens-10-best-microgreens-and-why-your-body-craves-them-momental-nootropics " ,"Polyphénol" ,"Sel" ,"Acide aminé" ,"Glucose"],
["Quelle variété de microgreen permet de réduire les risques de maladies cardiovasculaires?", 3, "https://frmedbook.com/les-microgreens-de-chou-rouge-pourraient-reduire-le-risque-de-maladie-cardiovasculaire/" ,"Radis" ,"Basilic" ,"choux rouge" ,"Betterave"],
["Quelle(s) vitamine(s) trouvons-ont en énorme quantité dans les microgreens?", 4, "https://www.webmd.com/diet/news/20120831/tiny-microgreens-packed-nutrients#1" ,"Vitamine K" ,"Vitamine C" ,"Vitamine B" ,"Toutes ces réponses"],
["Quel pourcentage de la consommation d’eau mondiale est utilisé pour l’agriculture?", 1, "https.google.ca" ,"55%" ,"60%" ,"65%" ,"70%"],
["Quel élément n’est pas requis pour faire pousser des microgreens?", 4, "https://urbainculteurs.org/conseils-horticoles/germinations-et-pousses/ " ,"Sol riche en minéraux" ,"Graines" ,"Soleil" ,"Jardin extérieur"],
["En moyenne, combien d’argent doit être dépensé pour cultiver un pied carré de microgreens?", 2, "https://www.profitableplantsdigest.com/top-10-questions-about-growing-microgreens-for-profit/" ,"5$" ,"3$" ,"10$" ,"8$"],
["Quel pourcentage des déforestations sont causés par l’agriculture?", 2, "https://laveritesurlasante.com/micro-greens-loh/problematique.html" ,"90%" ,"80%" ,"70%" ,"60%"],
["Quelle est la concentration de vitamines dans les microgreens de choux rouge en comparaison avec leur version adulte?", 1, " http://lessourciers.com/formation-hydroponie-2/formation-microgreens/" ,"10 fois plus" ,"5 fois plus" ,"5 fois moins" ,"10 fois moins"],


];

var questionsQuiz = [

["Quel pourcentage de la surface de la Terre le domaine agricole occupe-il?", 3, "https://laveritesurlasante.com/micro-greens-loh/problematique.html " ,"15%","24%","38%","53%"],
["Combien de temps devons-nous attendre après la germination d’un microgreen pour le récolter?", 4, "https://www.bootstrapfarmer.com/blogs/microgreens/the-ultimate-microgreen-cheat-sheet" ,"2 semaines" ,"Entre une et 2 semaines" ,"3 semaines" ,"Entre 2 et 3 semaines"],
["Quelle molécule retrouvons-nous en plus grande variété dans les microgreens en comparaison avec leurs contreparties végétales matures?", 1, "https://www.getmomental.com/blogs/nutrition/what-are-microgreens-10-best-microgreens-and-why-your-body-craves-them-momental-nootropics " ,"Polyphénol" ,"Sel" ,"Acide aminé" ,"Glucose"],
["Quelle variété de microgreen permet de réduire les risques de maladies cardiovasculaires?", 3, "https://frmedbook.com/les-microgreens-de-chou-rouge-pourraient-reduire-le-risque-de-maladie-cardiovasculaire/" ,"Radis" ,"Basilic" ,"choux rouge" ,"Betterave"],
["Quelle(s) vitamine(s) trouvons-ont en énorme quantité dans les microgreens?", 4, "https://www.webmd.com/diet/news/20120831/tiny-microgreens-packed-nutrients#1" ,"Vitamine K" ,"Vitamine C" ,"Vitamine B" ,"Toutes ces réponses"],
["Quel pourcentage de la consommation d’eau mondiale est utilisé pour l’agriculture?", 1, "https.google.ca" ,"55%" ,"60%" ,"65%" ,"70%"],
["Quel élément n’est pas requis pour faire pousser des microgreens?", 4, "https://urbainculteurs.org/conseils-horticoles/germinations-et-pousses/ " ,"Sol riche en minéraux" ,"Graines" ,"Soleil" ,"Jardin extérieur"],
["En moyenne, combien d’argent doit être dépensé pour cultiver un pied carré de microgreens?", 2, "https://www.profitableplantsdigest.com/top-10-questions-about-growing-microgreens-for-profit/" ,"5$" ,"3$" ,"10$" ,"8$"],
["Quel pourcentage des déforestations sont causés par l’agriculture?", 2, "https://laveritesurlasante.com/micro-greens-loh/problematique.html" ,"90%" ,"80%" ,"70%" ,"60%"],
["Quelle est la concentration de vitamines dans les microgreens de choux rouge en comparaison avec leur version adulte?", 1, " http://lessourciers.com/formation-hydroponie-2/formation-microgreens/" ,"10 fois plus" ,"5 fois plus" ,"5 fois moins" ,"10 fois moins"],


];


function init() 
{
  document.getElementById("boutonDebuter").addEventListener("click", changeText, false);
  document.getElementById("boutonDebuter").addEventListener("click", obtenirChoix, false);
  document.getElementById("boiteChoix").addEventListener("click", questionSuivante, false);
  document.getElementById("totalQuestions").textContent = MAX_QUESTIONS;
}


window.onload = init;
