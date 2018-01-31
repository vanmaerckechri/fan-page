var carouselId = document.querySelector("#carousel_img");
var carouselNext = document.querySelector('#next');
var carouselPrevious = document.querySelector('#previous');
var carouselPositionId = document.querySelector('#carouselPosition');
var imgNumber = 11;
var images = [];
var carouselIndex = 0;
var carouselTempo;
var delayAfterManualCarousel;

function preloadImg()
{
	for (let i = 0; i < imgNumber; i++)
	{
		let image = new Image();
		if (i < 9)
		{
			image.src = "assets/img/0"+(i+1)+".jpg";
		}
		else
		{
			image.src = "assets/img/"+(i+1)+".jpg";
		}
		images[i] = image;
	}
}

function displayIndex()
{
	let imgIndexSmallThanTen;
	let imgNumberSmallThanTen;
	imgIndexSmallThanTen = carouselIndex < 9 ? "0" : "";
	imgNumberSmallThanTen = imgNumber < 10 ? "0" : "";
	carouselPositionId.innerHTML = imgIndexSmallThanTen+(carouselIndex + 1)+"/"+imgNumberSmallThanTen+imgNumber;
}

function loadNextImg()
{
	clearTimeout(delayAfterManualCarousel);
	if (carouselIndex < imgNumber - 1)
	{
		carouselIndex++;
	}
	else
	{
		carouselIndex = 0;
	}
	carouselId.src = images[carouselIndex].src;
	displayIndex();
}

function loadPreviousImg()
{
	clearTimeout(delayAfterManualCarousel);
	if (carouselIndex > 0)
	{
		carouselIndex--;
	}
	else
	{
		carouselIndex = imgNumber - 1;
	}
	carouselId.src = images[carouselIndex].src;
	displayIndex();
}

function callNextImg()
{
	clearInterval(carouselTempo);
	loadNextImg();
	delayAfterManualCarousel = setTimeout(launchAutoCarousel, 5000)
}
function callPreviousImg()
{
	clearInterval(carouselTempo);
	loadPreviousImg();
	delayAfterManualCarousel = setTimeout(launchAutoCarousel, 5000)
}

function launchAutoCarousel()
{
	carouselTempo = setInterval(loadNextImg, 3000);
}

preloadImg();
launchAutoCarousel();
displayIndex();
carouselNext.addEventListener('click', callNextImg, false);
carouselPrevious.addEventListener('click', callPreviousImg, false);