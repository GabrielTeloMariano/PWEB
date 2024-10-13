function crescente() {
    var num1 = parseInt(prompt("Digite o 1o número:"));
    var num2 = parseInt(prompt("Digite o 2o número:"));
    var num3 = parseInt(prompt("Digite o 3o número:"));
    
    var ordemCrescente = [num1, num2, num3];
    
    ordemCrescente.sort(function(a, b) {
        return a - b;
    });

    return "A ordem crescente é: " + ordemCrescente.join(", ");
}
