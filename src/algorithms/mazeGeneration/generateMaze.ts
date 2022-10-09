import { generateRandomMaze } from "./randomMaze";
import { generateRecursiveDivisionMaze } from "./recursiveDivision";

const generateMaze = (
  algorithm: string,
  isBlocking: any,
  setGrid: any,
  speed: string
) => {
  if (algorithm === "random") {
    generateRandomMaze(isBlocking, setGrid);
    return;
  } else if (algorithm === "recursive") {
    generateRecursiveDivisionMaze(isBlocking, setGrid, speed);
  }
};

export { generateMaze };
