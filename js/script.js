// Rolagem suave para navegação
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(link.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Botão WhatsApp pulsando
setInterval(() => {
  const btn = document.getElementById("btn-whatsapp");
  btn.style.transform = "scale(1.15)";
  setTimeout(() => btn.style.transform = "scale(1)", 300);
}, 3000);

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

