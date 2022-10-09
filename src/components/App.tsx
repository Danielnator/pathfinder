import React, { memo, useRef, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Header } from "./Header/Header";
import { Grid } from "./Grid/Grid";
import { initializeGrid } from "../utils/initializeGrid";
import { generateMaze } from "../algorithms/mazeGeneration/generateMaze";
import { pathfinding } from "../algorithms/pathfinding/pathfinding";

function App() {
  const [grid, setGrid] = useState<any[][]>(initializeGrid());
  const [selectedAlgorithm, setSelectedAlgorithm] = useState();
  const [selectedSpeed, setSelectedSpeed] = useState("Fast");
  const isBlocking = useRef(false);

  console.log("APP RENDERING");

  const clearGrid = () => {
    if (isBlocking.current) {
      return;
    }
    isBlocking.current = true;
    setGrid(initializeGrid());
    isBlocking.current = false;
  };

  const onStartVisualization = () => {
    if (isBlocking.current || !selectedAlgorithm) {
      return;
    }
    pathfinding(selectedAlgorithm, isBlocking, grid, setGrid, selectedSpeed);
  };

  const onGenerateMaze = (algo: string) => {
    generateMaze(algo, isBlocking, setGrid, selectedSpeed);
  };

  return (
    <div className="App" style={{ height: "100%" }}>
      <Header
        clearGrid={clearGrid}
        generateMaze={onGenerateMaze}
        selectedAlgorithm={selectedAlgorithm}
        setSelectedAlgorithm={setSelectedAlgorithm}
        selectedSpeed={selectedSpeed}
        setSelectedSpeed={setSelectedSpeed}
        onStartVisualization={onStartVisualization}
      />
      <Grid setGrid={setGrid} grid={grid} />
    </div>
  );
}

export default App;
