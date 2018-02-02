// var change display nav
var headerFocus = document.querySelector('header');
var mainFocus = document.querySelector('#main');
// var return top
var returnToTopContainer;
var returnToTopElement;
// create and insert return top
returnToTopContainer = document.createElement("button");
returnToTopContainer.className = 'button_return';
returnToTopElement = document.createElement("i");
returnToTopElement.className = 'fa fa-arrow-up';
returnToTopContainer.appendChild(returnToTopElement);
document.body.appendChild(returnToTopContainer);
returnToTopContainer.classList.add('button_return');

window.mainFocus.addEventListener('scroll', changeDisplayNav);

function changeDisplayNav()
{	
	let screenHeight = screen.height;
	let heightEvent = screenHeight / 2;
	if (window.mainFocus.scrollTop > heightEvent)
	{
		headerFocus.style.opacity = "0";
		headerFocus.style.pointerEvents = "none";
		returnToTopContainer.style.opacity = "1";
		returnToTopContainer.style.pointerEvents = "auto";
	}
	else
	{
		headerFocus.style.opacity = "1";
		headerFocus.style.pointerEvents = "auto";
		returnToTopContainer.style.opacity = "0";
		returnToTopContainer.style.pointerEvents = "none";	
	}
}
// smooth scroll
returnToTopContainer.addEventListener('click', function()
{
	window.mainFocus.scroll({
  	top: 0, 
  	left: 0, 
  	behavior: 'smooth' 
	});
});
window.onload = changeDisplayNav();