// Rolagem suave
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(link.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Detectar se está em um dispositivo móvel
function isMobile() {
  return /Android|iPhone|iPad|iPod|Windows Phone|webOS/i.test(navigator.userAgent);
}

// Controlar visibilidade do botão WhatsApp
const btnWhats = document.getElementById("btn-whatsapp");
if (isMobile()) {
  btnWhats.style.display = "none"; // Esconde no celular
}

// Animação de pulsar (apenas se estiver visível / PC)
if (!isMobile()) {
  setInterval(() => {
    btnWhats.style.transform = "scale(1.15)";
    setTimeout(() => btnWhats.style.transform = "scale(1)", 300);
  }, 3000);
}

// Pop-up vendedor chamando ação
setTimeout(() => {
  let popup = document.createElement("div");
  popup.innerHTML = `
    <div id="popup-venda">
      💡 Já pensou em reduzir até <b>95%</b> da sua conta de luz?
      <br><br>
      <a id="popup-btn" href="https://w.app/3lmyca" target="_blank">Quero saber mais</a>
    </div>
  `;
  document.body.appendChild(popup);
}, 8000);
