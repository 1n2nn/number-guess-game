let answer;
let attempts;

function initGame() {
    answer = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    document.getElementById('message').textContent = '';
    document.getElementById('guess').value = '';
    document.getElementById('restartBtn').style.display = 'none';
}

document.getElementById('checkBtn').addEventListener('click', function() {
    const guess = Number(document.getElementById('guess').value);
    if (!guess || guess < 1 || guess > 100) {
        document.getElementById('message').textContent = '1〜100の数字を入力してください。';
        return;
    }
    attempts++;
    if (guess === answer) {
        document.getElementById('message').textContent = `正解！${attempts}回目で当たりました！`;
        document.getElementById('restartBtn').style.display = 'inline-block';
    } else if (guess < answer) {
        document.getElementById('message').textContent = 'もっと大きい数字です。';
    } else {
        document.getElementById('message').textContent = 'もっと小さい数字です。';
    }
});

document.getElementById('restartBtn').addEventListener('click', initGame);

// 初期化
initGame();
