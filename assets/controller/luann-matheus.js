
function abrirWhatsapp() {
      var fullname = document.getElementById("fullname").value;
      var email = document.getElementById("email").value;
        var phone = document.getElementById("phone").value;
      var subject = document.getElementById("subject").value;
      var message = document.getElementById("message").value;
      var url = "https://api.whatsapp.com/send?phone=5581995245709" // Seu numero
        + "*Formulário de Contato*" + "%0a" // Mensagem personalizada
        + "%0a" // Quebra de linha
        + "*fullname*: " + nome + "%0a" // Dados do formulário
        + "*phone*: " + telefone + "%0a"
        + "*email*: " + email + "%0a"
        + "*subject*: " + assunto + "%0a"
        + "*message*: " + msg;
      window.open(url, '_blank').focus();
    }
   
   