function converterDolar() {
    var real = parseFloat(document.getElementById("real").value);
    var cotacaoDolar = 5;
    var dolar = (real * cotacaoDolar);
    document.getElementById("resultado").innerHTML = dolar;
}

function converterBitCoin() {
    var real = parseFloat(document.getElementById("real").value);
    var cotacaoBitCoin = 247000;
    var bitCoin = (real / cotacaoBitCoin);
    document.getElementById("resultado").innerHTML = bitCoin;

}
function converterEuro() {
    var real = parseFloat(document.getElementById("real").value);
    var cotacaoEuro = 6.2;
    var euro = (real * cotacaoEuro);
    document.getElementById("resultado").innerHTML = euro;

}
function conversor() {
    var valorEntrada = parseFloat(document.getElementById("entrada").value);
    var valorMoedaOrigem = document.getElementById("moedaOrigem").value;
    var valorMoedaDestino = document.getElementById("moedaDestino").value;
    /*var cotacaoEuro = 6.2;
    var cotacaoDolar = 5;
    var cotacaoBitCoin = 247000;*/
    var cotacao0rigem = null;
    var cotacaoDestino = null;
    switch (valorMoedaOrigem) {
        case "euro":
            cotacaoOrigem = 6.2;
            break;
        case "dolar":
            cotacaoOrigem = 5;
            break;
        case "bitCoin":
            cotacaoOrigem = 247000;
            break;
        case "real":
            cotacaoOrigem = 1;
            break;
    }
    switch (valorMoedaDestino) {
        case "euro":
            cotacaoDestino = 6.2;
            break;
        case "dolar":
            cotacaoDestino = 5;
            break;
        case "bitCoin":
            cotacaoDestino = 247000;
            break;
        case "real":
            cotacaoDestino = 1;
            break;
    }
    console.log(valorEntrada);
    console.log(cotacaoOrigem);
    console.log(cotacaoDestino);

    var resultado = (valorEntrada * cotacaoOrigem) / cotacaoDestino;

    if(resultado > 0.01){
        document.getElementById("resultado").innerHTML = resultado.toFixed(2);
    } else {
        document.getElementById("resultado").innerHTML = resultado;
    }

    
    
   

    // valorDigitado * moedaOrigem / moedaDestino
    // 5                   1               6.2
    // 5                   6.2     /       1

}

var button = document.getElementById("converter");
button.onclick = conversor;