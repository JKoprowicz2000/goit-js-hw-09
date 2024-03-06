const startButton = document.querySelector('[data-start]');
const stopButton = document.querySelector('[data-stop]')

let timeoutId;


function getRandomHexColor() {  
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    }
    function changeBackgroundColor() {
        document.body.style.backgroundColor = getRandomHexColor()
       timeoutId = setTimeout(changeBackgroundColor, 1000)
    }

    startButton.addEventListener('click', () => {
        startButton.disabled = true;
        // Włącz przycisk Stop
        stopButton.disabled = false;
        // Rozpocznij zmianę koloru tła
        changeBackgroundColor();
    });
        stopButton.addEventListener('click', () => {
            // Włącz przycisk Start
            startButton.disabled = false;
            // Wyłącz przycisk Stop
            stopButton.disabled = true;
            clearTimeout(timeoutId);
            document.body.style.backgroundColor = '#ffffff';
        });

