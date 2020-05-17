console.log(" JavaScriptCarregado");

function validaCPF(cpf) {
    return false;
}

function validacao() {

    console.log("Iniciando validação com CPF"); // verificação
    var cpf = document.getElementById("cpf_digitado").value;// busca e chama a id verificando o que foi digitado e exibindo
    

    var resultadoValidacao = validaCPF(cpf);

    if (resultadoValidacao) { // ocultando o true sendo verdadeiro ou false pode usar o false
      document.getElementById('success').style.display = 'block'; // puxando o id = sucess e alterando de none para block
        
    } else {
      document.getElementById('error').style.display = 'block';
    }
}   



