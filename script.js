let secondsLeft = 10;
const displayElement = document.getElementById('countdown-display');
const elationContainer = document.getElementById('elation-container');
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

setInterval(spawnElationItem, 600);

const countdownInterval = setInterval(() => {
    displayElement.innerText = `[ SYSTEM_CORRUPTED :: ${secondsLeft}s ] >> 駭客程序無法停止這場狂歡...`;
    secondsLeft--;

    if (secondsLeft < 0) {
        clearInterval(countdownInterval);
        displayElement.innerText = "ACCESS_DENIED // 阿哈真有面子！";
        displayElement.style.color = "#ff00ff";
        displayElement.style.textShadow = "0 0 15px #ff00ff, 0 0 30px #00ffff";
        displayElement.style.fontSize = "1.3rem";
        displayElement.style.fontWeight = "bold";
    }
}, 1000);