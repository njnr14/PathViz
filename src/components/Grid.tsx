import { twMerge } from "tailwind-merge";
import { usePathfinding } from "../hooks/usePathfinding";
import { MAX_ROW } from "../utils/constants";
import { Tile } from "./Tile";
import { MutableRefObject, useState } from "react";
import { checkIfStartOrEnd, createNewGrid } from "../utils/helpers";


export function Grid( {isVisualizationRunningRef} : {isVisualizationRunningRef: MutableRefObject<boolean>}){
    const {grid ,setGrid} = usePathfinding();
    const [isMouseDown , setIsMouseDown] = useState(false);

    const handleMouseDown = (row:number , col : number) => {
      if(isVisualizationRunningRef.current || checkIfStartOrEnd(row,col)){
        return;
      }

      setIsMouseDown(true);

      const newGrid = createNewGrid(grid ,row , col);
      setGrid(newGrid);
    };

    const handleMouseUp = (row : number , col : number) => {
      if(isVisualizationRunningRef.current || checkIfStartOrEnd(row,col)){
        return;
      }

      setIsMouseDown(false);
    }

    const handleMouseEnter = (row : number , col : number) => {
      if(isVisualizationRunningRef.current || checkIfStartOrEnd(row,col)){
        return;
      }

      if(isMouseDown){
        const newGrid = createNewGrid(grid , row, col);
        setGrid(newGrid);
      }
      
    }


    return (
        <div
            className={twMerge(
                //base class
                "flex items-center flex-col justify-center border-sky-300 mt-5",
                //Control Grid Height
                `lg:min-h-[${MAX_ROW * 17}px] md:min-h-[${MAX_ROW * 15}px] xs:min-h-[${MAX_ROW * 8}px] min-h-[${MAX_ROW * 7}px] `,
                //Control Grid Width
                `lg:w-[${MAX_ROW * 17}px] md:w-[${MAX_ROW * 15}px] xs:w-[${MAX_ROW * 8}px] w-[${MAX_ROW * 7}px] `
            )}
        >
        {grid.map((r, rowIndex) => (
        <div key={rowIndex} className="flex">
          
          {r.map((tile , tileInd) => {
            const  {row ,col ,isEnd , isStart , isPath , isTraversed , isWall} = tile;
            return(
              <Tile
                key = {tileInd}
                row = {tile.row}
                col = {tile.col}
                isEnd = {isEnd}
                isStart ={isStart}
                isPath  = {isPath}
                isTraversed = {isTraversed}
                isWall = {isWall}
                handleMouseDown = {()=> handleMouseDown(row , col)}
                handleMouseUp = {()=> handleMouseUp(row , col)}
                handleMouseEnter = {()=> handleMouseEnter(row , col)}
              />
            )
          })}
        </div>
      ))}

        </div>
    )

}