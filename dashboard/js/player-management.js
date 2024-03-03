// Create replicants
const p1NameRep = nodecg.Replicant('p1Name', {defaultValue: 'Player 1'});
const p2NameRep = nodecg.Replicant('p2Name', {defaultValue: 'Player 2'});
const p3NameRep = nodecg.Replicant('p3Name', {defaultValue: 'Player 3'});
const p4NameRep = nodecg.Replicant('p4Name', {defaultValue: 'Player 4'});
const p1ScoreRep = nodecg.Replicant('p1Score', {defaultValue: 0});
const p2ScoreRep = nodecg.Replicant('p2Score', {defaultValue: 0});
const p3ScoreRep = nodecg.Replicant('p3Score', {defaultValue: 0});
const p4ScoreRep = nodecg.Replicant('p4Score', {defaultValue: 0});

// Input/output elements
const p1NameInput = document.getElementById('p1-name');
const p2NameInput = document.getElementById('p2-name');
const p3NameInput = document.getElementById('p3-name');
const p4NameInput = document.getElementById('p4-name');
const p1ScoreOutput = document.getElementById('p1-score');
const p2ScoreOutput = document.getElementById('p2-score');
const p3ScoreOutput = document.getElementById('p3-score');
const p4ScoreOutput = document.getElementById('p4-score');

// Update player names based on Enter key
p1NameInput.addEventListener('keydown', (e) => {
    if(e.key === 'Enter')
    {
        p1NameRep.value = e.target.value;
        console.log(`Player 1 name updated to ${p1NameRep.value}`);
    }
});
p2NameInput.addEventListener('keydown', (e) => {
    if(e.key === 'Enter')
    {
        p2NameRep.value = e.target.value;
        console.log(`Player 2 name updated to ${p2NameRep.value}`);
    }
});
p3NameInput.addEventListener('keydown', (e) => {
    if(e.key === 'Enter')
    {
        p3NameRep.value = e.target.value;
        console.log(`Player 3 name updated to ${p3NameRep.value}`);
    }
});
p4NameInput.addEventListener('keydown', (e) => {
    if(e.key === 'Enter')
    {
        p4NameRep.value = e.target.value;
        console.log(`Player 4 name updated to ${p4NameRep.value}`);
    }
});

// Increment points for player based on button press
function incPoints(player, value)
{
    switch(player)
    {
        case 1:
            p1ScoreRep.value += value;
            break;
        case 2:
            p2ScoreRep.value += value;
            break;
        case 3:
            p3ScoreRep.value += value;
            break;
        case 4:
            p4ScoreRep.value += value;
            break;
    }
}

// BS stuff to get the dashboard to update properly
p1NameRep.on('change', (newValue) => {
    p1NameInput.value = newValue;
    console.log(`Player 1 name updated to ${newValue}`);
});
p2NameRep.on('change', (newValue) => {
    p2NameInput.value = newValue;
    console.log(`Player 2 name updated to ${newValue}`);
});
p3NameRep.on('change', (newValue) => {
    p3NameInput.value = newValue;
    console.log(`Player 3 name updated to ${newValue}`);
});
p4NameRep.on('change', (newValue) => {
    p4NameInput.value = newValue;
    console.log(`Player 4 name updated to ${newValue}`);
});
p1ScoreRep.on('change', (newValue) => {
    p1ScoreOutput.innerHTML = `Current score: ${p1ScoreRep.value}`;
    console.log(`Player 1 score updated to ${newValue}`);
});
p2ScoreRep.on('change', (newValue) => {
    p2ScoreOutput.innerHTML = `Current score: ${p2ScoreRep.value}`;
    console.log(`Player 2 score updated to ${newValue}`);
});
p3ScoreRep.on('change', (newValue) => {
    p3ScoreOutput.innerHTML = `Current score: ${p3ScoreRep.value}`;
    console.log(`Player 3 score updated to ${newValue}`);
});
p4ScoreRep.on('change', (newValue) => {
    p4ScoreOutput.innerHTML = `Current score: ${p4ScoreRep.value}`;
    console.log(`Player 4 score updated to ${newValue}`);
});

// Reset all
function reset()
{
    if (confirm('Are you sure you want to reset all scores and usernames?'))
    {
        p1NameRep.value = '';
        p2NameRep.value = '';
        p3NameRep.value = '';
        p4NameRep.value = '';
        p1ScoreRep.value = 0;
        p2ScoreRep.value = 0;
        p3ScoreRep.value = 0;
        p4ScoreRep.value = 0;
        console.log('All scores and usernames reset.');
    } else {
        console.log('Reset cancelled.');
    }
}