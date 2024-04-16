
function verificarTime() {
  
  var continuarPerguntando = true;

  while (continuarPerguntando) {
    
    var respostaTime = prompt("Qual dos compositores famosos de música clássica é um padre?");

    
    if (respostaTime.toLowerCase() === "Vivaldi") {
      alert("Isso mesmo! Vivaldi que era padre!");
      continuarPerguntando = false; // Sai do loop após a resposta correta
    } else {
      alert("OQUE??? Tente novamente:)");
    }
  }
}

// Chamada da função para iniciar o processo
verificarTime();

  
