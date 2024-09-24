const butInstall = document.getElementById('buttonInstall');
let deferredPrompt;

window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault();
    deferredPrompt = event;
    butInstall.style.display = 'block';
});

butInstall.addEventListener('click', async () => {
    if (deferredPrompt){
        deferredPrompt.prompt();
        const choiceResult = await deferredPrompt.userChoice;
        console.log('user response to the install prompt: ${choiceResult.outcome}');
        deferredPrompt = null;
        butInstall.style.display = 'none';
    }
});

window.addEventListener('appinstalled', (event) => {
    console.log('PWA Was Installed Successfully!', event);
    butInstall.style.display = 'none';
  });