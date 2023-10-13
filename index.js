// sortear numero entre 0 e 1
function sortear(min,max){
    let sorteado = Math.floor(Math.random()*(max-min+1)+min); 
    return sorteado;   
}

let pontosYou = 0;
let pontosAlexa = 0;

let scoreYou = document.getElementById('scoreYou');
let scoreAlexa = document.getElementById('scoreAlexa');


let botaoPedra = document.getElementById('botaoPedra');
botaoPedra.addEventListener('click',function(){
    const items1 = ['papel','tesoura'];
    // sortear papel ou tesoura para alexa

    let indexSorteado = sortear(0,1);
    let alexaEscolha = items1[indexSorteado];

    console.log(alexaEscolha);

    if(alexaEscolha=='papel'){
        pontosAlexa += 1;
    }
    if(alexaEscolha=='tesoura'){
        pontosYou += 1;
    }

    scoreYou.innerHTML = pontosYou;
    scoreAlexa.innerHTML = pontosAlexa;
})

let botaoPapel = document.getElementById('botaoPapel');
botaoPapel.addEventListener('click',function(){
    const items2 = ['pedra','tesoura'];

    let indexSorteado = sortear(0,1);
    let alexaEscolha = items2[indexSorteado];

    console.log(alexaEscolha);

    if(alexaEscolha=='pedra'){
        // ponto pra mim
        pontosYou += 1;
    }

    if(alexaEscolha=='tesoura'){
        // ponto pra alexa
        pontosAlexa += 1;
    }
    
    scoreYou.innerHTML = pontosYou;
    scoreAlexa.innerHTML = pontosAlexa;

})

let botaoTesoura = document.getElementById('botaoTesoura');
botaoTesoura.addEventListener('click',function(){
    const items3 = ['pedra','papel'];

    let indexSorteado = sortear(0,1);
    let alexaEscolha = items3[indexSorteado];

    console.log(alexaEscolha);

    if(alexaEscolha=='pedra'){
        pontosAlexa += 1;
    }

    if(alexaEscolha=='papel'){
        pontosYou += 1;
    }

    scoreYou.innerHTML = pontosYou;
    scoreAlexa.innerHTML = pontosAlexa;

})




