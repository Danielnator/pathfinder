import { findPathBFS } from "./bfs";
import { findPathDFS } from "./dfs";

const pathfinding = (
  algorithm: string,
  isBlocking: any,
  grid: any,
  setGrid: any,
  speed: string,
) => {
  if (algorithm === "Breath First Search") {
    findPathBFS(isBlocking, grid, setGrid, speed);
    return;
  } else if (algorithm === "Depth First Search") {
    findPathDFS(isBlocking, grid, setGrid, speed);
  }
};

export { pathfinding };
