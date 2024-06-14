// declarations
let tiles = document.querySelectorAll(".box");

let bombCount = 10;

let tileMap = new Map();

//main

const SetBombs = (bombCount, bombSpawnDensity, bombSpawnFreq) => {
    for (let i = 0; i < tiles.length; i++) {
        let randomNum = Math.round(Math.random() * bombSpawnFreq);
    
        if (randomNum > bombSpawnDensity && bombCount > 0) {
            tileMap.set(tiles[i].id, "Bomb");
            bombCount--;
        }
        else {
            tileMap.set(tiles[i].id, "Safe");
        }
    }
}

SetBombs(10, 8.5, 9.5);
// SetBombs(10, 8, 10);

for (let [key, value] of tileMap) {
    switch (value) {
        case "Bomb":
            document.getElementById(key).classList.add("Bomb");
            break;
        case "Safe":
            document.getElementById(key).classList.add("Hidden");
            break;
        default:
            break;
    }
}

console.log(tileMap);