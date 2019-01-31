class Task {
	constructor() {
		console.log('hey');
	}
}



var  task = new Task();
var prev, next, imgs, counter; 


prev = document.querySelector('.left');
next = document.querySelector('.right');
imgs = document.querySelectorAll('.photos img');
counter = 0;

next.onclick = function()
{
	imgs[counter].classList.remove('active');
	counter++;

	if(counter == imgs.length)
	{
		counter = 0;
	}
	imgs[counter].classList = 'active';
}

prev.onclick = function()
{
	imgs[counter].classList.remove('active');
	counter--;

	if(counter < 0)
	{
		counter = imgs.length -1;
	}
	imgs[counter].classList = 'active';
}

