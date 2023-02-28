
let savecount = document.getElementById("savedtab");

const count = document.getElementById("countP");
const historyElement = document.getElementById("savedtab");

let countP = 0;
let history = [];

function countPeople() {
    countP ++;
    count.innerHTML = countP;
}

function resetPeople() {
    countP = 0;
    count.innerHTML = countP;
}

function savePeople() {
    history.push(countP);
    const newHistoryItem = document.createElement("li");
    newHistoryItem.innerText = "You had " + countP + " people on the train";
    historyElement.appendChild(newHistoryItem);
    countP = 0;
    count.innerHTML = countP;
}

function clearHistory() {
    history = [];
    historyElement.innerHTML = "";
}