import { useRef } from "react"
import { Grid } from "./components/Grid"
import { PathFindProvider } from "./context/PathFindContext"
import { SpeedProvider } from "./context/SpeedContext"
import { TileProvider } from "./context/TileContext"
import { Nav } from "./components/Nav"



function App() {
  const isVisualizationRunningRef = useRef(false);

  return (
    <PathFindProvider>
      <TileProvider>
        <SpeedProvider>
          <div className="h-screen w-screen flex flex-col">
            <Nav isVisualizationRunningRef={isVisualizationRunningRef}/>
            <Grid isVisualizationRunningRef={isVisualizationRunningRef}/>
          </div>
        </SpeedProvider>
      </TileProvider>
    </PathFindProvider>  
  )
}

export default App
