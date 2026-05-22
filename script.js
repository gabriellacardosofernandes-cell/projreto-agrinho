// Mapa simples (simulado) - pode ser substituído por Google Maps API depois
document.getElementById('loadMapBtn').addEventListener('click', function() {
    const mapDiv = document.getElementById('map');
    mapDiv.style.display = 'block';
    mapDiv.innerHTML = '<p>Mapa interativo em desenvolvimento. Logo você verá projetos sustentáveis do Paraná aqui!</p>';
});

// Formulário de contato
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    alert(`Obrigado, ${name}! Sua mensagem foi recebida.`);
    // Aqui você pode adicionar integração com backend ou e-mail
    document.getElementById('contactForm').reset();
});
