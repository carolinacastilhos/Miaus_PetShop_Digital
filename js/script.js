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

function search() {
  let input = document.getElementById("searchbar").value;
  input = input.toLowerCase();
  let word = document.getElementByClassName("");

  for (i = 0; i < word.length; i++) {
    if (!word[i].innerHTML.toLowerCase().includes(input)) {
      word[i].style.display = "none";
    } else {
      word[i].style.display = "list-item";
    }
  }
}
