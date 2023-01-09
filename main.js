// função que chama codigos para dar play
function tocaSom(idElementoAudio) {

    document.querySelector(idElementoAudio).play();
}

//CONSTANTE lista de teclas guardando o codigo querryALL para todas as teclas
const listaDeTeclas = document.querySelectorAll('.tecla');

let contador = 0;
//loop while = enquanto
//enquanto contador for menor que 9 ele se repete.


while(contador < listaDeTeclas.length) {

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`;

    console.log('Nome da Classe: '+ instrumento);
    
    tecla.onclick = function() {
        tocaSom(idAudio);
    };
    contador++;
    
    console.log('Contagem ' + contador);
    console.log(idAudio);
} 

// string dinamica é com acento craze e com $ na parte mutavel



//classlist mostra as classes de algo

/* tecla de cada vez : jeito errado de se fazer:
demora muito e demora a amnutenção e escrita do codigo
document.querySelector('.tecla_pom').onclick = tocaSomPom;
*/


//toda funcao termina com ();
//querySelector funciona apenas com um seletor
// querySelectorAll() funciona com TODOS os elementos c
// om o seletor indicado, SENDO ideal para varios. ou listas
