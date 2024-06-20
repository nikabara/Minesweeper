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

// SetBombs(12, 8.5, 9.5);
SetBombs(10, 8, 10);

const BombCountToNumberImageClass = (bombCount) => {
    switch (bombCount) {
        case 1:
            return "NumberOne";
            
        case 2:
            return "NumberTwo";
            
        case 3:
            return "NumberThree";
        
        case 4:
            return "NumberFour";
    
        default:
            break;
    }
}

let i = 0; // Left
let j = 2; // Right

// Marking number places
for (let [key, value] of tileMap) {
    if (value === "Bomb") {
        let leftElement = tileMap.get(`box-${i}`);
        let rightElement = tileMap.get(`box-${j}`);
        let topElement = tileMap.get(`box-${i-8}`);
        let bottomElement = tileMap.get(`box-${i + 10}`);
        let TopLeftElement = tileMap.get(`box-${i - 9}`);
        let TopRightElement = tileMap.get(`box-${j - 9}`);
        let BottomLeftElement = tileMap.get(`box-${i + 9}`);
        let BottomRightElement = tileMap.get(`box-${j + 9}`);

        // Set numbers on the left side of the bombs
        if (leftElement == "Safe" && !document.getElementById(key).classList.contains("LEdge") && !document.getElementById(key).classList.contains("LBcorner")) {
            // console.log(document.getElementById(key).className);
            document.getElementById(`box-${i}`).classList.add("NumberSpot");
        }
        // Set numbers on the right side of the bombs
        if (rightElement == "Safe" && !document.getElementById(key).classList.contains("REdge") && !document.getElementById(key).classList.contains("RTcorner")) {
            document.getElementById(`box-${j}`).classList.add("NumberSpot");
        }
        // Set numbers on the top side of the bombs 
        if (topElement == "Safe" && !document.getElementById(key).classList.contains("TEdge") && !document.getElementById(key).classList.contains("LTcorner") && !document.getElementById(key).classList.contains("RTcorner")) {
            // console.log(tileMap.get(`box-${i - 8}`), key);
            document.getElementById(`box-${i - 8}`).classList.add("NumberSpot");
        }
        // Set numbers on the bottom side of the bombs
        if (bottomElement == "Safe" && !document.getElementById(key).classList.contains("BEdge") && !document.getElementById(key).classList.contains("LBcorner") && !document.getElementById(key).classList.contains("RBcorner")) {
            // console.log(tileMap.get(`box-${i - 8}`), key);
            document.getElementById(`box-${i + 10}`).classList.add("NumberSpot");
        }
        // Set numbers on diagonals of the bombs
        if (TopLeftElement == "Safe" && !document.getElementById(key).classList.contains("LEdge") && !document.getElementById(key).classList.contains("LBcorner")) {
            // console.log(document.getElementById(`box-${i - 9}`).id, i)
            document.getElementById(`box-${i - 9}`).classList.add("NumberSpot");
        }
        if (TopRightElement == "Safe" && !document.getElementById(key).classList.contains("REdge") && !document.getElementById(key).classList.contains("RBcorner") && !document.getElementById(key).classList.contains("RTcorner")) {
            // console.log(document.getElementById(`box-${j - 9}`).id, j);
            document.getElementById(`box-${j - 9}`).classList.add("NumberSpot");
        }
        if (BottomLeftElement == "Safe" && !document.getElementById(key).classList.contains("LEdge") && !document.getElementById(key).classList.contains("LBcorner")) {
            // console.log(document.getElementById(`box-${i + 9}`).id, i);
            document.getElementById(`box-${i + 9}`).classList.add("NumberSpot");
        }
        // 
        if (BottomRightElement == "Safe" && !document.getElementById(key).classList.contains("REdge") && !document.getElementById(key).classList.contains("RBcorner") && !document.getElementById(key).classList.contains("LBcorner")) {
            // console.log(document.getElementById(`box-${j + 9}`).id, i);
            document.getElementById(`box-${j + 9}`).classList.add("NumberSpot");
        }
    }    
    i++; j++;
}

const SetNumbers = (array) => {
    let i = 0;
    let j = 2;

    let bombCount = 0;

    for(let [key, value] of array) {
        let leftElement = array.get(`box-${i}`);
        let rightElement = array.get(`box-${j}`);
        let topElement = array.get(`box-${i-8}`);
        let bottomElement = array.get(`box-${i + 10}`);
        let TopLeftElement = array.get(`box-${i - 9}`);
        let TopRightElement = array.get(`box-${j - 9}`);
        let BottomLeftElement = array.get(`box-${i + 9}`);
        let BottomRightElement = array.get(`box-${j + 9}`);

        if (document.getElementById(key).classList.contains("NumberSpot")) {
            if (leftElement == "Bomb" && !document.getElementById(key).classList.contains("LEdge") && !document.getElementById(key).classList.contains("LBcorner")) {
                bombCount++;
            }
            if (rightElement == "Bomb" && !document.getElementById(key).classList.contains("REdge") && !document.getElementById(key).classList.contains("RTcorner")) {
                bombCount++;
            }
            if (topElement == "Bomb" && !document.getElementById(key).classList.contains("TEdge") && !document.getElementById(key).classList.contains("LTcorner") && !document.getElementById(key).classList.contains("RTcorner")) {
                bombCount++;
            }
            if (bottomElement == "Bomb" && !document.getElementById(key).classList.contains("BEdge") && !document.getElementById(key).classList.contains("LBcorner") && !document.getElementById(key).classList.contains("RBcorner")) {
                bombCount++;
            }
            if (TopLeftElement == "Bomb" && !document.getElementById(key).classList.contains("LEdge") && !document.getElementById(key).classList.contains("LBcorner")) {
                // console.log(document.getElementById(`box-${i - 9}`).id, i)
                bombCount++;
            }
            if (TopRightElement == "Bomb" && !document.getElementById(key).classList.contains("REdge") && !document.getElementById(key).classList.contains("RBcorner") && !document.getElementById(key).classList.contains("RTcorner")) {
                // console.log(document.getElementById(`box-${j - 9}`).id, j);
                bombCount++;
            }
            if (BottomLeftElement == "Bomb" && !document.getElementById(key).classList.contains("LEdge") && !document.getElementById(key).classList.contains("LBcorner")) {
                // console.log(document.getElementById(`box-${i + 9}`).id, i);
                bombCount++;
            }
            // 
            if (BottomRightElement == "Bomb" && !document.getElementById(key).classList.contains("REdge") && !document.getElementById(key).classList.contains("RBcorner") && !document.getElementById(key).classList.contains("LBcorner")) {
                bombCount++;
            }
            document.getElementById(key).classList.add(BombCountToNumberImageClass(bombCount));
        }
        bombCount = 0;
        i++; j++;
    }
}





for (let [key, value] of tileMap) {
    if (value === "Bomb") {
        document.getElementById(key).classList.add("Bomb")
    }
    else if (value === "Safe") {
        document.getElementById(key).classList.add("Hidden");
    }
    document.getElementById(key).classList.add("Hidden");

}

// console.log(tileMap);


SetNumbers(tileMap);


document.body.onclick = (item) => {
    if (item.target.classList.contains("Hidden")) {
        item.target.classList.remove("Hidden")
    }
    if (item.target.classList.contains("Bomb")) {
        location.reload();
    }
}
