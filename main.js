'use strict'; //ativa o modo restrito
//Codigo para consumo API da viaCEP
//viacep.com.br/ws/01001000/json/

//Limpar consulta do form ja realizada 
const limparFormulario = () =>{ 

    document.getElementById('Rua').value = '';
    document.getElementById('bairro').value = '';
    document.getElementById('Cidade').value = '';
    document.getElementById('Estado').value = '';
}

//Verifica se o CEP é valido
const eNumero = (numero) => /^[0-9]+$/ .test(numero);// Expressão regular
//Verifica o tamanho do CEP
const cepValido = (cep) => cep.length  == 8 && eNumero (cep);

//função para preencher campos relacionados ao CEP
const preencherFomulario = (endereco) =>{
    document.getElementById('rua').value    = endereco.logradouro; //coloca o valor de logradouro da API dentro do campo logradouro do formulario
    document.getElementById('bairro').value = endereco.bairro;
    document.getElementById('cidade').value = endereco.localidade;
    document.getElementById('estado').value = endereco.uf;
}



