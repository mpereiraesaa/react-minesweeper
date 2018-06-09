export function getGameData() {
    let data = localStorage.getItem("minesweeper");

    if (!data || data.length === 0) {
        return {};
    }

    return JSON.parse(data);
}

export function saveCurrentGame(data) {
    let oldData = getGameData();

    let newData = { ...oldData, currentGame: data };

    let packageData = JSON.stringify(newData);

    localStorage.setItem("minesweeper", packageData);
}

export function getCurrentGame() {
    let gameData = getGameData();

    return gameData.currentGame || { not_found: true };
}
