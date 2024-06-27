// Defina a URL do servidor que você deseja acessar
var url = "https://gabriellialbano.github.io/contato.html";

// Defina os dados que serão enviados para o servidor
var dados = { nome: "Gabrielli", idade: 18 };

// Faça a requisição POST utilizando a API Fetch
fetch(url, {
  method: "POST",
  body: JSON.stringify(dados),
  headers: {
    "Content-Type": "application/json"
  }
})
 .then(response => response.text())
 .then(resposta => console.log(resposta));