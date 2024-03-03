// Create replicants
const p1NameRep = nodecg.Replicant('p1Name', {defaultValue: 'Player 1'});
const p2NameRep = nodecg.Replicant('p2Name', {defaultValue: 'Player 2'});
const p3NameRep = nodecg.Replicant('p3Name', {defaultValue: 'Player 3'});
const p4NameRep = nodecg.Replicant('p4Name', {defaultValue: 'Player 4'});
const p1ScoreRep = nodecg.Replicant('p1Score', {defaultValue: 0});
const p2ScoreRep = nodecg.Replicant('p2Score', {defaultValue: 0});
const p3ScoreRep = nodecg.Replicant('p3Score', {defaultValue: 0});
const p4ScoreRep = nodecg.Replicant('p4Score', {defaultValue: 0});

const p1Name = document.getElementById('p1-name');
const p2Name = document.getElementById('p2-name');
const p3Name = document.getElementById('p3-name');
const p4Name = document.getElementById('p4-name');
const p1Score = document.getElementById('p1-score');
const p2Score = document.getElementById('p2-score');
const p3Score = document.getElementById('p3-score');
const p4Score = document.getElementById('p4-score');

p1NameRep.on('change', (newValue) => {
    console.log(`p1NameRep changed to ${newValue}`)
    p1Name.innerHTML = newValue;
});
p2NameRep.on('change', (newValue) => {
    console.log(`p2NameRep changed to ${newValue}`)
    p2Name.innerHTML = newValue;
});
p3NameRep.on('change', (newValue) => {
    console.log(`p3NameRep changed to ${newValue}`)
    p3Name.innerHTML = newValue;
});
p4NameRep.on('change', (newValue) => {
    console.log(`p4NameRep changed to ${newValue}`)
    p4Name.innerHTML = newValue;
});
p1ScoreRep.on('change', (newValue) => {
    console.log(`p1ScoreRep changed to ${newValue}`)
    p1Score.innerHTML = newValue;
});
p2ScoreRep.on('change', (newValue) => {
    console.log(`p2ScoreRep changed to ${newValue}`)
    p2Score.innerHTML = newValue;
});
p3ScoreRep.on('change', (newValue) => {
    console.log(`p3ScoreRep changed to ${newValue}`)
    p3Score.innerHTML = newValue;
});
p4ScoreRep.on('change', (newValue) => {
    console.log(`p4ScoreRep changed to ${newValue}`)
    p4Score.innerHTML = newValue;
});