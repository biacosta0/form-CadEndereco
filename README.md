# form-CadEndereco
O projeto a seguir tem como objetivo coletar, armazenar e manipular informações de endereço de usuários ou clientes. Para fazer esse projeto estamos usando de base o site https://viacep.com.br/. Nele encontramos informações e codigos para ser reutilizados.


## função de limpar consulta do form já realizada 
![consulta-do-form](img/consulta-do-form.png)    
Esse código define uma função em JavaScript chamada `limparFormulario`, que limpa (ou seja, apaga) os valores de determinados campos de um formulário HTML.
Aqui está uma explicação detalhada:
## 1. **Função `limparFormulario`**:  
  - É uma função de seta (arrow function) em JavaScript. Esse formato de função é uma sintaxe mais curta e moderna para definir funções.  
  - Não recebe parâmetros.
2. **Objetivo da Função**:  
  - A função limpa o conteúdo dos campos de um formulário HTML, definindo os valores (`value`) de determinados campos como vazios.  
3. **Acessando os Elementos do Formulário**:  
  - A função utiliza `document.getElementById()` para obter elementos do formulário pelo seu `id`. O `id` é um identificador único de um elemento HTML.  
  Exemplo: `document.getElementById('Rua')` seleciona o campo de input cujo `id` é "Rua". 
4. **Limpando os Valores**:  
  - Para cada campo selecionado, o código define o valor (`value`) como uma string vazia (`''`), o que efetivamente apaga qualquer dado inserido no campo.  
5. **Campos Alvo**:  
  - A função está configurada para limpar os campos de:  
    - **Rua** (`id='Rua'`)
    - **Bairro** (`id='bairro'`)  
    - **Cidade** (`id='Cidade'`)  
    - **Estado** (`id='Estado'`)  

   ## Este código define duas funções em JavaScript para verificar se um CEP (Código de Endereçamento Postal) é válido.  
  ![verificacao](img/verificacao.png)

 Explicação do código:  
1 Função eNumero:  
◦ Esta função verifica se a string numero passada como argumento contém apenas números.  
◦ Utiliza uma expressão regular /^[0-9]+$/ que verifica se a string é composta apenas de dígitos de 0 a 9:  
▪ ^ indica o início da string.  
▪ [0-9]+ indica que deve haver um ou mais dígitos.  
▪ $ indica o final da string.  
◦ O método .test(numero) verifica se a string numero corresponde à expressão regular.   
2 Resumo: A função retorna true se a string contiver apenas números, ou false caso contrário.  

## O código define a função `preencherFomulario`, que tem o propósito de preencher automaticamente os campos de um formulário HTML com os dados de um endereço fornecido (provavelmente obtido por meio de uma API de CEP).  

![p0reencher-campo](img/preencher-campos.png)
### Explicação:  
1. **Função `preencherFomulario`**:  
  - A função recebe um parâmetro chamado `endereco`, que é um objeto contendo informações de um endereço (como `logradouro`, `bairro`, `localidade`, e `uf`).  
  - Usando `document.getElementById()`, ela acessa os campos de input do formulário HTML pelo `id`, e então define o valor desses campos com as respectivas informações do objeto `endereco`.  
2. **Preenchimento dos Campos**:  
  - Cada linha da função acessa um campo específico do formulário e insere o valor correspondente do objeto `endereco`:  
    - `document.getElementById('rua').value = endereco.logradouro;`    
      - Define o valor do campo de **rua** com o dado `logradouro` do objeto `endereco`.  
    - `document.getElementById('bairro').value = endereco.bairro;`    
      - Define o valor do campo de **bairro** com o dado `bairro`.  
    - `document.getElementById('cidade').value = endereco.localidade;`    
      - Define o valor do campo de **cidade** com o dado `localidade`.
    - `document.getElementById('estado').value = endereco.uf;`    
      - Define o valor do campo de **estado** com o dado `uf`, que representa a unidade federativa (estado).  
3. **Origem do Objeto `endereco`**:  
  - Embora não esteja explícito no código, geralmente o objeto `endereco` é obtido a partir de uma chamada a uma API de CEP, como a API dos Correios ou uma outra base de dados que retorna informações do endereço a partir de um CEP informado pelo usuário.  

### Resumo:  
A função `preencherFomulario` pega os dados de um endereço (contidos no objeto `endereco`) e automaticamente insere esses dados nos respectivos campos de um formulário, como rua, bairro, cidade e estado. Isso torna a interação do usuário com o formulário mais ágil, evitando que ele precise digitar manualmente as informações.
tem menu de contexto