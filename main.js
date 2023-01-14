    //------ PLAY NO AUDIO ------
function tocaSom(idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}
const listaDeTeclas = document.querySelectorAll('.tecla');
    //------FOR = { variavel ; condição; incremento }

for(let contador=0; contador < listaDeTeclas.length; contador++) {

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`; //------TEMPLATE STRING

    tecla.onclick = function() {
        tocaSom(idAudio);
    };
    //---------- AO PRESSIONAR BOTAO --------
    tecla.onkeydown = function () {
        tecla.classList.add('ativa');
    }
    //---------- AO SOLTAR BOTAO ------------
    tecla.onkeyup = function(){
        tecla.classList.remove('ativa')
    }
} 
