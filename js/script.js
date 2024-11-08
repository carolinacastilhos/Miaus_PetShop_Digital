function logar() {
  let login = document.getElementById("emailLogin").value;
  let senha = document.getElementById("senhaLogin").value;

  if (login == "admin123" && senha == "admin123") {
    alert(
      "Login realizado com sucesso! Você receberá um e-mail de confirmação."
    );
    location.href = "/index.html";
  } else {
    alert("Usuário ou senha incorretos.");
  }
}

const searchInput = document.getElementById("search"); // Campo de pesquisa
const productItems = document.querySelectorAll(".product-item"); // Todos os itens de produto
const searchButton = document.querySelector(".btnPesquisar"); // Botão de pesquisa
const noResultsMessage = document.getElementById("noResultsMessage"); // Mensagem de "não encontrado"

// Função de busca
function searchProducts(event) {
  event.preventDefault(); // Impede o comportamento padrão do botão dentro do formulário

  const searchTerm = searchInput.value.toLowerCase();
  let hasResults = false;

  productItems.forEach((item) => {
    const productName = item.dataset.productName.toLowerCase(); // Usando data-product-name

    // Verifica se o termo de busca está no nome do produto
    if (productName.includes(searchTerm)) {
      item.style.display = "block";
      hasResults = true;
    } else {
      item.style.display = "none";
    }
  });

  // Mostra ou oculta a mensagem caso nenhum resultado seja encontrado
  noResultsMessage.style.display = hasResults ? "none" : "block";
}

// Adiciona o evento de clique no botão de pesquisa
searchButton.addEventListener("click", searchProducts);
