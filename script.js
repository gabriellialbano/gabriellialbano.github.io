// Defina a URL do servidor que você deseja acessar
var url = "https://gabriellialbano.github.io/contato.html";

// Faça a requisição GET utilizando a API Fetch
fetch(url)
 .then(response => response.text())
 .then(resposta => console.log(resposta));