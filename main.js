    // tocaSom=Play no audio
function tocaSom(idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}
const listaDeTeclas = document.querySelectorAll('.tecla');
    //FOR = { variavel ; condição; incremento }
for(let contador=0; contador < listaDeTeclas.length; contador++) {

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`; //template string

    tecla.onclick = function() {
        tocaSom(idAudio);
    };
} 
