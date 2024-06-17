if ('serviceWorker' in navigator) {
    window.addEventListener('load', function () {
        navigator.serviceWorker.register('../script/service-worker.js').then(function (registration) {
            console.log('Service Worker registrado com sucesso:', registration);
        }, function (error) {
            console.log('Falha ao registrar o Service Worker:', error);
        });
    });
}

let deferredPrompt;

window.addEventListener('beforeinstallprompt', (e) => {
    // Evite o prompt de instalação automático
    e.preventDefault();
    // Salve o evento para que possa ser acionado posteriormente
    deferredPrompt = e;

    // Atualize sua interface de usuário para notificar o usuário sobre a possibilidade de instalação
    const installButton = document.getElementById('install-button');
    installButton.style.display = 'block';

    installButton.addEventListener('click', (e) => {
        // Ocultar o botão de instalação
        installButton.style.display = 'none';
        // Mostre o prompt de instalação
        deferredPrompt.prompt();
        // Espere o usuário responder ao prompt
        deferredPrompt.userChoice.then((choiceResult) => {
            if (choiceResult.outcome === 'accepted') {
                console.log('Usuário aceitou instalar o PWA');
            } else {
                console.log('Usuário recusou instalar o PWA');
            }
            deferredPrompt = null;
        });
    });
});

window.addEventListener('appinstalled', (evt) => {
    console.log('PWA instalado com sucesso!');
});
