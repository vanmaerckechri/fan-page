// var change display nav
var headerFocus = document.querySelector('header');
var mainFocus = document.querySelector('#main');
// var return top
var returnToTopContainer;
var returnToTopElement;
// var footer
var footerFocus = document.querySelector('footer');
var contactFocus = document.querySelector('#contact');
//regler le probleme en bas de page qui garde la hauteur de la page lorsqu'on en augmente la largeur
var parallaxId = document.querySelector('.parallax');
// create and insert return top
returnToTopContainer = document.createElement("button");
returnToTopContainer.className = 'button_return';
returnToTopContainer.setAttribute("aria-label", "retour haut de page");
returnToTopElement = document.createElement("i");
returnToTopElement.className = 'fa fa-arrow-up';
returnToTopContainer.appendChild(returnToTopElement);
document.body.appendChild(returnToTopContainer);
returnToTopContainer.classList.add('button_return');

function changeDisplayNav(first)
{	
	let windowHeight = window.innerHeight;
	let heightNavEvent = windowHeight / 2;
	let heightTotal = mainFocus.scrollHeight;
	let positionScrollNow = window.mainFocus.scrollTop;
	let footerBounding = footerFocus.getBoundingClientRect();

	if (positionScrollNow > heightNavEvent)
	{
		headerFocus.style.opacity = "0";
		headerFocus.style.pointerEvents = "none";
		returnToTopContainer.style.opacity = "1";
		returnToTopContainer.style.pointerEvents = "auto";
		returnToTopContainer.style.bottom = "25px";
	}
	else
	{
		headerFocus.style.opacity = "1";
		headerFocus.style.pointerEvents = "auto";
		returnToTopContainer.style.opacity = "0";
		returnToTopContainer.style.pointerEvents = "none";	
	}
	if (positionScrollNow + windowHeight > heightTotal - 10)
	{
		footerFocus.style.bottom = "0";
		contactFocus.style.marginBottom = footerBounding.height + 10 + "px";
		returnToTopContainer.style.bottom = footerBounding.height + 10 + "px";
		parallaxId.style.perspective = "none";
	}
	else
	{
		footerFocus.style.bottom = -1 * footerBounding.height+"px";
		parallaxId.style.perspective = "100px";
	}
}
// smooth scroll
function backToTop()
{
	window.mainFocus.scroll({
  	top: 0, 
  	left: 0, 
  	behavior: 'smooth' 
	});
}

// click bouton retour top
returnToTopContainer.addEventListener('click', backToTop);
// transition transparente de la nav et de la fleche retour top
window.mainFocus.addEventListener('scroll', changeDisplayNav);
window.addEventListener("resize", changeDisplayNav);

window.onload = changeDisplayNav();