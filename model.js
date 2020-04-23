var apiURL = "https://games-app-siit.herokuapp.com";



// function getGamesList() {
//     return fetch(apiURL + "/games", {
//                 method: "GET",
//                 headers: {
//                     "Content-Type": "application/x-www-form-urlencoded"
//                     }
//                 }).then(response => response.json());
// }

async function getGamesList() {
    const response = await fetch(apiURL + "/games", {
        method: "GET",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        }
    });
    const arrayOfGames = response.json();
    return arrayOfGames;
}

async function appStart() {
    const arrayOfGames = await getGamesList();
    console.log(arrayOfGames);
    for(var i = 0; i < arrayOfGames.length; i++) {
        createDomElement(arrayOfGames[i]);
    }
}



// function deleteGame(gameID) {
//     return fetch(apiURL + "/games/" + gameID, {
//         method: "DELETE",
//     }).then( r => r.text());
// }


async function deleteGameBox(gameID){
    const response = await fetch(apiURL + "/games/" + gameID, {
        method: "DELETE"
    });
    const responseMsg = response.text();
    return responseMsg;
}

async function deleteGame(gameID, div){
    const responseMsg = await deleteGameBox(gameID);
    console.log(responseMsg);
    console.log(gameID);
    removeDeletedElementFromDOM(div);
}





// function createGameRequest(gameObject) {
//     fetch(apiURL + "/games", {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/x-www-form-urlencoded"
//         },
//         body:gameObject
//     }).then(response => response.json())
// }


async function createGameRequest(gameObject){
    const response = await fetch(apiURL + "/games", {
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                },
                body:gameObject
            });
            const newGame = response.json;
            return newGame;
}

async function createGame(){
    const newGame = await createGameRequest(gameobject);
    createDomElement(newGame)
}



// function updateGameRequest(gameID, updatedGameObj){
//     return fetch(apiURL + "/games/" + gameID, {
//         method: "PUT",
//         headers: {
//             "Content-Type": "application/x-www-form-urlencoded"
//         },
//         body:updatedGameObj
//     }).then(response => response.json())
// }


async function updateGameRequest(gameID, updatedGameObj){
    const response = fetch(apiURL + "/games/" + gameID, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                },
                body:updatedGameObj
            })
            const newVersion = await response.json();
            return newVersion;
}


async function gameUpdate(gameID, updatedGameObj, gameBox){
    const newVersion = await updateGameRequest(gameID, updatedGameObj)
    newDomElement(gameBox, newVersion)
}