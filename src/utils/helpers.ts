
import { MAX_COL, MAX_ROW } from "./constants";
import { GridType, TileType } from "./types";


const createRow = (row : number, startTile : TileType , endTile : TileType) =>{
    const curRow = [];
    for (let col = 0; col < MAX_COL; col++) {
        
        curRow.push({
            row,
            col,
            isEnd : row===endTile.row && col === endTile.col,
            isWall : false,
            isPath : false,
            distance : Infinity,
            isStart : row === startTile.row && col === startTile.col,
            isTraversed : false,
            parent : null
        });
        
    }
    return curRow;
}

export const createGrid = (startTile: TileType , endTile : TileType) => {
    const grid : GridType = [];
    for (let row = 0; row < MAX_ROW; row++) {
        grid.push(createRow(row,startTile , endTile));        
    }
    return grid;
} 

export const checkIfStartOrEnd = (row : number, col :number) => {
    return (row === 1 && col === 1)||(row === MAX_ROW-2 && col === MAX_COL -2);
}

export const createNewGrid = (grid : GridType , row : number , col : number) => {
    const newGrid = grid.slice();
    const newTile = {
        ...newGrid[row][col],
        isWall : !newGrid[row][col].isWall,
    };
    newGrid[row][col] = newTile;
    return newGrid;
}

export const isEqual = (a : TileType , b : TileType) =>{
    return a.row===b.row && a.col===b.col;
}
export const isRowColEqual = (row : number , col : number ,tile :TileType ) =>{
    return row===tile.row && col===tile.col;
}

export const sleep = (ms : number) => {
    return new Promise((resolve) => setTimeout(resolve , ms));
}

export const getRandInt = (min : number , max  : number) => {
    min = Math.ceil(min);
    max = Math.floor(max);

    return Math.floor(Math.random()*(max-min) + min);
}

export const dropFromQueue = (tile : TileType  , queue : TileType[]) => {
    for(let i= 0 ; i < queue.length ; i++){
        if(isEqual(tile,queue[i])){
            queue.splice(i,1);
            break;
        }
    }
};