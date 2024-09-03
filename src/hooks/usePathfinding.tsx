import { useContext } from "react"
import { PathFindContext } from "../context/PathFindContext";


export const usePathfinding = () => {
    const context  = useContext(PathFindContext);
    if(!context){
        throw new Error("usePathFinding must be used within PathFindingProvider");
        
    }
    return context;

}