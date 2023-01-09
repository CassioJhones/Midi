// função que chama codigos para dar play no POM
function tocaSomPom() {
    document.querySelector('#som_tecla_pom').play();
}

//CONSTANTE lista de teclas guardando o codigo querryALL para todas as teclas
const listaDeTeclas = document.querySelectorAll('.tecla');
listaDeTeclas[0].onclick = tocaSomPom;

















/* tecla de cada vez : jeito errado de se fazer:
demora muito e demora a amnutenção e escrita do codigo
document.querySelector('.tecla_pom').onclick = tocaSomPom;
*/


//toda funcao termina com ();
//querySelector funciona apenas com um seletor
// querySelectorAll() funciona com TODOS os elementos c
// om o seletor indicado, SENDO ideal para varios. ou listas
