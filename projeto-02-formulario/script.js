// Validação simples de formulário no front-end

const form = document.getElementById("contato-form");
const feedback = document.getElementById("feedback");

form.addEventListener("submit", (event) => {
  event.preventDefault(); // evita o envio padrão

  const nome = form.nome.value.trim();
  const email = form.email.value.trim();
  const mensagem = form.mensagem.value.trim();

  if (!nome || !email || !mensagem) {
    feedback.textContent = "Preencha todos os campos.";
    feedback.classList.add("error");
    return;
  }

  // Validação bem simples de e-mail
  if (!email.includes("@")) {
    feedback.textContent = "Informe um e-mail válido.";
    feedback.classList.add("error");
    return;
  }

  feedback.classList.remove("error");
  feedback.textContent = "Mensagem enviada com sucesso! (simulação)";

  // Limpa os campos
  form.reset();
});
