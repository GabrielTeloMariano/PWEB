function media (){
    var nome = prompt("Digite seu nome:");
    var nota1 = parseFloat(prompt("Digite a nota 1: "));
    var nota2 = parseFloat(prompt("Digite a nota 2: "));
    var nota3 = parseFloat(prompt("Digite a nota 3: "));
    var nota4 = parseFloat(prompt("Digite a nota 4: "));

    var media = (nota1 + nota2 + nota3 + nota4) / 4;
    alert("Sua média, " + nome + ", é: " + media);
}

function operacoes(){
    var num1 = parseFloat(prompt("Digite o primeiro número: "));
    var num2 = parseFloat(prompt("Digite o segundo número: "));
    var soma = num1 + num2;
    var subtracao = num1 - num2;
    var multiplicacao = num1 * num2;
    var divisao = num1 / num2;
    var resto = num1 % num2;
    alert("A soma é: " + soma.toFixed(2));
    alert("A subtração é: " + subtracao.toFixed(2));
    alert("A multiplicação é: " + multiplicacao.toFixed(2));
    alert("A divisão é: " + divisao.toFixed(2));
    alert("O resto é: " + resto);
}