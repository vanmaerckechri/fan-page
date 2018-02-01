var navigationLinks = document.querySelectorAll('.onglets li');

function activeDisplayActiveOnglet(cible)
{
	for (let i = 0; i < navigationLinks.length; i++)
	{
		navigationLinks[i].classList.remove('activeOnglet');
	}
	cible.classList.add('activeOnglet');
}