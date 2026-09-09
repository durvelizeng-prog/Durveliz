/* Durveliz Instalações e Projetos Elétricos - funcionalidades do site */
document.addEventListener("DOMContentLoaded", function () {
  // Menu mobile
  const menuToggle = document.querySelector(".toggle");
  const nav = document.querySelector(".menu");
  if (menuToggle && nav) {
    menuToggle.addEventListener("click", function () {
      nav.classList.toggle("open");
      menuToggle.classList.toggle("active");
    });
  }

  // Formulário de orçamento: encaminha a solicitação para o WhatsApp.
  const form = document.getElementById("orcamentoForm");
  if (!form) return;

  const whatsapp = "5531972486324";

  function valor(id) {
    const el = document.getElementById(id);
    return el ? el.value.trim() : "";
  }

  function montarMensagem() {
    return [
      "Olá! Gostaria de solicitar um orçamento.",
      "",
      "*Nome:* " + valor("nome"),
      "*Telefone/WhatsApp:* " + valor("telefone"),
      "*E-mail:* " + (valor("email") || "Não informado"),
      "*Serviço:* " + valor("servico"),
      "",
      "*Descrição da necessidade:*",
      valor("descricao")
    ].join("\n");
  }

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    const mensagem = montarMensagem();
    const url = "https://wa.me/" + whatsapp + "?text=" + encodeURIComponent(mensagem);
    window.open(url, "_blank", "noopener,noreferrer");
  });
});
