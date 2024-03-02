// Create replicants
const p1NameRep = nodecg.Replicant('p1Name', {defaultValue: 'Player 1'});
const p2NameRep = nodecg.Replicant('p2Name', {defaultValue: 'Player 2'});
const p3NameRep = nodecg.Replicant('p3Name', {defaultValue: 'Player 3'});
const p4NameRep = nodecg.Replicant('p4Name', {defaultValue: 'Player 4'});
const p1ScoreRep = nodecg.Replicant('p1Score', {defaultValue: 0});
const p2ScoreRep = nodecg.Replicant('p2Score', {defaultValue: 0});
const p3ScoreRep = nodecg.Replicant('p3Score', {defaultValue: 0});
const p4ScoreRep = nodecg.Replicant('p4Score', {defaultValue: 0});

const p1NameInput = document.getElementById('p1-name');
const p2NameInput = document.getElementById('p2-name');
const p3NameInput = document.getElementById('p3-name');
const p4NameInput = document.getElementById('p4-name');

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
            console.log(`Player 1 score updated to ${p1ScoreRep.value}`);
            break;
        case 2:
            p2ScoreRep.value += value;
            console.log(`Player 2 score updated to ${p2ScoreRep.value}`);
            break;
        case 3:
            p3ScoreRep.value += value;
            console.log(`Player 3 score updated to ${p3ScoreRep.value}`);
            break;
        case 4:
            p4ScoreRep.value += value;
            console.log(`Player 4 score updated to ${p4ScoreRep.value}`);
            break;
    }
}