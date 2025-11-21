// Script básico da landing page
console.log("Projeto 01 - Landing Page carregado!");

const botao = document.querySelector(".btn");

if (botao) {
  botao.addEventListener("click", () => {
    alert("Obrigado por clicar! Em breve esta landing page terá mais funcionalidades.");
  });
}
