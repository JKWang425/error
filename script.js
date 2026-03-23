let secondsLeft = 10;
let countdownInterval;
let warningTimeout;
const displayElement = document.getElementById('countdown-display');
const elationContainer = document.getElementById('elation-container');
const btnRetry = document.getElementById('btn-retry');
const btnChaos = document.getElementById('btn-chaos');
const warningElement = document.getElementById('system-warning');
const elationSymbols = ['🎭', '🃏', '🎲', '✨', '😂', '🍷'];

function spawnElationItem() {
    const item = document.createElement('div');
    item.classList.add('elation-item');
    item.innerText = elationSymbols[Math.floor(Math.random() * elationSymbols.length)];
    item.style.left = Math.random() * 100 + 'vw';
    item.style.animationDuration = (Math.random() * 4 + 3) + 's';
    
    elationContainer.appendChild(item);

    setTimeout(() => {
        item.remove();
    }, 7000);
}

let spawnInterval = setInterval(spawnElationItem, 600);

function triggerWarningSequence() {
    clearTimeout(warningTimeout);
    warningElement.innerText = "系統已被星核獵手接管。";
    warningElement.style.color = "#a3eaff";
    warningElement.style.textShadow = "none";
    
    warningTimeout = setTimeout(() => {
        warningElement.innerText = "警告：檢測到未知的「歡愉」實體強制覆寫，系統控制權正在流失！";
        warningElement.style.color = "#ff00ff";
        warningElement.style.textShadow = "0 0 10px #ff00ff";
    }, 5000);
}

function startTimer() {
    clearInterval(countdownInterval);
    secondsLeft = 10;
    displayElement.style.color = "#ff00ff";
    displayElement.style.textShadow = "0 0 5px #ff00ff";
    displayElement.style.fontSize = "1rem";
    displayElement.style.fontWeight = "normal";
    
    countdownInterval = setInterval(() => {
        displayElement.innerText = `[ ERROR_SW_79 :: ${secondsLeft}s ] >> 銀狼：嘖，這小丑的亂碼怎麼清不掉...`;
        secondsLeft--;

        if (secondsLeft < 0) {
            clearInterval(countdownInterval);
            displayElement.innerText = "ACCESS_DENIED // 銀狼：算了，我去打遊戲，系統送你了。";
            displayElement.style.color = "#ff00ff";
            displayElement.style.textShadow = "0 0 15px #ff00ff, 0 0 30px #00ffff";
            displayElement.style.fontSize = "1.1rem";
            displayElement.style.fontWeight = "bold";
        }
    }, 1000);
}

triggerWarningSequence();
startTimer();

btnRetry.addEventListener('click', () => {
    startTimer();
    triggerWarningSequence();
    displayElement.innerText = "[ REBOOTING ] >> 銀狼：重新覆寫底層代碼...";
});

btnChaos.addEventListener('click', () => {
    for (let i = 0; i < 15; i++) {
        setTimeout(spawnElationItem, Math.random() * 300);
    }
});