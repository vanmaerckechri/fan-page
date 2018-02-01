var navigationLinks = document.querySelectorAll('.onglets li a');

function activeDisplayActiveOnglet(cible)
{
	for (let i = 0; i < navigationLinks.length; i++)
	{
		navigationLinks[i].classList.remove('activeOnglet');
	}
	cible.classList.add('activeOnglet');
}