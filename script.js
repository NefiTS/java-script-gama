console.log(" JavaScriptCarregado");

function validaCPF(cpf) { // encapsulando e esperando um texto digitado
    
  if(cpf.length != 11) { // length infroma quantos caracteres ele tem, sendo 11 digitados nem menos e nem mais
    return false;
      
  } else {

    var numeros = cpf.substring(0, 9); // substring a partir de um ponto inicial e final retorna somente o que foi pedido
    var digitos = cpf.substring(9); // mostra os dois ultimos digitos do cpf

    //console.log("numeros do cpf " + numeros);
    //console.log("digito do cpf " + digitos);

    var soma = 0; // var de incremento

      for(var i = 10; i > 1; i--) { // começando e 10 e indo ate 1
        soma += numeros.charAt(10 - i) * i; // busca posiçoes ate encontrar e retorna a posição daquela string na lista
      }

      console.log(soma);

      return true;
      

      var resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11); // % mod e a sobra da divisão
                       //executando operação, caso positivo executar logo apos o sinal de interregação ate os dois pontos
                       // se resultar em  zero vai por dentro da var resultado
                       // se for 3 ou 4 vai ultilizar o que vem depois dos dois pontos  
                       // Operador ternário, unico que possui 3 operandos

      //validação do primeiro digito                 
      if (resultado != digitos.charAt(0)) {

        return false;
      }

      soma = 0; // resetando a var soma

        numeros = cpf.substring(0, 10); // pegando do primeiro caractere ate o primeiro digito verificador

        for(var k = 11; k > 1; k--){

          soma += numeros.charAt(11 - k) * k;

        }

        //validação do segundo digito

        resultado = soma % 11 > 2 ? 0 : 11 - (soma % 11);

        if (resultado != digitos.charAt(1)){

          return false;
        }
        

        //console.log(digitos.toString().charAt(0) + " e a primeira posição da var soma"); // toString faz a conveção para string
      
      return true;
    }

}

function validacao() {

    console.log("Iniciando validação com CPF"); // verificação

    document.getElementById('success').style.display = 'none'; // zerando as mensagens exibidas sendo valido ou invalido
    document.getElementById('error').style.display = 'none';

    var cpf = document.getElementById("cpf_digitado").value;// busca e chama a id verificando o que foi digitado e exibindo, pegando valores da interface
    

    var resultadoValidacao = validaCPF(cpf);

    if (resultadoValidacao) { // ocultando o true sendo verdadeiro ou false pode usar o false
      document.getElementById('success').style.display = 'block'; // puxando o id = sucess e alterando de none para block
        
    } else {
      document.getElementById('error').style.display = 'block';
    }
}   



