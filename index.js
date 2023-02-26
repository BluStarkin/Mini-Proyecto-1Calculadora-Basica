function calculadoraBasica() {
    var numero1 = parseFloat(document.getElementById("num1").value)
    var numero2 = parseFloat(document.getElementById("num2").value)
    var op = document.getElementById("operacion").value

    if (op === "suma") {
        document.getElementById("resultado").value = (numero1 + numero2)
    } else if (op === "resta") {
        document.getElementById("resultado").value = (numero1 - numero2)
    } else if (op === "multiplicacion") {
        document.getElementById("resultado").value = (numero1 * numero2)
    } else if (op === "division") {
        document.getElementById("resultado").value = (numero1 / numero2)
    }


}