let numeroSecreto = Math.floor(Math.random() * 100) + 1;
let intentos = 10;

function comprobar() {
  const entrada = document.getElementById("entrada");
  const resultado = document.getElementById("resultado");
  const intentosTexto = document.getElementById("intentos");

  let intento = parseInt(entrada.value);

  if (intento === numeroSecreto) {
    resultado.textContent = "🎉 ¡Correcto! Has ganado.";
    resultado.style.color = "green";
  } else {
    intentos--;
    intentosTexto.textContent = intentos;

    if (intentos <= 0) {
      resultado.textContent = `💥 Perdiste. El número era ${numeroSecreto}.`;
      resultado.style.color = "red";
    } else {
      resultado.textContent = intento < numeroSecreto ? "📉 Muy bajo" : "📈 Muy alto";
      resultado.style.color = "orange";
    }
  }

  entrada.value = "";
}
