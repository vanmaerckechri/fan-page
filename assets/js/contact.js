var prenomId = document.querySelector('#prenom');
var warning_prenomId = document.querySelector('#warning_prenom');
var nomId = document.querySelector('#nom');
var warning_nomId = document.querySelector('#warning_nom');
var mailId = document.querySelector('#mail');
var warning_mailId = document.querySelector('#warning_mail');
var textAreaId = document.querySelector('#textarea');
var warning_textAreaId = document.querySelector('#warning_textArea');
var warning_validationId = document.querySelector('#warning_validation');
var sendContactId = document.querySelector('#sendContact');

function checkIfOnlyLetters(input)
{
	let inputCaracNumber = input.length;
	for (let i = 0; i < inputCaracNumber; i++)
	{
		if (input[i] != input[i].match(/^[A-Za-z]+$/) || inputCaracNumber < 3)//si l'input n'est pas composé uniquement de lettres ou qu'il est composé de moins de trois lettres...
		{
			return false;
		}
	}
	if (inputCaracNumber == 0)
	{
		return false;
	}
	else
	{
		return true;
	}
}

function checkMail(input)
{
	let mailTest = /^(?:[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/;
	if (mailTest.test(input) == true)//s'il s'agit d'une adresse mail valide...
	{
		return true;
	}
	else
	{
		return false;
	}
}

function checkTextArea(input)
{
	let inputCaracNumber = input.length;
	for (let i = 0; i < inputCaracNumber; i++)
	{
		if (input[i] == "<" || input[i] == ">" || input[i] == ";" || input[i] == "\"" || input[i] == "\'" || inputCaracNumber < 5)//si l'input est composé de < > ; " ' ce qui permet des injections... ou qu'il y a moins de 5 caractères...
		{
			return false;
		}
	}
	if (inputCaracNumber == 0)
	{
		return false;
	}
	else
	{
		return true;
	}
}

function displayWarnings(firstName, lastName, mail, textArea)
{
	if (firstName == false)
	{
		warning_prenomId.innerHTML = "Prénom Invalide! Celui-ci doit être composé d'au moins 3 LETTRES...";
		warning_prenomId.style.color = "red";
		prenomId.style.border = '4px solid red';
	}
	else
	{
		warning_prenomId.innerHTML = "";
		prenomId.style.border = '4px solid green';
	}
	if (lastName == false)
	{
		warning_nomId.innerHTML = "Nom Invalide! Celui-ci doit être composé d'au moins 3 LETTRES...";
		warning_nomId.style.color = "red";
		nomId.style.border = '4px solid red';
	}
	else
	{
		warning_nomId.innerHTML = "";
		nomId.style.border = '4px solid green';
	}
	if (mail == false)
	{
		warning_mailId.innerHTML = "Mail invalide!";
		warning_mailId.style.color = "red";
		mailId.style.border = '4px solid red';
	}
	else
	{
		warning_mailId.innerHTML = "";
		mailId.style.border = '4px solid green';
	}
	if (textArea == false)
	{
		warning_textAreaId.innerHTML = "Cette zone de texte doit contenir au moins 5 caractères et n'accepte pas les symboles suivants: < > ; ' \"";
		warning_textAreaId.style.color = "red";
		textAreaId.style.border = '4px solid red';
	}
	else
	{
		warning_textAreaId.innerHTML = "";
		textAreaId.style.border = '4px solid green';
	}
	if (firstName == true && lastName == true && mail == true && textArea == true)//si le formulaire est correct on envoit en back et on nettoie le reinitialise
	{
		warning_prenomId.innerHTML = "";
		warning_nomId.innerHTML = "";
		warning_mailId.innerHTML = "";
		warning_textAreaId.innerHTML = "";
		prenomId.value = "";
		nomId.value = "";
		mailId.value = "";
		textAreaId.value = "";
		prenomId.style.border = 'none';
		nomId.style.border = 'none';
		mailId.style.border = 'none';
		textAreaId.style.border = 'none';
		warning_validationId.innerHTML = " | Merci, votre message nous a bien été envoyé.";
;		warning_validationId.style.color = "green";
		let validationContactWarning = setTimeout(function()
		{
			warning_validationId.innerHTML = "";
			clearTimeout(validationContactWarning);
		}, 5000);
	}
}

sendContactId.addEventListener('click', function(event)
{
	event.preventDefault();
	let firstName = checkIfOnlyLetters(prenomId.value);
	let lastName = checkIfOnlyLetters(nomId.value);
	let mail = checkMail(mailId.value);
	let textArea = checkTextArea(textAreaId.value);
	displayWarnings(firstName, lastName, mail, textArea);
}, false);