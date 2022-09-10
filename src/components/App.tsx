import React, { useRef, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Header } from "./Header/Header";
import { Grid } from "./Grid/Grid";
import { initializeGrid } from "../utils/initializeGrid";
import { generateMaze } from "../algorithms/mazeGeneration/generateMaze";

function App() {
  const [grid, setGrid] = useState<any[][]>(initializeGrid());
  const [selectedAlgorithm, setSelectedAlgorithm] = useState();
  const [selectedSpeed, setSelectedSpeed] = useState("Fast");
  const isBlocking = useRef(false);

  const clearGrid = () => {
    if (isBlocking.current) {
      return;
    }
    isBlocking.current = true;
    setGrid(initializeGrid());
    isBlocking.current = false;
  };

  return (
    <div className="App" style={{ height: "100%" }}>
      <Header
        clearGrid={clearGrid}
        generateMaze={(algo: string) => generateMaze(algo, isBlocking, setGrid)}
        selectedAlgorithm={selectedAlgorithm}
        setSelectedAlgorithm={setSelectedAlgorithm}
        selectedSpeed={selectedSpeed}
        setSelectedSpeed={setSelectedSpeed}
      />
      <Grid setGrid={setGrid} grid={grid} />
    </div>
  );
}

export default App;
