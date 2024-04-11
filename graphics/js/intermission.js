const intermissionTextRep = nodecg.Replicant('intermissionText');
const countdownTimerRep = nodecg.Replicant('countdownTimer');
const timerVisibilityRep = nodecg.Replicant('timerVisibility', { defaultValue: true });

intermissionTextRep.on('change', (newVal) => {
    document.getElementById('intermission-text').innerHTML = newVal;
});

countdownTimerRep.on('change', (newVal) => {
    document.getElementById('timer').innerHTML = newVal;
});

timerVisibilityRep.on('change', (newVal) => {
    if (newVal) {
        document.getElementById('timer').style.display = 'block';
    } else {
        document.getElementById('timer').style.display = 'none';
    }
});