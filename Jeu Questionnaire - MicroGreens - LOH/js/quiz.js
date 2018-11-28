/**
 * @module quiz.js
 * @author Louis-Étienne Simard
 * @author Hubert Desrochers
 * @copyright 2018
 */

function determinerChoixUtilisateur1()
{
	reponseUtilisateur = 1;
}
function determinerChoixUtilisateur2()
{
	reponseUtilisateur = 2;
}
function determinerChoixUtilisateur3()
{
	reponseUtilisateur = 3;
}
function determinerChoixUtilisateur4()
{
	reponseUtilisateur = 4;
}

function validerQuestion(determinerChoixUtilisateur1, determinerChoixUtilisateur2, determinerChoixUtilisateur3, determinerChoixUtilisateur4)
{
	if(reponseUtilisateur !== questionsQuiz[questionCourante - 1][1])
	{
		window.prompt("Mauvaise réponse");
	}
	else
	{
		window.prompt("Bonne Réponse")
		ajouterPoint();
	}

}



/**
 * @name ajouterPoint
 * @description Ajoute un point au total des points.
 */
function ajouterPoint()
{
	document.getElementById("totalPoints").textContent = totalPointage + 1;
}

/**
 * @name obtenirPointage
 * @description Obtiens le pointage total accumulé.
 * @returns Le pointage total
 */
function obtenirPointage()
{

}

/**
 * @name estFinPartie
 * @description Vérifie si l'on a atteint la fin de la partie.
 * @param {*} questionCourante Index de la question courante
 * @returns true si l'index de la question courrante est égal au nombre maximum de questions, sinon faux
 */
function estFinPartie(questionCourante)
{
	var finPartie = true;

	if (questionCourante < (MAX_QUESTIONS - 1))
	{
		finPartie = false;
	}
	return finPartie;
	
}

/**
 * @name chargerQuestionSuivante
 * @description Incrémente l'index indiquant la question courante.
 */

function chargerQuestion()
	{
		document.getElementById("texteQuestion").textContent = questionsQuiz[0][0];
		document.getElementById("boitesChoix").style.display = "block";
	}

function questionSuivante()
{
	if (questionCourante < (MAX_QUESTIONS - 1))
	{
		questionCourante ++;
		document.getElementById("texteQuestion").textContent = questionsQuiz[questionCourante][0];
		document.getElementById("noQuestionCourante").textContent = (questionCourante + 1);
	}
}
/**
 * @name obtenirBonneReponse
 * @description Incrémente l'index indiquant la question courante.
 * @param {*} noQuestion L'index de la question
 * @returns retourne la bonne réponse
 */
function obtenirBonneReponse(noQuestion)
{
	//ajouter votre code ici
}

/**
 * @name obtenirChoix
 * @description Obtiens les choix de réponse pour une question donnée.
 * @param {*} noQuestion Index de la question pour laquelle il faut obtenir les choix de réponse.
 * @returns retourne un tableau contenant les choix de la question
 */
function obtenirChoix(noQuestion)
{
	//ajouter votre code ici
}
function changeTexteChoix()
{
	document.getElementById("btnChoix1").textContent = questionsQuiz[0][3];
	document.getElementById("btnChoix2").textContent = questionsQuiz[0][4];
	document.getElementById("btnChoix3").textContent = questionsQuiz[0][5];
	document.getElementById("btnChoix4").textContent = questionsQuiz[0][6];
}

function majTexteChoix()
{
	document.getElementById("btnChoix1").textContent = questionsQuiz[questionCourante][3];
	document.getElementById("btnChoix2").textContent = questionsQuiz[questionCourante][4];
	document.getElementById("btnChoix3").textContent = questionsQuiz[questionCourante][5];
	document.getElementById("btnChoix4").textContent = questionsQuiz[questionCourante][6];
}

/**
 * @name afficherBonneReponse
 * @description Modifie la fenêtre modale pour afficher la bonne réponse pour une question donnée.
 * @param {*} noQuestion Index de la question pour laquelle il faut afficher la bonne réponse.
 */
function afficherBonneReponse()
{
	
}

function afficherMauvaiseReponse()
{
	
}

/**
 * @name majPointage
 * @description Mets à jour le total des points accumulés dans l'interface.
 */
function majPointage()
{
	//ajouter votre code ici
}



/**
 * @name majTexteQuestion
 * @description Modifie l'interface en affichant une question.
 * @param {*} noQuestion Index de la question qu'il faut afficher.
 */
function majTexteQuestion(noQuestion)
{
	//ajouter votre code ici

	$('#texteQuestion').removeClass('animated bounceInLeft delay-1s');
	$('#texteQuestion').removeClass('animated wobble delay-2s');
	$('#texteQuestion').addClass('animated bounceInLeft delay-1s');
}



/**
 * @name remiseAZeroBoutons
 * @description Modifie l'interface en remettant à l'état initial les boutons de réponse.
 */
function remiseAZeroBoutons()
{
	//ajouter votre code ici
}

/**
 * @name majProgression
 * @description Modifie l'interface en ajustant la barre de progression.
 */
function majProgression()
{
	//ajouter votre code ici
}

/**
 * @name majInterface
 * @description Modifie l'interface en changeant la question, les choix de réponses, en mettant à jour le pointage, la barre de progression et le numéro de la question courante et en remettant à zéro les boutons.
 */
function majInterface()
{
	//ajouter votre code ici
}

/**
 * @name selectionnerChoix
 * @description Modifie l'interface pour changer l'apparence du bouton cliqué et activer le bouton Valider.
 * @param {*} noChoix Numéro du choix de réponse sélectionné.
 */
function selectionnerChoix(noChoix)
{
	//ajouter votre code ici
}

/**
 * @name afficherBoiteFinDeJeu
 * @description Modifie l'interface pour afficher la boîte de résumé et cacher la boîte de question.
 */
function afficherBoiteFinDeJeu()
{
	//ajouter votre code ici
}
