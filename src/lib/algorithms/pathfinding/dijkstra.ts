import { getUntraversedNeighbours } from "../../../utils/getUntraversedNeighbours";
import { dropFromQueue, isEqual } from "../../../utils/helpers";
import { GridType, TileType } from "../../../utils/types";


export const dijkstra = (grid : GridType ,startTile : TileType , endTile : TileType) => {

    const traversedTiles = [];
    const base = grid[startTile.row][startTile.col];
    base.distance = 0;
    base.isTraversed = true;

    const unTraversedTiles = [base];

    while(unTraversedTiles.length !== 0){

        unTraversedTiles.sort((a,b) => a.distance - b.distance); // sorting in increasing order w.r.t distance
        const currentTile = unTraversedTiles.shift();

        if(currentTile){
            
            if(currentTile.isWall)continue;
            if(currentTile.distance===Infinity)break;
            currentTile.isTraversed= true;
            traversedTiles.push(currentTile);
            if(isEqual(currentTile , endTile))break;
            const neighbours = getUntraversedNeighbours(grid,currentTile);

            for(let i = 0 ; i < neighbours.length ; i++){
                if(currentTile.distance +  1 < neighbours[i].distance){

                    dropFromQueue(neighbours[i] ,unTraversedTiles);
                    neighbours[i].distance = currentTile.distance +1;
                    neighbours[i].parent = currentTile;

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

    return {traversedTiles, path};


}