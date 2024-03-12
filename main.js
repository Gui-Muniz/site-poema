const senhaCorreta1 = "Tua Cantiga";
const senhaCorreta2 = "tua cantiga";
const senhaCorreta3 = "Tua cantiga";

function logar() {
  function verificarSenha() {
    const senhaDigitada = document.getElementById("senha").value;
    const senhaCorreta1 = "Tua Cantiga";
const senhaCorreta2 = "Tua cantiga";
const senhaCorreta3 = "tua cantiga";


    if (senhaDigitada === senhaCorreta1 || senhaDigitada === senhaCorreta2 || senhaDigitada === senhaCorreta3) {
      // A senha está correta! Redirecione para o vídeo
      window.location.href = "https://youtu.be/8_fyLYFMXUs?si=qrS2QZyd4wT0PKzB";
    } else {
      // A senha está incorreta
      alert("Não foste revelado a ti o real. Tente de novo!");
    }
  }

  // Adicione a funcionalidade desejada aqui
  console.log("Função ad chamada!"); // Apenas um exemplo, substitua pela sua lógica real

  verificarSenha();
}