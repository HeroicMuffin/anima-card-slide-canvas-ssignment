//============================================================================//

const button = document.querySelector("#scatter");
const mainBoard = document.querySelector("#main");
let cardStock = [];

function draw(arr) {
  mainBoard.innerHTML = "";
  for (let i = 0; i < arr.length; i++) {
    arr[i].x = `${parseInt(getNonZeroRandomNumber(1550))}px`;
    arr[i].y = `${parseInt(getNonZeroRandomNumber(400))}px`;
    arr[i].getCard(i, 500, 300);
  } //getNonZeroRandomNumber(1550),getNonZeroRandomNumber(400),
}

const card1 = new creepyCards(
  "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/11fc1848-547e-4b80-a4ea-57fb81503056/d50qqyz-d1863d5e-22af-41fb-8998-d7fc975c0fe4.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzExZmMxODQ4LTU0N2UtNGI4MC1hNGVhLTU3ZmI4MTUwMzA1NlwvZDUwcXF5ei1kMTg2M2Q1ZS0yMmFmLTQxZmItODk5OC1kN2ZjOTc1YzBmZTQucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.IYSo12JAMnFtCR9vjCoJVxcQof2iaAM0a2qSbdrItao",
  { x: "100px", y: "200px" }
);
cardStock.push(card1);
const card2 = new creepyCards(
  "https://t1.daumcdn.net/cfile/tistory/99FFCB475A87B7AC20",
  { x: "200px", y: "300px" }
);
cardStock.push(card2);
const card3 = new creepyCards(
  "https://i.pinimg.com/736x/0c/2c/43/0c2c4377ed45877e274b8b458025c80b--tarot-card-art-tarot-cards.jpg",
  { x: "300px", y: "400px" }
);
cardStock.push(card3);
const card4 = new creepyCards(
  "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/11fc1848-547e-4b80-a4ea-57fb81503056/d4zneq6-5614b2ee-fdc1-4960-a377-68c29b5d51d8.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzExZmMxODQ4LTU0N2UtNGI4MC1hNGVhLTU3ZmI4MTUwMzA1NlwvZDR6bmVxNi01NjE0YjJlZS1mZGMxLTQ5NjAtYTM3Ny02OGMyOWI1ZDUxZDgucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.zUu_L33kgsv09Pd4XBBXVctsPsULmu6Ku-Kb7HIZrHs",
  { x: "400px", y: "500px" }
);
cardStock.push(card4);
const card5 = new creepyCards(
  "https://i.pinimg.com/736x/6f/35/77/6f35779ea790db119de4111a4d4db8c5--tarot-card-art-tarot-cards.jpg",
  { x: "500px", y: "600px" }
);
cardStock.push(card5);
// draw(cardStock);
button.addEventListener("click", function() {
  draw(cardStock);
});

function getNonZeroRandomNumber(num) {
  //========================================//
  var random = Math.floor(Math.random() * num);
  if (random == 0) return getNonZeroRandomNumber();
  return random;
}
function moveCardY(i, distance) {
  let id2delete = cardStock[i].id;
  let trashCard = document.getElementById(id2delete);
  trashCard.remove();
  cardStock[i].setYpos(distance);
  cardStock[i].getCard(i, 500, 300);
}
function moveCardX(i, distance) {
  let id2delete = cardStock[i].id;
  let trashCard = document.getElementById(id2delete);
  trashCard.remove();
  cardStock[i].setXpos(distance);
  cardStock[i].getCard(i, 500, 300);
}
document.onkeydown = checkKey;

function checkKey(e) {
  for (let index = 0; index < cardStock.length; index++) {
    if (cardStock[index].selected) {
      e = e || window.event;

      if (e.keyCode == "38") {
        moveCardY(index, -20);
      } else if (e.keyCode == "40") {
        moveCardY(index, 20);
      } else if (e.keyCode == "37") {
        moveCardX(index, -20);
      } else if (e.keyCode == "39") {
        moveCardX(index, 20);
      }
    }
  }
}
