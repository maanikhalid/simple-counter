let countP  = document.getElementById('countP');
let saveCount = document.getElementById('saveCount');
let startText = "How many people are boarding the train?";
let clearCount = document.getElementById('clearCount');
countP.textContent = startText;

let peopleCount = 0

function  counter() {
  peopleCount += 1;
  countP.textContent = "You currently have " + peopleCount + " on the train";
  clearCount.textContent = ""
}

function saveCounter(){
  saveCount.innerHTML += "<li>You had " + peopleCount + " on the train</li>";

  peopleCount = 0;
  countP.textContent = startText;
}

function resetCounter(){
  peopleCount = 0;
  countP.textContent = "You currently have " + peopleCount + " on the train";
}

function clearHistory(){
  clearCount.textContent = "Cleared results"
  saveCount.textContent = ""
}
