export default class gameApi {
    listBombs = [];
    nRows = '';
    nColumns = '';
    nMines = '';
    clearedSquares = [];
    countSquares = {};
    flagList = [];

    constructor(nRows, nColumns, nMines) {
        this.nRows = nRows;
        this.nColumns = nColumns;
        this.nMines = nMines;
    }

    _filterList(list) {
        return list.filter((square) => {
            return this.clearedSquares.indexOf(square) < 0 && !this.countSquares.hasOwnProperty(square) && this.flagList.indexOf(square) < 0
        });
    }

    load(payload) {
        this.listBombs = payload.listBombs;
        this.clearedSquares = payload.clearedSquares;
        this.countSquares = payload.countSquares;
        this.flagList = payload.flagList;
    }

    bombsGenerator(exclude) {
        this.listBombs = [];

        for (let i=0;i < this.nMines; i++) {
            let random = Math.floor(Math.random() * this.nRows),
            random2 = Math.floor(Math.random() * this.nColumns),
            val = random + '-' + random2;

            while (this.listBombs.indexOf(val) >= 0 && val !== exclude) {
                random2 = Math.floor(Math.random() * this.nColumns);
                val = random + '-' + random2;
            }

            this.listBombs.push(val);
        }
    }

    getAdyacents(square) {
        let offset = square.split('-');

        let row = parseInt(offset[0], 10),
            column = parseInt(offset[1], 10),
            adys = [],
            tempList = [];

        if (row -1 >= 0) {
            adys.push([row -1, '-', column]);

            if (column -1 >= 0) {
                adys.push([row -1, '-', column -1]);
            }

            if (column +1 <= this.nColumns) {
                adys.push([row -1, '-', column +1]);
            }
        }

        if (row +1 <= this.nRows) {
            adys.push([row +1, '-', column]);

            if (column -1 >= 0) {
                adys.push([row +1, '-', column -1]);
            }

            if (column +1 <= this.nColumns) {
                adys.push([row +1, '-', column +1]);
            }
        }

        if (column -1 >= 0) {
            adys.push([row, '-', column -1]);
        }

        if (column +1 <= this.nColumns) {
            adys.push([row, '-', column +1]);
        }

        adys.forEach((ady) => {
            let result = ady.join('');
            tempList.push(result);
        });

        // check if any element of tempList already is cleared or counted or maybe flagged
        tempList = this._filterList(tempList);

        return tempList;
    }

    getAdyacentsBombsCount(squareAdys) {
        let mines = [];

        squareAdys.forEach((ady) => {
            if (this.listBombs.indexOf(ady) >= 0) {
                mines.push(ady);
            }
        });

        return mines.length;
    }

    checkBomb(square) {
        if (this.listBombs.indexOf(square) >= 0) {
            return true;
        }

        return false;
    }

    loopAdyacents(origSquareAdys) {
        for (let i = 0; i < origSquareAdys.length; i++) {
            let square = origSquareAdys[i];
            let squareAdys = this.getAdyacents(square);

            if (!squareAdys.length) {
                break;
            }

            // Try to get bombs on there adyacents and get a count and save it.
            let count = this.getAdyacentsBombsCount(squareAdys);

            if (count > 0) {
                this.countSquares = { ...this.countSquares, [square]: count };

                break;
            }
            else {
                // NO BOMBS ON ALL THESE REGION, add to CLEARED.
                if (this.clearedSquares.indexOf(square) < 0) { // IF FOUND
                    this.clearedSquares = [...this.clearedSquares, square];
                }

                // Work with his adyacents
                this.loopAdyacents(squareAdys);
            }
        }
    }

}
