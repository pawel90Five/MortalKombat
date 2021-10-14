const player1 = {
    name: "Scorbaka",
    hp: 100,
    img: "http://reactmarathon-api.herokuapp.com/assets/scorpion.gif",
    weapon: ["Hook", "Fire"],
    attack: function(){
        console.log(self.name + ' Fight...');
    }
}

const player2 = {
    name: "Subaka",
    hp: 100,
    img: "http://reactmarathon-api.herokuapp.com/assets/subzero.gif",
    weapon: ["Froze", "Ace"],
    attack: function(){
        console.log(self.name + ' Fight...');
    }
}

function createPlayer(playerNumber, playerObject) {
    const player = document.createElement("div");
    player.classList.add(playerNumber);

    const progressbar = document.createElement("div");
    progressbar.classList.add("progressbar");

    const life = document.createElement("div");
    life.classList.add("life");
    life.style.width = playerObject.hp + "%";

    const name = document.createElement("div");
    name.classList.add("name");
    name.innerText = playerObject.name;

    progressbar.appendChild(life);
    progressbar.appendChild(name);

    const character = document.createElement("div");
    character.classList.add("character");

    const img = document.createElement("img");
    img.src = playerObject.img;

    character.appendChild(img);
    player.appendChild(progressbar);
    player.appendChild(character);

    const root = document.querySelector(".arenas");
    root.appendChild(player);
}

createPlayer("player1", player1);
createPlayer("player2", player2);