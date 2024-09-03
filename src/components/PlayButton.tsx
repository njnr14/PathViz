// import { MouseEventHandler } from "react";
import { BsFillPlayFill } from "react-icons/bs";
import { GrPowerReset } from "react-icons/gr";

export function  PlayButton({
    handleRunVisualizer,
    isDisabled,
    isGraphVisualized,
}:{
    handleRunVisualizer: ()=> void;
    isDisabled : boolean;
    isGraphVisualized: boolean;
}){
    return(
        <button 
        disabled = {isDisabled}
        onClick={handleRunVisualizer}
        className="disabled:pointer-events-none disabled:opacity-50 rounded-full transition ease-in round-full p-2.5 shadow-md bg-green-500 hover:bg-green-600 border-none active:ring-green-300   focus:outline-none focus:ring-green-300 focus:ring-opacity-30 "
        >
            {isGraphVisualized ? (<GrPowerReset className="h-5 w-5"/>) :(<BsFillPlayFill className="h-5 w-5"/>)}
        </button>
    )
}