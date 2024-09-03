import { checkStack } from "../../../utils/checkStack";
import { getUntraversedNeighbours } from "../../../utils/getUntraversedNeighbours";
import { isEqual } from "../../../utils/helpers";
import { GridType, TileType } from "../../../utils/types";

export const dfs = (grid:GridType , startTile :TileType ,endTile : TileType) => {

    const traversedTiles = [];
    const base   = grid[startTile.row][startTile.col];

    base.distance = 0;
    base.isTraversed = true;

    const unTraversedTiles = [base];

    while(unTraversedTiles.length !== 0){
        const currentTile  = unTraversedTiles.pop();
        if(currentTile){
            if(currentTile.isWall)continue;
            if(currentTile.distance === Infinity)break;
            currentTile.isTraversed = true;
            traversedTiles.push(currentTile);
            if(isEqual(currentTile,endTile))break;
            
            const neighbours = getUntraversedNeighbours(grid , currentTile);

            for(let i = 0 ; i < neighbours.length ;i++){
                if(!checkStack(neighbours[i] , unTraversedTiles)){
                    neighbours[i].distance = 1 + currentTile.distance;
                    neighbours[i].parent  = currentTile;
                    unTraversedTiles.push(neighbours[i]);
                }
            }
        }
    }

    const path =[];

    let tile = grid[endTile.row][endTile.col];
    while(tile!=null){
        tile.isPath = true;
        path.unshift(tile);
        tile = tile.parent!;
    }

    return {traversedTiles , path};
}   