const searchInput = document.getElementById("searchInput");
const searchButton = document.getElementById("searchButton");
const suggestionsList = document.getElementById("suggestionsList");
const suggestions = ["serviços", "produtos", "banho", "tosa", "ração"];

// Exibe a lista de sugestões ao focar no campo de pesquisa
searchInput.addEventListener("focus", () => {
  suggestionsList.style.display = "block";
});

// Oculta a lista de sugestões ao clicar fora dela
document.addEventListener("click", (event) => {
  if (
    !searchInput.contains(event.target) &&
    !suggestionsList.contains(event.target)
  ) {
    suggestionsList.style.display = "none";
  }
});

// Popula a lista de sugestões
suggestionsList.innerHTML = suggestions
  .map((suggestion) => `<li class="suggestion-item">${suggestion}</li>`)
  .join("");

// Insere a sugestão no campo de pesquisa ao clicar em uma sugestão
document.querySelectorAll(".suggestion-item").forEach((item) => {
  item.addEventListener("click", (event) => {
    searchInput.value = event.target.textContent;
    suggestionsList.style.display = "none";
  });
});

function redirectToPage(searchTerm) {
  if (searchTerm.includes("produtos") || searchTerm.includes("ração")) {
    window.location.href = "/pages/produtos.html";
    return;
  } else if (
    searchTerm.includes("serviços") ||
    searchTerm.includes("banho") ||
    searchTerm.includes("tosa")
  ) {
    window.location.href = "/pages/servicos.html";
    return;
  } else {
    alert("Nenhuma página correspondente encontrada para essa busca.");
  }
}

searchButton.addEventListener("click", (event) => {
  event.preventDefault();
  const searchTerm = searchInput.value.toLowerCase();
  redirectToPage(searchTerm);
});
