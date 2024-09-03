import { isEqual } from "./helpers";
import { TileType } from "./types";

export const checkStack = (tile : TileType , stack : TileType[]) => {
    for(let i = 0 ; i < stack.length ; i++){
        if(isEqual(tile, stack[i]))return true;
    }

    return false;
}