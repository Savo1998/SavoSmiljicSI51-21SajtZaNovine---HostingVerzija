const slajdovi = document.querySelectorAll(".slajdovi img");
let slajdIndeks = 0;
let intervalID = null;

//inicijalizacijaSlajdera();
document.addEventListener("DOMContentLoaded", inicijalizacijaSlajdera);

function inicijalizacijaSlajdera() {

  if(slajdovi.length > 0){
    slajdovi[slajdIndeks].classList.add("prezentujSlajd");
    intervalID = setInterval(sledeciSlajd, 5000);
  }
}

function pokaziSlajd(index){

  if(index >= slajdovi.length){
    slajdIndeks = 0;
  }
  else if(index < 0 ){
    slajdIndeks = slajdovi.length - 1;
  }

  slajdovi.forEach(slajd => {
    slajd.classList.remove("prezentujSlajd");
  });
  slajdovi[slajdIndeks].classList.add("prezentujSlajd");
}

function prethodniSlajd() {
  clearInterval(intervalID);
  slajdIndeks--;
  pokaziSlajd(slajdIndeks);
}

function sledeciSlajd() {
  slajdIndeks++;
  pokaziSlajd(slajdIndeks);
}