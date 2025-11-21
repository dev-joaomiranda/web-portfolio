// Script da landing page da NovaTech Solutions

console.log("NovaTech Solutions - Landing page carregada.");

// Botão da seção de contato
const botaoContato = document.getElementById("btn-contato");

// URL fictícia do formulário (Projeto 02)
// Quando você publicar com GitHub Pages, pode trocar este link pela URL real.
const urlFormularioFicticio = "https://seu-usuario.github.io/web-portfolio/projeto-02-formulario/";

if (botaoContato) {
  botaoContato.addEventListener("click", () => {
    const irParaFormulario = confirm(
      "Esta é uma empresa fictícia criada para portfólio.\n\n" +
        "Quer ser redirecionado para o formulário de contato fictício da NovaTech Solutions?"
    );

    if (irParaFormulario) {
      // Em um projeto real, aqui faria a navegação para outra página
      window.location.href = urlFormularioFicticio;
    }
  });
}
