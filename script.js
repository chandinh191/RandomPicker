const form = document.getElementById('nameForm');
const nameInput = document.getElementById('nameInput');
const nameList = document.getElementById('nameList');
const startRace = document.getElementById('startRace');
const winnerDisplay = document.getElementById('winner');

let participants = [];

form.addEventListener('submit', function(e) {
  e.preventDefault();
  const name = nameInput.value.trim();
  if (name) {
    participants.push(name);
    const li = document.createElement('li');
    li.textContent = name;
    nameList.appendChild(li);
    nameInput.value = '';
  }
});

startRace.addEventListener('click', function() {
  if (participants.length < 2) {
    alert('Add at least two participants!');
    return;
  }
  const winner = participants[Math.floor(Math.random() * participants.length)];
  winnerDisplay.textContent = `🏆 The winner is: ${winner}!`;
});
