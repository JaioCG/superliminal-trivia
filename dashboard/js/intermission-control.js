const intermissionTextRep = nodecg.Replicant('intermissionText');
const countdownTimerRep = nodecg.Replicant('countdownTimer');
const timerVisibilityRep = nodecg.Replicant('timerVisibility', { defaultValue: true });
let timerInterval;

function updateRadio(arg)
{
    switch(arg)
    {
        case 0:
            intermissionTextRep.value = 'STARTING SOON';
            break;
        case 1:
            intermissionTextRep.value = 'BE RIGHT BACK';
            break;
        case 2:
            intermissionTextRep.value = 'THANKS FOR WATCHING';
            break;
    }
}

function startTimer()
{
    const timer = document.getElementById('timer');

    const timerDuration = document.getElementById('minutes').value;
    let time = timerDuration * 60;

    timerInterval = setInterval(() => {
        let minutes = Math.floor(time / 60);
        let seconds = time % 60;

        seconds = seconds < 10 ? '0' + seconds : seconds;

        countdownTimerRep.value = `${minutes}:${seconds}`;
        document.getElementById('timer-status').innerHTML = `Time remaining: ${minutes}:${seconds}`;

        time--;

        if (time < 0) {
            clearInterval(timerInterval);
        }
    }, 1000);
}

function stopTimer()
{
    clearInterval(timerInterval);
    countdownTimerRep.value = '00:00';
    document.getElementById('timer-status').innerHTML = 'Timer stopped';
}

function toggleTimer()
{
    timerVisibilityRep.value = !timerVisibilityRep.value;
}