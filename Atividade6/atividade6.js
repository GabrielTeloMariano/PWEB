function media (){
    var nome = prompt("Digite seu nome:");
    var nota1 = prompt("Digite a nota 1: ");
    var nota2 = prompt("Digite a nota 2: ");
    var nota3 = prompt("Digite a nota 3: ");
    var nota4 =prompt("Digite a nota 4: ");

    var media = (parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3) + parseFloat(nota4)) / 4;
    alert("Sua média, " + nome + ", é: " + media);
}

function operacoes(){
    var num1 = prompt("Digite o primeiro número: ");
    var num2 = prompt("Digite o segundo número: ");
    var soma = parseFloat(num1) + parseFloat(num2);
    var subtracao = parseFloat(num1) - parseFloat(num2);
    var multiplicacao = parseFloat(num1) * parseFloat(num2);
    var divisao = parseFloat(num1) / parseFloat(num2);
    var resto = parseFloat(num1) % parseFloat(num2);
    alert("A soma é: " + soma.toFixed(2));
    alert("A subtração é: " + subtracao.toFixed(2));
    alert("A multiplicação é: " + multiplicacao.toFixed(2));
    alert("A divisão é: " + divisao.toFixed(2));
    alert("O resto é: " + resto);
}