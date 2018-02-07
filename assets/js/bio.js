var toucMove = false;
(function()
{
	var d = document,
	accordionToggles = d.querySelectorAll('.js-accordion'),
	setAria,
	setAccordionAria,
	switchAccordion;
function isTouchDevice() {
    return 'ontouchstart' in document.documentElement;
}

  
 	skipClickDelay = function(e)
    {
    	if (toucMove == false)
    	{
    		switchAccordion(e);
    	}
    };

	setAriaAttr = function(el, ariaType, newProperty)
	{
		el.setAttribute(ariaType, newProperty);
	};

	setAccordionAria = function(el1, el2, expanded)
	{
		switch(expanded)
		{
	      	case "true":
		      	setAriaAttr(el1, 'aria-expanded', 'true');
		      	setAriaAttr(el2, 'aria-hidden', 'false');
		      	break;
      		case "false":
		      	setAriaAttr(el1, 'aria-expanded', 'false');
		      	setAriaAttr(el2, 'aria-hidden', 'true');
		      	break;
      		default:
				break;
		}
    };
    
	//function
	switchAccordion = function(e)
	{    
		e.preventDefault();
		var thisAnswer = e.target.parentNode.nextElementSibling;
		var thisQuestion = e.target;
		if(thisAnswer.classList.contains('is-collapsed'))
		{
			setAccordionAria(thisQuestion, thisAnswer, 'true');
		}
		else
		{
			setAccordionAria(thisQuestion, thisAnswer, 'false');
		}
	  	thisQuestion.classList.toggle('is-collapsed');
	  	thisQuestion.classList.toggle('is-expanded');
		thisAnswer.classList.toggle('is-collapsed');
		thisAnswer.classList.toggle('is-expanded');
	  	thisAnswer.classList.toggle('animateIn');
	};
	for (var i = 0, len = accordionToggles.length; i < len; i++)
	{
		if(isTouchDevice())
		{
      		accordionToggles[i].addEventListener('touchend', skipClickDelay, false);
    	}
    	else
    	{
    		accordionToggles[i].addEventListener('click', switchAccordion, false);
    	}
  	}
})();

function detectTouchmove()
{
 toucMove = true;
}
function detectTouchmoveEnd()
{
 toucMove = false;
}

document.addEventListener('touchmove', detectTouchmove, false)
document.addEventListener('touchend', detectTouchmoveEnd, false)