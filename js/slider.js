

const slides = document.getElementById('slides');
const slidesInner = slides.querySelector('.slider-inner');
const imagenes = slidesInner.querySelectorAll('img');

function slide1(sliderId){
	slidesInner.querySelector(`img.imagen3`).classList.remove('img-activa');
	slidesInner.querySelector(`img.imagen1`).classList.add('img-activa');
};

function slide2(sliderId){
 	slidesInner.querySelector(`img.imagen1`).classList.remove('img-activa');
	slidesInner.querySelector(`img.imagen2`).classList.add('img-activa');
};

function slide3(sliderId){
 	slidesInner.querySelector(`img.imagen2`).classList.remove('img-activa');
 	slidesInner.querySelector(`img.imagen3`).classList.add('img-activa');
};

function mover(){
	console.log("todopeola");
 	slide1();
 	setTimeout(slide2, 5000);
 	setTimeout(slide3, 10000);
 	
};


	


setInterval(mover, 15000);
	