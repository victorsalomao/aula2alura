function media(nota1, nota2){
    var notaMedia = nota1 + nota2;
    return notaMedia;
}

var nome = prompt("Digite o seu nome");
var nota1 = parseFloat(prompt("Digite o valor da sua nota"));
var nota2 = parseFloat(prompt("Digite o valor da sua segunda nota"));
var notaMedia = media(nota1, nota2); 

// O que foi feito aqui? 
//Criei uma função media, onde fiz a operação matemática para calcular qualquer média
//abaixo criei os prompt para armazenar cada um dos valores para a operação, logo, perguntei isso tudo pro usuário.
//o usuário me retornou as informações das notas, e o seu nome
//mais abaixo eu criei a variável notaMédia que estava atribuida o seu valor dentro da função media, que tinha como parametros de calculo as variavéis
//nota1 e nota2 para que a função acima pudesse atribuir os valores dentro dela e realizar a operação, RETORNANDO O VALOR De notaMedia.
//abaixo chamei a função e depois imprimi no console.log

media();
document.write("A media do " + nome + " é: " + notaMedia);
