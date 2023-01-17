function tocaSom (seletorAudio) {
    const elemento = document.querySelector(seletorAudio);
    
//---------- TRATAMENTO DE ERROS ----------
    if (elemento && elemento.localName === 'audio') {
        elemento.play();
    }
    else {
        console.log('Elemento não encontrado ou seletor inválido');
    }
} //---------- TRATAMENTO DE ERROS ----------

const listaDeTeclas = document.querySelectorAll('.tecla');

//VARIAVEL, CONDIÇÃO, INCREMENTO
for (let contador = 0; contador < listaDeTeclas.length; contador++) {

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`; //template string

    tecla.onclick = function () {
        tocaSom(idAudio);
    }
//---------- AO PRESSIONAR TECLA ----------
    tecla.onkeydown = function (evento) {
        if (evento.code === 'Space' || evento.code === 'Enter') {
            tecla.classList.add('ativa');
        }
    }
//---------- AO SOLTAR TECLA ----------
    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }
}
