function updateClock() {
    const now = new Date();

    const options = {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    };

    document.getElementById("clock").textContent =
        now.toLocaleTimeString('es-CR', options);
}

setInterval(updateClock, 1000);
updateClock();