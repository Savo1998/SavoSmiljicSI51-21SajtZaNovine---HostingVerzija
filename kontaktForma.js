

document.getElementById('idForme').addEventListener('submit', function(event) {

    var ime = document.getElementById('ime').value;
    var prezime = document.getElementById('prezime').value;
    var email = document.getElementById('email').value;
    var telefon = document.getElementById('telefon').value;
    var tekstPoruke = document.getElementById('tekstPoruke').value;
    const uspesnoPoslato = document.querySelector("#uspesnoPoslato");
    const greska = document.querySelector("#greska");

    if (ime === '' || prezime === '' || email === '' || telefon === '' || tekstPoruke === '') {
        greska.showModal(); 
        event.preventDefault();
    } else {
        uspesnoPoslato.showModal();
        event.preventDefault();
    }

});

const gotovoUspesnaPoruka = document.querySelector(".gotovo1");
const gotovoNeuspesnaPoruka = document.querySelector(".gotovo2");

gotovoUspesnaPoruka.addEventListener("click", () => {


    uspesnoPoslato.close();
    document.getElementById("idForme").reset();


});

gotovoNeuspesnaPoruka.addEventListener("click", () => {

    greska.close();

});

