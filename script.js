const botaoMostraPalavras = document.querySelector('#botao-palavrachave');
botaoMostraPalavras.addEventListener('click',mostraPalavrasChave);

function mostraPalavrasChave(){
    const texto = document.querySelector('entrada-de-texto').value;
    const campoResultado = document.querySelector('#resultado-palavrachave');
    const palavra = texto.split(" ");

    campoResultado.testContent = palavra.join(",");

}

function processaTexto (texto) {
    let palavra = texto.split(/\P(L)+/u);
    const frequencias = contaFrequencias(palavras);
    let ordenadas = Object.keys(frequencias).sort(ordenadaPalavra);

    function ordenadaPalavra(p1,p2){
 return frequencias [p2]- frequencias[p1];
        
    }

    console.log(ordenadas);
    return ordenadas.slice(0,10);

}

function contaFrequencias(palavras){

let frequencias = ();
for ( let i of palavras){
    frequencias [i] = 0;
    for (let j of palavras){
        if (i==j){
            frequencias [i]++;
        }
}

    return palavras;

}