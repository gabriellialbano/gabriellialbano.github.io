// Defina a URL do servidor que você deseja acessar
var url = "https://gabriellialbano.github.io/contato";

// Defina os dados que serão enviados para o servidor
var dados = {
  nome: "Gabrielli Cristina Albano",
  email: "gabriellialbano@email.com",
  mensagem: "Olá, gostaria de entrar em contato com você!"
};

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