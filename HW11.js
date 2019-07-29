//Scatter creepy pictures on the dom and do some stuff i guess
class creepyCards {
  constructor(url, pos) {
    this.id = `cardID${cardStock.length}`;
    this.imageUrl = url;
    this.x = pos.x;
    this.y = pos.y;
    this.selected = false;
  }

  setPicture(pic) {
    this.imageUrl = pic;
  }

  setXpos(xpos) {
    this.x = `${parseInt(this.x) + xpos}px`;
  }
  setYpos(ypos) {
    this.y = `${parseInt(this.y) + ypos}px`;
  }

  getCard(i, w, h) {
    const mainBoard = document.querySelector("#main");
    const cardUI = document.createElement("div");
    cardUI.id = cardStock[i].id;
    const img = document.createElement("img");
    img.src = this.imageUrl;
    img.height = w;
    img.width = h;
    cardUI.append(img);
    cardUI.style.position = "absolute";
    cardUI.style.left = this.x;
    cardUI.style.top = this.y;

    cardUI.addEventListener("click", function() {
      for (let cardIndex = 0; cardIndex < cardStock.length; cardIndex++) {
        document.getElementById(cardStock[cardIndex].id).selected = false;
        cardStock[cardIndex].selected = false;
        let thisCard1 = document.getElementById(cardStock[cardIndex].id);
        thisCard1.style.opacity = 1;
      }
      document.getElementById(cardStock[i].id).selected = true;
      cardStock[i].selected = true;
      let thisCard2 = document.getElementById(cardStock[i].id);
      thisCard2.style.opacity = 0.5;
    });

    const btnBox = document.createElement("div");

    for (let index = 0; index < 4; index++) {
      let btn = document.createElement("button");
      if (index === 0) {
        btn.className = "glyphicon glyphicon-arrow-up";
        btn.style.position = "absolute";
        btn.style.marginLeft = "135px";
        btn.addEventListener("click", function() {
          moveCardY(i, -20);
        });
        btnBox.append(btn);
      }
      if (index === 1) {
        btn.className = "glyphicon glyphicon-arrow-down";
        btn.style.position = "absolute";
        btn.style.marginTop = "68px";
        btn.style.marginLeft = "134px";
        btn.addEventListener("click", function() {
          moveCardY(i, 20);
        });
        btnBox.append(btn);
      }
      if (index === 2) {
        btn.className = "glyphicon glyphicon-arrow-left";
        btn.style.position = "absolute";
        btn.style.marginTop = "33px";
        btn.style.marginLeft = "94px";
        btn.addEventListener("click", function() {
          moveCardX(i, -20);
        });
        btnBox.append(btn);
      }
      if (index === 3) {
        btn.className = "glyphicon glyphicon-arrow-right";
        btn.style.position = "absolute";
        btn.style.marginTop = "33px";
        btn.style.marginLeft = "174px";
        btn.addEventListener("click", function() {
          moveCardX(i, 20);
        });
        btnBox.append(btn);
      }
    }
    cardUI.append(btnBox);
    mainBoard.append(cardUI);
  }
}
