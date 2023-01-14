    //------ PLAY NO AUDIO ------
function tocaSom(seletorAudio) {
    document.querySelector(seletorAudio).play();
}
const listaDeTeclas = document.querySelectorAll('.tecla');
   

//------FOR = { variavel ; condição; incremento }
for(let contador=0; contador < listaDeTeclas.length; contador++) {

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`; //------TEMPLATE STRING

    tecla.onclick = function() {
        tocaSom(idAudio);
    }
    //---------- AO PRESSIONAR TECLA --------
    tecla.onkeydown = function (evento) {

        //---------- SOMENTE SE A TECLA FOR 'ESPAÇO' OU 'ENTER' --------
        if (evento.code === 'Space' || evento.code === 'Enter') {
            tecla.classList.add('ativa');
        }
    }

    //---------- AO SOLTAR TECLA ------------
    tecla.onkeyup = function(){
        tecla.classList.remove('ativa')
    }
} 
