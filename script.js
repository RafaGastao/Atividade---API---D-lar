fetch('https://economia.awesomeapi.com.br/json/last/USD-BRL').then(resposta => {
    return resposta.json()
}).then(economia =>{
    console.log(economia.USDBRL.bid)
    document.getElementById("valorDolar").innerHTML = "O valor atual é R$ " +  economia.USDBRL.bid
    document.getElementById("maiorValor").innerHTML = "O maior valor é R$"  +  economia.USDBRL.high
    document.getElementById("menorValor").innerHTML = "O menor valor é R$"  +  economia.USDBRL.low
})