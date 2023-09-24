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
