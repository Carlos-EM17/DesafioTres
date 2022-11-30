//Var/cons

const buttonA = document.querySelector('#buttonA');
const buttonB = document.querySelector('#buttonB');
const buttonZ = document.querySelector('#buttonZ');
const buttonY = document.querySelector('#buttonY');
const buttonX = document.querySelector('#buttonX');

const paragraph1 = document.querySelector('#Resposta1');
const paragraph2 = document.querySelector('#Resposta2');
const paragraph3 = document.querySelector('#Resposta3');
const paragraph4 = document.querySelector('#Resposta4');
var tecnologia;

//Event

buttonA.addEventListener('click', respostaFront);
buttonB.addEventListener('click', respostaBack);
buttonZ.addEventListener('click', respostaFull);
buttonY.addEventListener('click', respostaProf);
buttonX.addEventListener('click', respostaTec);

//Function's

function respostaFront() {
    if (buttonA.id === 'buttonA') {
        paragraph1.textContent = 'Legal! Você pode aprender React ou aprender Vue!';
    } 
}

function respostaBack() {
    if (buttonB.id === 'buttonB'){
        paragraph1.textContent = 'Legal! Você pode aprender C# ou Java!';
    }

}

function respostaFull() {
    if (buttonZ.id === 'buttonZ') {
        paragraph2.textContent = 'Top! Fullstack é divertido porém puxado... Não dessista NUNCA!!';
    } 
}

function respostaProf() {
    if (buttonY.id === 'buttonY'){
        paragraph2.textContent = 'Demais! Profissionalizar é muito bom mas o caminho não é facil... Nunca dessista!!';
    }

}

function respostaTec () {
    
    if(buttonX.id === 'buttonX'){
        tecnologia = prompt ("Quais são as tecnologias?");
        paragraph3.textContent = tecnologia + " São tecnologias bem legais espero que alcance seus objetivos"
        paragraph4.textContent = 'Obrigado por participar dessa pesquisa, se esforce ao maximo que você chega longe'
    }
}
