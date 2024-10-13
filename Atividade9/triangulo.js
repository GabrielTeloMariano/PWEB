function triangulo() {
    var num1 = prompt("Digite o valor do lado 1");
    var num2 = prompt("Digite o valor do lado 2");
    var num3 = prompt("Digite o valor do lado 3");
    if (num1 + num2 > num3 || num1 + num3 > num2 || num2 + num3 > num1) {
        if (num1 == num2 && num2 == num3) {
            return "Sim, é um triângulo Equilátero";
        } else if (num1 == num2 || num1 == num3 || num2 == num3) {
            return "Sim, é um triângulo Isósceles";
        } else {
            return "Sim, é um triângulo Escaleno";
        }
    } else {
        return("Não, não é um triângulo");
    }
}