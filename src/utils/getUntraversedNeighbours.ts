import { MAX_COL, MAX_ROW } from "./constants";
import { GridType, TileType } from "./types";


export const getUntraversedNeighbours = (grid : GridType , tile : TileType) => {

    const {row , col} = tile;
    const neighbours =  [];

    if(col>0){
        neighbours.push(grid[row][col-1]);
    }
    if(col < MAX_COL - 1){
        neighbours.push(grid[row][col+1]);
    }
    if(row>0){
        neighbours.push(grid[row-1][col]);
    }
    if(row < MAX_ROW - 1){
        neighbours.push(grid[row+1][col]);
    }

    return neighbours.filter((neighbour) => !neighbour.isTraversed);

}