const root = document.querySelector(".arenas");
const randomButton = document.querySelector(".button");

const player1 = {
    player: 1,
    name: "Scorbaka",
    hp: 50,
    img: "http://reactmarathon-api.herokuapp.com/assets/scorpion.gif",
    weapon: ["Hook", "Fire"],
    attack: function(){
        console.log(self.name + ' Fight...');
    }
}

const player2 = {
    player: 2,
    name: "Subaka",
    hp: 100,
    img: "http://reactmarathon-api.herokuapp.com/assets/subzero.gif",
    weapon: ["Froze", "Ace"],
    attack: function(){
        console.log(self.name + ' Fight...');
    }
}

function createElement(tag, className) {
    const _tag = document.createElement(tag);
    if (className) {
        _tag.classList.add(className);
    }

    return _tag;
}

function createPlayer(playerObject) {
    const player = createElement("div", "player" + playerObject.player);
    const progressbar = createElement("div", "progressbar");
    const life = createElement("div", "life");
    const name = createElement("div", "name");
    const character = createElement("div", "character");
    const img = createElement("img");

    img.src = playerObject.img;
    life.style.width = playerObject.hp + "%";
    name.innerText = playerObject.name;

    progressbar.appendChild(life);
    progressbar.appendChild(name);

    character.appendChild(img);

    player.appendChild(progressbar);
    player.appendChild(character);

    return player;
}

function changeHP(player) {
    const playerLife = document.querySelector(".player" + player.player + " .life")
    player.hp -= Math.floor(Math.random() * 20);
    playerLife.style.width = player.hp < 0 ? 0 : player.hp + "%";
}

function playerWin(name) {
    const loseTitle = createElement("div", "loseTitle");
    loseTitle.innerText = name + " KRASAVA";

    return loseTitle;
}

randomButton.addEventListener("click", function() {
    changeHP(player1);
    changeHP(player2);

    if (player1.hp <= 0) {
        root.appendChild(playerWin(player2.name));
        randomButton.disabled = true;
    } else if (player2.hp <= 0) {
        root.appendChild(playerWin(player1.name));
        randomButton.disabled = true;
    }
})

root.appendChild(createPlayer(player1));
root.appendChild(createPlayer(player2));