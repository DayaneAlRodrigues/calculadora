function calculadora(){
    const operacao = Number(prompt('Escolha uma operação:\n 1 - Soma (+) \n 2 - subtração (-) \n 3 - Multiplicação (*) \n 4 - Divisão Real (/) \n 5 - Divisao Inteira (%) \n 6 - Potenciação (**)'));

    if (!operacao || operacao >= 7){
        alert('Erro - Operação inválida!');
        calculadora();
    } else {
        let numero1 = Number(prompt('Digite um primeiro número:'));
        let numero2 = Number(prompt('Digite o segundo número: '));
        let resultado;

        if (!numero1 || !numero2){
            alert('Erro - operação inválida');
            calculadora();
        } else {

            function soma (){
                resultado = numero1 + numero2;
                alert(`${numero1} + ${numero2} = ${resultado}`);
                novaOperacao();
            }

            function subtracao (){
                resultado = numero1 - numero2;
                alert(`${numero1} - ${numero2} = ${resultado}`);
                novaOperacao();
            }
            function multiplica (){
                resultado = numero1 * numero2;
                alert(`${numero1} * ${numero2} = ${resultado}`);
                novaOperacao();
            }
            function divideReal (){
                resultado = numero1 / numero2;
                alert(`${numero1} / ${numero2} = ${resultado}`);
                novaOperacao();
            }
            function divideInteiro (){
                resultado = numero1 % numero2;
                alert(` O resto da divisão de ${numero1} e ${numero2} é igual a ${resultado}`);
                novaOperacao();
            }
            function potencia (){
                resultado = numero1 ** numero2;
                alert(`O numero ${numero1} elevado ao  ${numero2} é igual a ${resultado}`);
                novaOperacao();
            }
            function novaOperacao () {
                let opcao = prompt ('Deseja fazer uma nova operação \n 1 - Sim \n 2 - Não');

                if (opcao == 1) {
                    calculadora();
                }else if ( opcao == 2){
                    alert('Até mais!');
                }else {
                    aler('Digite uma opção válida!');
                    novaOperacao();
                }
            }
           
            switch (operacao){
                case 1:
                    soma();
                    break;
                case 2:
                    subtracao();
                    break;
                case 3:
                    multiplica();
                    break;
                case 4: 
                    divideReal();
                    break;
                case 5:
                    divideInteiro();
                    break;
                case 6:
                    potencia();
                    break;
            }
        }
    }
}
calculadora();