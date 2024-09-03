import {  createContext, useState } from "react";
import { ReactNode } from "react";
import { AlgorithmType, GridType, MazeType } from "../utils/types";
import { createGrid } from "../utils/helpers";
import { END_TILE_CONFIGURATION, START_TILE_CONFIGURATION } from "../utils/constants";


 export interface PathFindContextInterface{
    
    algorithm : AlgorithmType;
    setAlgorithm : (algorithm: AlgorithmType) => void;
    maze: MazeType;
    setMaze : (maze: MazeType) => void;
    grid : GridType;
    setGrid : (grid: GridType) => void;
    isGraphVisualized: boolean;
    setIsGraphVisualized: (isGraphVisualized : boolean) => void;
}



export const PathFindContext = createContext<PathFindContextInterface | undefined>(undefined); 

export const PathFindProvider =  ({children} : {children: ReactNode })=>{
    const [algorithm, setAlgorithm] = useState<AlgorithmType>("BFS");
  const [maze, setMaze] = useState<MazeType>("NONE");
  const [grid, setGrid] = useState<GridType>(
    createGrid(START_TILE_CONFIGURATION, END_TILE_CONFIGURATION)
  );
  const [isGraphVisualized, setIsGraphVisualized] = useState<boolean>(false);
    
    return (
        <PathFindContext.Provider
            value={{
            algorithm ,
            setAlgorithm,
            maze,
            setMaze,
            grid,
            setGrid,
            isGraphVisualized,
            setIsGraphVisualized,
            }}
        >{children}</PathFindContext.Provider>
    )

}