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

      for(var i = 10; i > 1; i--){ // começando e 10 e indo ate 1
        soma += numeros.charAt(10 - i) * i; // busca posiçoes ate encontrar e retorna a posição daquela string na lista


      }

      console.log(soma);
      

      
      

      return true;
    }

}

function validacao() {

    console.log("Iniciando validação com CPF"); // verificação
    var cpf = document.getElementById("cpf_digitado").value;// busca e chama a id verificando o que foi digitado e exibindo, pegando valores da interface
    

    var resultadoValidacao = validaCPF(cpf);

    if (resultadoValidacao) { // ocultando o true sendo verdadeiro ou false pode usar o false
      document.getElementById('success').style.display = 'block'; // puxando o id = sucess e alterando de none para block
        
    } else {
      document.getElementById('error').style.display = 'block';
    }
}   



