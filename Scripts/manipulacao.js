function adicao() {
    
    //Pegando valores
    let n1 = document.getElementById('numero_1').value
    let n2 = document.getElementById('numero_2').value

    //Transformando para Float
    n1 = parseFloat(n1)
    n2 = parseFloat(n2)


    //Fazendo a soma dos valores
    const soma = n1 + n2

    //setando valor na box reultados
    document.getElementById('resultado').value = soma
}

//Função de limpar os campos
function limpar() {
    document.getElementById('numero_1').value = '';
    document.getElementById('numero_2').value = '';
    document.getElementById('resultado').value = '';
}




//Conta de Subtração
function subtracao() {
    let n1 = document.getElementById('numero_1').value
    let n2 = document.getElementById('numero_2').value

    //Convertendo valor do input STRING > FLOAT
    n1 = parseFloat(n1)
    n2 = parseFloat(n2)


    //Conta sendo realizada
    const subtracao = n1 - n2


    //Pegando valor do input e setando o valor da variavel responsável de fazer a conta
    document.getElementById('resultado').value = subtracao

}

//Função de limpar os campos
function limpar() {
    document.getElementById('numero_1').value = '';
    document.getElementById('numero_2').value = '';
    document.getElementById('resultado').value = '';
}




//Conta de multiplicação
function multiplicacao() {
    let n1 = document.getElementById('numero_1').value
    let n2 = document.getElementById('numero_2').value

    //Convertendo valor do input STRING > FLOAT
    n1 = parseFloat(n1)
    n2 = parseFloat(n2)


    //Conta sendo realizada
    const multiplicacao = n1 * n2


    //Pegando valor do input e setando o valor da variavel responsável de fazer a conta
    document.getElementById('resultado').value = multiplicacao

}


//Função de limpar os campos
function limpar() {
    document.getElementById('numero_1').value = '';
    document.getElementById('numero_2').value = '';
    document.getElementById('resultado').value = '';
}





//Conta de divisão
function divisao() {
    let n1 = document.getElementById('numero_1').value
    let n2 = document.getElementById('numero_2').value

    //Convertendo valor do input STRING > FLOAT
    n1 = parseFloat(n1)
    n2 = parseFloat(n2)


    //Conta sendo realizada
    const divisao = n1 / n2


    //Pegando valor do input e setando o valor da variavel responsável de fazer a conta
    document.getElementById('resultado').value = divisao

}


//Função de limpar os campos
function limpar() {
    document.getElementById('numero_1').value = '';
    document.getElementById('numero_2').value = '';
    document.getElementById('resultado').value = '';
}


function checkBreakpoint() {
    const width = window.innerWidth;
    if (width >= 769 && width <= 992) {
      window.location.href = "https://tailwindcss.com/docs/align-content"; // Altere para o URL desejado
    }
  }

  // Verificar quando a página é carregada
  window.onload = checkBreakpoint;

  // Verificar quando a janela é redimensionada
  window.onresize = checkBreakpoint;