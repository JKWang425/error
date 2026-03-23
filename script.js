let secondsLeft = 10;
const displayElement = document.getElementById('countdown-display');

const countdownInterval = setInterval(() => {
    displayElement.innerText = `[ SYSTEM_OVERRIDE :: ${secondsLeft}s ] >> 等我打完這關...`;
    secondsLeft--;

    if (secondsLeft < 0) {
        clearInterval(countdownInterval);
        displayElement.innerText = "ACCESS_GRANTED // 模擬宇宙權限已解鎖。";
        displayElement.style.color = "#00ffff";
        displayElement.style.textShadow = "0 0 10px #00ffff";
    }
}, 1000);