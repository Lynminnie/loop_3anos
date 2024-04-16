
function verificarTime() {
  
  var continuarPerguntando = true;

  while (continuarPerguntando) {
    
    var respostaTime = prompt("resposável por coletar polén e fazer mel");

    
    if (respostaTime.toLowerCase() === "abelha") {
      alert("Isso mesmo!");
      continuarPerguntando = false; // Sai do loop após a resposta correta
    } else {
      alert("OQUE??? Tente novamente:)");
    }
  }
}

// Chamada da função para iniciar o processo
verificarTime();

  
