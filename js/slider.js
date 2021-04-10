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
 	slide1();
 	setTimeout(slide2, 5000);
 	setTimeout(slide3, 10000);
};

setInterval(mover, 15000);


document.querySelector(`.hamb`).onclick = function navActivo(){
	document.querySelector(`nav`).classList.toggle('activa');
	document.querySelector(`.hamb i`).classList.toggle('fa-bars');
	document.querySelector(`.hamb i`).classList.toggle('fa-times-circle');
}	



function onHref(){
	document.querySelector(`nav`).classList.remove('activa');
	document.querySelector(`.hamb i`).classList.remove('fa-times-circle');
	document.querySelector(`.hamb i`).classList.add('fa-bars');
}

document.getElementById(`nav1`).addEventListener("click", onHref);
document.getElementById(`nav2`).addEventListener("click", onHref);
document.getElementById(`nav3`).addEventListener("click", onHref);
document.getElementById(`nav4`).addEventListener("click", onHref);
document.getElementById(`nav5`).addEventListener("click", onHref);
