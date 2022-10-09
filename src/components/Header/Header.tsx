import { useState } from "react";
import styles from "./Header.module.css";

const Header = (props: any) => {
  const [openDropdown, setOpenDropdown] = useState("none");

  console.log("HEADER RENDERING!");

  const onClickAlgo = () => {
    setOpenDropdown((prev) => (prev === "algo" ? "none" : "algo"));
  };

  const onClickSpeed = () => {
    setOpenDropdown((prev) => (prev === "speed" ? "none" : "speed"));
  };

  const onClickSelectMaze = () => {
    setOpenDropdown((prev) => (prev === "maze" ? "none" : "maze"));
  };

  const onClickClear = () => {
    props.clearGrid();
  };

  const onClickGenerateMaze = (mode: string) => {
    props.generateMaze(mode);
  };

  const onClickStart = () => {
    props.onStartVisualization();
  };

  return (
    <header className={styles.header}>
      <p className={styles.title}>Pathfinder</p>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          width: "100%",
        }}
      >
        {/* Select Alogrithm Dropdown */}
        <div
          className={styles.selectAlgorithmButton}
          style={{
            backgroundColor: openDropdown === "algo" ? "#36436b" : "",
            color: openDropdown === "algo" ? "white" : "",
          }}
          onClick={onClickAlgo}
        >
          <p>
            <span>
              {!props.selectedAlgorithm
                ? "Select an Algorithm"
                : "Algorithm: " + props.selectedAlgorithm}
            </span>
            <span style={{ marginLeft: "5px" }}>▾</span>
          </p>
          <div
            style={{
              display: openDropdown === "algo" ? "flex" : "none",
              zIndex: "2",
              position: "absolute",
              top: "110%",
              left: "0",
              color: "white",
              backgroundColor: "#383838",
              boxShadow: "1px 1px 2px grey",
              borderRadius: "8px",
              flexDirection: "column",
              alignItems: "start",
              padding: "10px 5px",
              textAlign: "start",
            }}
          >
            <div
              className={styles.algorithmOption}
              onClick={() => props.setSelectedAlgorithm("Dijkstra")}
            >
              Dijsktra
            </div>
            <div
              className={styles.algorithmOption}
              onClick={() => props.setSelectedAlgorithm("A*")}
            >
              A*
            </div>
            <div
              className={styles.algorithmOption}
              onClick={() => props.setSelectedAlgorithm("Breath First Search")}
            >
              Breath First Search
            </div>
            <div
              className={styles.algorithmOption}
              onClick={() => props.setSelectedAlgorithm("Depth First Search")}
            >
              Depth First Search
            </div>
          </div>
        </div>

        {/* Generate Maze Button */}
        <div
          className={styles.generateMazeButton}
          onClick={onClickSelectMaze}
          style={{
            backgroundColor: openDropdown === "maze" ? "#36436b" : "",
            color: openDropdown === "maze" ? "white" : "",
          }}
        >
          <p>Generate Maze</p>
          <div
            style={{
              display: openDropdown === "maze" ? "flex" : "none",
              zIndex: "2",
              position: "absolute",
              top: "110%",
              left: "0",
              color: "white",
              backgroundColor: "#383838",
              boxShadow: "1px 1px 2px grey",
              borderRadius: "8px",
              flexDirection: "column",
              alignItems: "start",
              padding: "10px 5px",
              textAlign: "start",
            }}
          >
            <div
              className={styles.mazeOption}
              onClick={() => onClickGenerateMaze("random")}
            >
              Random Maze
            </div>
            <div
              className={styles.mazeOption}
              onClick={() => onClickGenerateMaze("recursive")}
            >
              Recursive Division
            </div>
          </div>
        </div>

        {/* Start Pathfinding Button */}
        <div className={styles.startButtonContainer}>
          <div className={styles.button} onClick={onClickStart}>
            Start Visualization
          </div>
        </div>

        {/* Clear Button */}
        <div className={styles.clearButton} onClick={onClickClear}>
          <p>Clear Grid</p>
        </div>

        {/* Select Speed Dropdown */}
        <div
          className={styles.selectSpeedButton}
          style={{
            backgroundColor: openDropdown === "speed" ? "#36436b" : "",
            color: openDropdown === "speed" ? "white" : "",
          }}
          onClick={onClickSpeed}
        >
          <p>
            <span>{"Speed: " + props.selectedSpeed}</span>
            <span style={{ marginLeft: "5px" }}>▾</span>
          </p>
          <div
            style={{
              display: openDropdown === "speed" ? "flex" : "none",
              zIndex: "2",
              position: "absolute",
              top: "110%",
              left: "0",
              color: "white",
              backgroundColor: "#383838",
              boxShadow: "1px 1px 2px grey",
              borderRadius: "8px",
              flexDirection: "column",
              alignItems: "start",
              padding: "10px 5px",
              textAlign: "start",
            }}
          >
            <div
              className={styles.speedOption}
              onClick={() => props.setSelectedSpeed("Fast")}
            >
              Fast
            </div>
            <div
              className={styles.speedOption}
              onClick={() => props.setSelectedSpeed("Medium")}
            >
              Medium
            </div>
            <div
              className={styles.speedOption}
              onClick={() => props.setSelectedSpeed("Slow")}
            >
              Slow
            </div>
          </div>
        </div>

        {/* Help Button */}
        <div className={styles.helpButton}>
          <p>Help</p>
        </div>
      </div>
    </header>
  );
};

export { Header };
