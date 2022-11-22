//Condição Múltipla

var agora = new Date()
var diaSem = agora.getDay()
//console.log(diaSem)

switch (diaSem) {
    case 0:
        console.log('Domingo');
        break;//Jamais esquecer o break ao fim de cada case
    case 1:
        console.log('Segunda');
        break//Jamais esquecer o break ao fim de cada case
    case 2:
        console.log('Terça');
        break//Jamais esquecer o break ao fim de cada case
    case 3:
        console.log('Quarta');
        break//Jamais esquecer o break ao fim de cada case
    case 4:
        console.log('Quinta');
        break//Jamais esquecer o break ao fim de cada case
    case 5:
        console.log('Sexta');
        break//Jamais esquecer o break ao fim de cada case
    case 6:
        console.log('Sabado');
    default:
        console.log('Error Dia invalido');
        break;//Jamais esquecer o break ao fim de cada case
}