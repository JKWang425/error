let secondsLeft = 10;
let countdownInterval;
let warningTimeout;
let elationSpawningInterval; // 新增：用於控制符號出現的定時器

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

// 停止符號生成並清除已有的符號
function stopElationParty() {
    clearInterval(elationSpawningInterval);
    elationContainer.innerHTML = '';
}

function triggerWarningSequence() {
    clearTimeout(warningTimeout);
    stopElationParty(); // 先停止之前的歡愉
    
    // 重置為銀狼冷青色風格
    document.body.classList.remove('elation-mode');
    warningElement.innerText = "系統已被星核獵手接管。";
    warningElement.style.color = "#a3eaff";
    warningElement.style.textShadow = "none";
    
    warningTimeout = setTimeout(() => {
        // 5秒後切換為歡愉粉紫色風格
        document.body.classList.add('elation-mode');
        
        warningElement.innerText = "警告：檢測到未知的「歡愉」實體強制覆寫，系統控制權正在流失！";
        warningElement.style.color = "#ff00ff";
        warningElement.style.textShadow = "0 0 10px #ff00ff";
        
        // 螢幕震動
        document.body.classList.add('critical-shake');
        setTimeout(() => {
            document.body.classList.remove('critical-shake');
        }, 600);
        
        // 核心修改：開始生成歡愉符號
        elationSpawningInterval = setInterval(spawnElationItem, 600);
        
    }, 5000);
}

function startTimer() {
    clearInterval(countdownInterval);
    secondsLeft = 10;
    
    // 雖然外觀變色，但銀狼的抱怨文字顏色保持 cyan 以示區別（可依喜好調整）
    displayElement.style.color = "#00ffff"; 
    displayElement.style.textShadow = "0 0 5px #00ffff";
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
    // 核心修改：按下重連時，完全重置狀態
    startTimer();
    triggerWarningSequence();
    displayElement.innerText = "[ REBOOTING ] >> 銀狼：重新覆寫底層代碼...";
});

btnChaos.addEventListener('click', () => {
    // 如果歡愉模式尚未啟動（前5秒），提早啟動
    if (!document.body.classList.contains('elation-mode')) {
        clearTimeout(warningTimeout);
        document.body.classList.add('elation-mode');
        // ...這裡重複觸發 Warning Sequence 的邏輯（可封裝，簡化省略）
        elationSpawningInterval = setInterval(spawnElationItem, 600);
    }
    // 並且手動觸發一波混亂
    for (let i = 0; i < 15; i++) {
        setTimeout(spawnElationItem, Math.random() * 300);
    }
});