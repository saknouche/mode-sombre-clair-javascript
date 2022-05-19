//1.Sélectionner les éléments
let button = document.querySelector('#mode');
let span = document.querySelector('span');
// console.log(btn, span);

//2.ajouter un event au clic et Vérifier si localStorage existe
button.addEventListener('click', () => {
    if(document.body.classList.contains('dark')){
        //mode clair
        document.body.className = '';
        span.textContent = 'Thème sombre';
        localStorage.setItem('theme', 'clair');
    }else{
        //mode sombre
        modeSombre();
    }
});
function modeSombre(){
    document.body.className = 'dark';
    span.textContent = 'Thème clair';
    localStorage.setItem('theme', 'sombre');
}

if(localStorage.getItem('theme')){
    if(localStorage.getItem('theme') == 'sombre'){
        modeSombre();
    }
}