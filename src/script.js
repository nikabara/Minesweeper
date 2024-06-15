// declarations
let tiles = document.querySelectorAll(".box");

let bombCount = 10;

let tileMap = new Map();

//main

const GetKeyByValue = (map, value) => {
    for (let [key, val] of map) {
        if (val == value) {
            return key;
        }
    }
}

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

SetBombs(12, 8.5, 9.5);
// SetBombs(10, 8, 10);

let i = 0; // Left
let j = 2; // Right

// Marking number places
for (let [key, value] of tileMap) {
    if (value === "Bomb") {
        let leftElement = tileMap.get(`box-${i}`);
        let rightElement = tileMap.get(`box-${j}`);
        let topElement = tileMap.get(`box-${i-9}`);

        // Set numbers on the left side of the bombs
        if (leftElement == "Safe" && !document.getElementById(key).classList.contains("LEdge") && !document.getElementById(key).classList.contains("LBcorner")) {
            // console.log(document.getElementById(key).className);
            document.getElementById(`box-${i}`).classList.add("NumberOne");
        }
        // Set numbers on the right side of the bombs
        if (rightElement == "Safe" && !document.getElementById(key).classList.contains("REdge") && !document.getElementById(key).classList.contains("RTcorner")) {
            document.getElementById(`box-${j}`).classList.add("NumberOne");
        }
        // Set numbers on the top side of the bombs 
        if (!document.getElementById(key).classList.contains("TEdge") && !document.getElementById(key).classList.contains("LTcorner") && !document.getElementById(key).classList.contains("RTcorner")) {
            // console.log(tileMap.get(`box-${i - 8}`), key);
            document.getElementById(`box-${i - 8}`).classList.add("NumberTwo");
        }
        // Set numbers on the bottom side of the bombs
        if (!document.getElementById(key).classList.contains("BEdge") && !document.getElementById(key).classList.contains("LBcorner") && !document.getElementById(key).classList.contains("RBcorner")) {
            // console.log(tileMap.get(`box-${i - 8}`), key);
            document.getElementById(`box-${i + 10}`).classList.add("NumberThree");
        }
    }    
    i++; j++;
}






for (let [key, value] of tileMap) {
    if (value === "Bomb") {
        document.getElementById(key).classList.add("Bomb")
    }
    else if (value === "Safe") {
        document.getElementById(key).classList.add("Hidden");
    }
}

console.log(tileMap);